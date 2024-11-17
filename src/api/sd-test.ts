import fetch from 'node-fetch';
import * as fs from 'fs/promises';
import * as path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
dotenv.config({
    path: path.resolve(process.cwd(), '.env')
});

// Add your Hugging Face token here
const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

async function generateImage(prompt: string, maxRetries: number = 5, initialWait: number = 10): Promise<void> {
    try {
        // Create output directory if it doesn't exist
        const outputDir = path.join(__dirname, "test-outputs");
        try {
            await fs.mkdir(outputDir, { recursive: true });
        } catch (error) {
            console.error("Error creating directory:", error);
        }

        const API_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3.5-large";
        const headers = {
            "Authorization": `Bearer ${HF_ACCESS_TOKEN}`,
            "Content-Type": "application/json"
        };

        // Retry loop
        for (let attempt = 0; attempt < maxRetries; attempt++) {
            try {
                console.log(`\nAttempt ${attempt + 1} of ${maxRetries}`);
                console.log(`Generating image for prompt: ${prompt}`);

                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({
                        inputs: prompt
                    })
                });

                if (response.ok) {
                    const blob = await response.blob();
                    const arrayBuffer = await blob.arrayBuffer();
                    const buffer = Buffer.from(arrayBuffer);

                    // Save the image
                    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                    const outputPath = path.join(outputDir, `output_${timestamp}.png`);
                    await fs.writeFile(outputPath, buffer);

                    console.log(`Image successfully generated and saved to: ${outputPath}`);
                    return;
                } else if (response.status === 500 && (await response.text()).includes("Model too busy")) {
                    const waitTime = initialWait * (attempt + 1);
                    console.log(`Model busy. Waiting ${waitTime} seconds before retry...`);
                    await new Promise(resolve => setTimeout(resolve, waitTime * 1000));
                    continue;
                } else {
                    console.log(`Error: ${response.status}`);
                    console.log(`Response: ${await response.text()}`);
                    break;
                }

            } catch (error) {
                console.log(`Request error: ${error}`);
                if (attempt < maxRetries - 1) {
                    await new Promise(resolve => setTimeout(resolve, initialWait * 1000));
                }
                continue;
            }
        }

        console.log("\nFailed to generate image after all retries");

    } catch (error) {
        console.error("Error generating image:", error);
    }
}

// Test the function
const testPrompt = "Astronaut in a space, cold color palette, muted colors, detailed, 8k";

if (!HF_ACCESS_TOKEN) {
    console.log("Please add your HuggingFace access token to the script");
} else {
    generateImage(testPrompt);
}
