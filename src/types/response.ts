// types/response.ts
import { BaseStyle, ColorPalette, Occasion, Season } from './data';

export interface GeneratedImage {
    url: string;
    id: string;
    seed?: number;
}

export interface StyleGenerationResponse {
    success: boolean;
    images: GeneratedImage[];
    error?: string;
}

export interface PromptGenerationResponse {
    success: boolean;
    prompt: string;
    error?: string;
}

export interface StyleCustomizationState {
    baseStyle: BaseStyle;
    colorScheme: ColorPalette[];
    occasion: Occasion[];
    season: Season;
    isLoading: boolean;
    error?: string;
}

export type StyleGenerationStatus = 'idle' | 'generating' | 'success' | 'error';

export interface StyleGenerationState {
    status: StyleGenerationStatus;
    images: GeneratedImage[];
    error?: string;
}