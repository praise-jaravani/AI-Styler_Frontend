import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Calendar, Briefcase, Sun, X } from 'lucide-react';
import { BaseStyle, ColorPalette, Occasion, Season } from '../types/data';

interface BasicStyleCustomizerProps {
  onClose: () => void;
  presetStyle?: {
    baseStyle: BaseStyle;
    colorScheme: ColorPalette[];
    occasion: Occasion[];
    season: Season;
  };
}

const BasicStyleCustomizer: React.FC<BasicStyleCustomizerProps> = ({ onClose, presetStyle }) => {
  const [baseStyle, setBaseStyle] = useState<BaseStyle>(presetStyle?.baseStyle || "Minimalist");
  const [colorPalette, setColorPalette] = useState<ColorPalette[]>(presetStyle?.colorScheme || ["Neutral"]);
  const [occasion, setOccasion] = useState<Occasion[]>(presetStyle?.occasion || ["Casual"]);
  const [season, setSeason] = useState<Season>(presetStyle?.season || "All Seasons");

  const handleGenerate = async () => {
    // TODO: Implement generation logic
    console.log({ baseStyle, colorPalette, occasion, season });
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Customize Your Style
          </h2>
          <p className="text-gray-600 mt-2">
            Adjust the settings below to perfect your style preferences
          </p>
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-gray-500" />
        </button>
      </div>

      {/* Style Options Grid */}
      <div className="grid gap-8 mb-8">
        <StyleOption
          icon={Palette}
          label="Base Style"
          value={baseStyle}
          options={["Minimalist", "Bohemian", "Streetwear", "Classic", "Romantic", "Sporty"]}
          onChange={(value) => setBaseStyle(value as BaseStyle)}
        />
        
        <StyleOption
          icon={Palette}
          label="Color Palette"
          value={colorPalette[0]}
          options={["Neutral", "Pastel", "Vibrant", "Monochrome", "Earth Tones", "Jewel Tones"]}
          onChange={(value) => setColorPalette([value as ColorPalette])}
        />
        
        <StyleOption
          icon={Briefcase}
          label="Occasion"
          value={occasion[0]}
          options={["Work", "Casual", "Evening", "Formal", "Vacation", "Athleisure"]}
          onChange={(value) => setOccasion([value as Occasion])}
        />
        
        <StyleOption
          icon={Sun}
          label="Season"
          value={season}
          options={["Spring", "Summer", "Autumn", "Winter", "All Seasons"]}
          onChange={(value) => setSeason(value as Season)}
        />
      </div>

      {/* Preview Section */}
      <div className="mb-8 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-lg font-semibold mb-4">Style Preview</h3>
        <div className="text-gray-600">
          {`${baseStyle} style with ${colorPalette} colors, perfect for ${occasion} during ${season}.`}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4">
        <button
          onClick={onClose}
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleGenerate}
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Generate Style
        </button>
      </div>
    </div>
  );
};

// Helper component for style options
const StyleOption: React.FC<{
  icon: React.ElementType;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}> = ({ icon: Icon, label, value, options, onChange }) => (
  <div className="space-y-2">
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
      <Icon className="w-4 h-4" />
      {label}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default BasicStyleCustomizer;