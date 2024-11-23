// types/data.ts

// Dropdown option types
export type BaseStyle = "Minimalist" | "Bohemian" | "Streetwear" | "Classic" | "Romantic" | "Sporty";
export type ColorPalette = "Neutral" | "Pastel" | "Vibrant" | "Monochrome" | "Earth Tones" | "Jewel Tones";
export type Occasion = "Work" | "Casual" | "Evening" | "Formal" | "Vacation" | "Athleisure";
export type Season = "Spring" | "Summer" | "Autumn" | "Winter" | "All Seasons";

// Dropdown options
export const baseStyles: BaseStyle[] = ["Minimalist", "Bohemian", "Streetwear", "Classic", "Romantic", "Sporty"];
export const colorPalettes: ColorPalette[] = ["Neutral", "Pastel", "Vibrant", "Monochrome", "Earth Tones", "Jewel Tones"];
export const occasions: Occasion[] = ["Work", "Casual", "Evening", "Formal", "Vacation", "Athleisure"];
export const seasons: Season[] = ["Spring", "Summer", "Autumn", "Winter", "All Seasons"];

// Style Preset Interface (existing)
export interface StylePreset {
    id: string;
    name: string;
    description: string;
    image: string;
    baseStyle: BaseStyle;
    colorScheme: ColorPalette[];
    occasion: Occasion[];
    season: Season;
    moodKeywords: string[];
    previewImages: string[];
}

// Style Presets Data
export const stylePresets: StylePreset[] = [
    {
        id: '1',
        name: "Minimal Elegance",
        description: "Clean lines and understated sophistication",
        image: "/images/img-1.jpg",
        baseStyle: "Minimalist",
        colorScheme: ["Neutral", "Monochrome"],
        occasion: ["Work", "Formal"],
        season: "All Seasons",
        moodKeywords: ["sophisticated", "clean", "modern"],
        previewImages: ["/images/img-1.jpg", "/images/img-3.jpg"]
    },
    {
        id: '2',
        name: "Bohemian Spirit",
        description: "Free-spirited and artistic with natural elements",
        image: "/images/img-7.jpg",
        baseStyle: "Bohemian",
        colorScheme: ["Earth Tones", "Vibrant"],
        occasion: ["Casual", "Vacation"],
        season: "Summer",
        moodKeywords: ["artistic", "free-spirited", "natural"],
        previewImages: ["/images/img-2.jpg", "/images/img-4.jpg"]
    },
    {
        id: '3',
        name: "Urban Edge",
        description: "Contemporary streetwear with bold attitude",
        image: "/images/img-3.jpg",
        baseStyle: "Streetwear",
        colorScheme: ["Monochrome", "Vibrant"],
        occasion: ["Casual", "Evening"],
        season: "All Seasons",
        moodKeywords: ["bold", "urban", "contemporary"],
        previewImages: ["/images/img-3.jpg", "/images/img-5.jpg"]
    }
];