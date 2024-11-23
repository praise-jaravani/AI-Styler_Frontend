import { ElementType } from 'react';
import { BaseStyle, ColorPalette, Occasion, Season } from './data';

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

export interface Feature {
  icon: ElementType;
  title: string;
  description: string;
}

export interface StylePreview {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}