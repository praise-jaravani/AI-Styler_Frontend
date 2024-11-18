import { ElementType } from 'react';

export interface StylePreset {
  id: string;
  name: string;
  description: string;
  image: string;
  baseStyle: string;
  colorScheme: string[];
  occasion: string[];
  season: string;
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