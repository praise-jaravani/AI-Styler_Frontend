import dotenv from 'dotenv';
dotenv.config();

const { Configuration, OpenAIApi } = require("openai");
const apiKey = process.env.DALLE_API_KEY;

const config: any = new Configuration({
	apiKey: apiKey,
});

const openai = new OpenAIApi(config);

async function generateImage(prompt: string, numberOfImages: number, imageSize: string): Promise<string[]> {
	try {
		const createImageRequest = {
			prompt: prompt,
			n: numberOfImages,
			size: imageSize,
		};

		const response = await openai.createImage(createImageRequest);
		const imageData = response.data.data[0].url;

		return imageData;
	} catch (error: any) {
		console.error("Error:", error.message);
		throw error;
	}
}

(async () => {
	const prompt = "A sketch of a cat playing basketball";
	const numberOfImages = 1;
	const imageSize = "1024x1024";

	try {
		const imageData = await generateImage(prompt, numberOfImages, imageSize);
		console.log(imageData);
		// Now you can use 'imageData' for further processing or display
	} catch (error) {
		// Handle error
	}
})();

