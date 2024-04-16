import * as fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

async function createImageVariations(
  imageFilePath: string,
  prompt: string,
  numImages: number,
  imageSize: string
): Promise<string[]> {
    const { Configuration, OpenAIApi } = require("openai");
    const apiKey = process.env.DALLE_API_KEY;

    const config: any = new Configuration({
	    apiKey: apiKey,
    });

    const openai = new OpenAIApi(config);

  try {
    const response = await openai.createImageVariation(
      fs.createReadStream(imageFilePath),
      numImages,
      imageSize,
      { prompt }
    );

    const outputUrls = response.data.data.map((item: any) => item.url);
    return outputUrls;
  } catch (error:any) {
    if (error.response) {
      console.log('Error status:', error.response.status);
      console.log('Error data:', error.response.data);
    } else {
      console.log('Error message:', error.message);
    }
    throw error; // Re-throw the error for the caller to handle if needed
  }
}

// Example usage
(async () => {
  try {
    const imageFilePath = 'image.png';
    const prompt = 'Generate image variation';
    const numImages = 1;
    const imageSize = '1024x1024';

    const outputUrls = await createImageVariations(
      imageFilePath,
      prompt,
      numImages,
      imageSize
    );

    console.log('Output URLs:', outputUrls);
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();