import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Calendar, Briefcase, Sun, X } from 'lucide-react';
import { BaseStyle, ColorPalette, Occasion, Season } from '../types/data';
import ImageGallery from './ImageGallery';

import PromptGenerator from '../api/services/promptGenerator';
import { StyleGenerationResponse } from '../types/response';

interface PresetStyle {
  baseStyle: BaseStyle;
  colorScheme: ColorPalette[];
  occasion: Occasion[];
  season: Season;
}

interface BasicStyleCustomizerProps {
  onClose: () => void;
  presetStyle?: PresetStyle;
}

const BasicStyleCustomizer: React.FC<BasicStyleCustomizerProps> = ({ onClose, presetStyle }) => {
  const [baseStyle, setBaseStyle] = useState<BaseStyle>(presetStyle?.baseStyle || "Minimalist");
  const [colorPalette, setColorPalette] = useState<ColorPalette[]>(presetStyle?.colorScheme || ["Neutral"]);
  const [occasion, setOccasion] = useState<Occasion[]>(presetStyle?.occasion || ["Casual"]);
  const [season, setSeason] = useState<Season>(presetStyle?.season || "All Seasons");
  const [isGenerating, setIsGenerating] = useState(false);

  const [currentView, setCurrentView] = useState<'customize' | 'results'>('customize');
  const [generationResponse, setGenerationResponse] = useState<StyleGenerationResponse>();
  const [error, setError] = useState<string>();
  const [hasGenerated, setHasGenerated] = useState(false);

  const SectionToggle = () => (
    <div className="flex justify-center mb-8">
      <div className="bg-gray-100 p-1 rounded-lg inline-flex">
        <button
          onClick={() => setCurrentView('customize')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            currentView === 'customize'
              ? 'bg-white shadow text-blue-600'
              : 'text-gray-500 hover:text-gray-900'
          } ${!hasGenerated && currentView === 'results' ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!hasGenerated && currentView === 'results'}
        >
          Customize
        </button>
        <button
          onClick={() => setCurrentView('results')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            currentView === 'results'
              ? 'bg-white shadow text-blue-600'
              : 'text-gray-500 hover:text-gray-900'
          } ${!hasGenerated ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!hasGenerated}
        >
          Results
        </button>
      </div>
    </div>
  );

  const handleGenerate = async () => {
    try {
      // Set loading state and switch view immediately
      setIsGenerating(true);
      setError(undefined);
      setHasGenerated(true);  
      setCurrentView('results');
      
      await generateStyle();
  
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsGenerating(false);
    }
  };

  const generateStyle = async () => {
    const styleInputs = {
      baseStyle,
      colorScheme: colorPalette,
      occasion,
      season
    };
  
    const result = await PromptGenerator.generateImageFromStyle(styleInputs);
    setGenerationResponse(result);
    
    if (!result.success) {
      throw new Error(result.error);
    }
  };
  
  const handleRetry = async () => {
    try {
      setIsGenerating(true);
      setError(undefined);
      
      await generateStyle();
      
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-8 md:p-8 overflow-y-auto">
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

      {/* Section Toggle */}
      <SectionToggle />

      {currentView === 'customize' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
          <>

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
              disabled={isGenerating}
              className={`px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg transition-all ${
                isGenerating ? 'opacity-75 cursor-not-allowed' : 'hover:opacity-90'
              }`}
            >
              {isGenerating ? 'Generating...' : 'Generate Style'}
            </button>
          </div>
          </>
          </motion.div>
       ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          
        <ImageGallery
          response={generationResponse}
          isLoading={isGenerating}
          error={error}
          onRetry={handleRetry}
        />

        </motion.div>
      )}
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