// services/promptGenerator.ts

import { BaseStyle, ColorPalette, Occasion, Season } from '../../types/data';
import { PromptGenerationResponse,StyleGenerationResponse } from '../../types/response';

interface StyleInputs {
  baseStyle: BaseStyle;
  colorScheme: ColorPalette[];
  occasion: Occasion[];
  season: Season;
}

class PromptGenerator {
  private static styleDescriptors = {
    Minimalist: ["clean lines", "understated", "sleek", "contemporary"],
    Bohemian: ["free-spirited", "artistic", "layered", "eclectic"],
    Streetwear: ["urban", "bold", "modern", "edgy"],
    Classic: ["timeless", "refined", "sophisticated", "tailored"],
    Romantic: ["soft", "feminine", "flowing", "delicate"],
    Sporty: ["athletic", "dynamic", "functional", "casual"]
  };

  private static colorDescriptors = {
    Neutral: ["beige", "gray", "white", "black", "cream"],
    Pastel: ["soft", "muted", "gentle tones"],
    Vibrant: ["bold", "striking", "rich colors"],
    Monochrome: ["black and white", "grayscale"],
    "Earth Tones": ["warm browns", "deep greens", "terracotta"],
    "Jewel Tones": ["deep purple", "emerald", "sapphire blue", "ruby red"]
  };

  private static occasionModifiers = {
    Work: ["professional", "polished", "office-appropriate"],
    Casual: ["relaxed", "everyday", "comfortable"],
    Evening: ["elegant", "sophisticated", "dressy"],
    Formal: ["refined", "luxurious", "high-end"],
    Vacation: ["relaxed", "resort-wear", "travel-friendly"],
    Athleisure: ["sporty", "comfortable", "athletic-inspired"]
  };

  private static seasonalElements = {
    Spring: ["light fabrics", "fresh", "bright"],
    Summer: ["breezy", "lightweight", "sun-ready"],
    Autumn: ["layered", "cozy", "rich textures"],
    Winter: ["warm", "cozy", "substantial"],
    "All Seasons": ["versatile", "adaptable"]
  };

  private static getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  private static buildStyleDescription(inputs: StyleInputs): string {
    const styleWords = this.styleDescriptors[inputs.baseStyle];
    const colorWords = inputs.colorScheme.flatMap(color => this.colorDescriptors[color]);
    const occasionWords = inputs.occasion.flatMap(occ => this.occasionModifiers[occ]);
    const seasonWords = this.seasonalElements[inputs.season];

    const styleDesc = this.getRandomElement(styleWords);
    const colorDesc = this.getRandomElement(colorWords);
    const occasionDesc = this.getRandomElement(occasionWords);
    const seasonDesc = this.getRandomElement(seasonWords);

    return `${styleDesc}, ${colorDesc}, ${occasionDesc}, ${seasonDesc}`;
  }

  public static generatePrompt(inputs: StyleInputs): PromptGenerationResponse {
    try {
      const styleDescription = this.buildStyleDescription(inputs);
      
      const prompt = `
        High-quality fashion mood board featuring a ${inputs.baseStyle.toLowerCase()} style outfit.
        Style elements: ${styleDescription}.
        Professional fashion photography, detailed textures, perfect lighting,
        modern composition, trending on Pinterest, magazine editorial quality,
        8k resolution
      `.trim().replace(/\s+/g, ' ');

      return {
        success: true,
        prompt: prompt
      };
    } catch (error) {
      return {
        success: false,
        prompt: '',
        error: error instanceof Error ? error.message : 'Failed to generate prompt'
      };
    }
  }

    // Direct integration with StableDiffusionAPI
    public static async generateImageFromStyle(inputs: StyleInputs): Promise<StyleGenerationResponse> {
        const promptResult = this.generatePrompt(inputs);
        
        if (!promptResult.success) {
            return {
                success: false,
                images: [],
                error: promptResult.error
            };
        }

        try {
            const StableDiffusionAPI = (await import('./stablediffusion-api')).default;
            return await StableDiffusionAPI.generateImage(promptResult.prompt);
        } catch (error) {
            return {
                success: false,
                images: [],
                error: error instanceof Error ? error.message : 'Failed to generate image'
            };
        }
    }
}

export default PromptGenerator;