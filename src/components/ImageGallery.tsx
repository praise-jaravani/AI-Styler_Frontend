import React from 'react';
import { StyleGenerationResponse } from '../types/response';
import { Loader2, RefreshCw, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface ImageGalleryProps {
  response?: StyleGenerationResponse;
  isLoading: boolean;
  error?: string;
  onRetry?: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ response, isLoading, error, onRetry }) => {
  const handleDownload = async (imageUrl: string, index: number) => {
    try {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `ai-styler-generated-${index}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px]">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
        <p className="text-gray-600">Generating your style...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px] text-center">
        <div className="bg-red-50 p-6 rounded-xl max-w-md">
          <h3 className="text-red-800 font-semibold mb-2">Generation Failed</h3>
          <p className="text-red-600 mb-6">{error}</p>
          <motion.button
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </motion.button>
        </div>
      </div>
    );
  }

  if (!response?.images?.length) {
    return null;
  }

  return (
    <div className="grid gap-6">
      {response.images.map((image, index) => (
        <div key={image.id} className="bg-gray-50 p-4 rounded-xl">
          <div className="relative group">
            <img 
              src={image.url} 
              alt="Generated style"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {/* Download Button Overlay */}
            <motion.button
              className="absolute bottom-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={() => handleDownload(image.url, index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Download Image"
            >
              <Download className="w-5 h-5 text-gray-700" />
            </motion.button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;