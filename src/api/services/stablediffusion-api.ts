// services/stablediffusion-api.tsx

import { StyleGenerationResponse, GeneratedImage } from '../../types/response';

class StableDiffusionAPI {
    private static HF_ACCESS_TOKEN = process.env.REACT_APP_HF_ACCESS_TOKEN;
    private static API_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3.5-large";

    private static async blobToDataURL(blob: Blob): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    public static async generateImage(
        prompt: string, 
        maxRetries: number = 5, 
        initialWait: number = 10
    ): Promise<StyleGenerationResponse> {
        if (!this.HF_ACCESS_TOKEN) {
            return {
                success: false,
                images: [],
                error: "No Hugging Face access token provided"
            };
        }

        const headers = {
            "Authorization": `Bearer ${this.HF_ACCESS_TOKEN}`,
            "Content-Type": "application/json"
        };

        // Retry loop
        for (let attempt = 0; attempt < maxRetries; attempt++) {
            try {
                console.log(`\nAttempt ${attempt + 1} of ${maxRetries}`);
                console.log(`Generating image for prompt: ${prompt}`);

                const response = await fetch(this.API_URL, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({
                        inputs: prompt
                    })
                });

                if (response.ok) {
                    const blob = await response.blob();
                    // Convert blob to data URL
                    const dataUrl = await this.blobToDataURL(blob);
                    
                    const generatedImage: GeneratedImage = {
                        url: dataUrl,
                        id: new Date().toISOString()
                    };

                    return {
                        success: true,
                        images: [generatedImage]
                    };

                } else if (response.status === 500 && (await response.text()).includes("Model too busy")) {
                    const waitTime = initialWait * (attempt + 1);
                    console.log(`Model busy. Waiting ${waitTime} seconds before retry...`);
                    await new Promise(resolve => setTimeout(resolve, waitTime * 1000));
                    continue;
                } else {
                    console.log(`Error: ${response.status}`);
                    const errorText = await response.text();
                    console.log(`Response: ${errorText}`);
                    
                    if (attempt === maxRetries - 1) {
                        return {
                            success: false,
                            images: [],
                            error: `Failed to generate image: ${errorText}`
                        };
                    }
                }

            } catch (error) {
                console.log(`Request error: ${error}`);
                if (attempt < maxRetries - 1) {
                    await new Promise(resolve => setTimeout(resolve, initialWait * 1000));
                    continue;
                }
                
                return {
                    success: false,
                    images: [],
                    error: error instanceof Error ? error.message : 'Unknown error occurred'
                };
            }
        }

        return {
            success: false,
            images: [],
            error: "Failed to generate image after all retries"
        };
    }
}

export default StableDiffusionAPI;