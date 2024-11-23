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
        image: "/images/bohemian.jpg",
        baseStyle: "Bohemian",
        colorScheme: ["Earth Tones", "Vibrant"],
        occasion: ["Casual", "Vacation"],
        season: "Summer",
        moodKeywords: ["artistic", "free-spirited", "natural"],
        previewImages: ["/images/bohemian.jpg", "/images/bohemian.jpg"]
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
    },
    {
        id: '4',
        name: "Classic Professional",
        description: "Timeless sophistication for the modern professional",
        image: "/images/img-4.jpg",
        baseStyle: "Classic",
        colorScheme: ["Neutral", "Earth Tones"],
        occasion: ["Work", "Formal"],
        season: "All Seasons",
        moodKeywords: ["professional", "polished", "refined"],
        previewImages: ["/images/img-4.jpg", "/images/img-6.jpg"]
    },
    {
        id: '5',
        name: "Romantic Evening",
        description: "Elegant and feminine with graceful details",
        image: "/images/img-5.jpg",
        baseStyle: "Romantic",
        colorScheme: ["Jewel Tones", "Pastel"],
        occasion: ["Evening", "Formal"],
        season: "Spring",
        moodKeywords: ["elegant", "feminine", "graceful"],
        previewImages: ["/images/img-5.jpg", "/images/img-7.jpg"]
    },
    {
        id: '6',
        name: "Active Lifestyle",
        description: "Performance meets style for the dynamic individual",
        image: "/images/img-6.jpg",
        baseStyle: "Sporty",
        colorScheme: ["Vibrant", "Neutral"],
        occasion: ["Athleisure", "Casual"],
        season: "Summer",
        moodKeywords: ["active", "dynamic", "comfortable"],
        previewImages: ["/images/img-6.jpg", "/images/img-8.jpg"]
    },
    {
        id: '7',
        name: "Vacation Boho",
        description: "Free-spirited resort wear with artistic flair",
        image: "/images/img-8.jpg",
        baseStyle: "Bohemian",
        colorScheme: ["Pastel", "Vibrant"],
        occasion: ["Vacation", "Casual"],
        season: "Summer",
        moodKeywords: ["relaxed", "artistic", "breezy"],
        previewImages: ["/images/img-8.jpg", "/images/img-10.jpg"]
    },
    {
        id: '8',
        name: "Night Out Edge",
        description: "Bold streetwear with evening sophistication",
        image: "/images/img-9.jpg",
        baseStyle: "Streetwear",
        colorScheme: ["Jewel Tones", "Monochrome"],
        occasion: ["Evening", "Casual"],
        season: "All Seasons",
        moodKeywords: ["bold", "edgy", "sophisticated"],
        previewImages: ["/images/img-9.jpg", "/images/img-11.jpg"]
    }
];