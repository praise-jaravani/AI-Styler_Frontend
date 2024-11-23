// src/pages/TestPopup.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Popup from '../components/Popup';
import BasicStyleCustomizer from '../components/BasicStyleCustomizer';

const TestPopup: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-24">
        {/* Test Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Style Customizer Test
          </h1>
          <p className="text-gray-600 mb-12 text-lg">
            Click the button below to open the style customization popup and test its functionality.
          </p>

          <motion.button
            onClick={() => setIsPopupOpen(true)}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Open Style Customizer
          </motion.button>

          {/* Instructions */}
          <div className="mt-16 text-left bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Testing Instructions
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5">
                  1
                </span>
                <span>Click the button above to open the style customizer popup</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5">
                  2
                </span>
                <span>Test the dropdown selections for each style option</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5">
                  3
                </span>
                <span>Verify that the preview updates based on your selections</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5">
                  4
                </span>
                <span>Test the generate and cancel buttons</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Popup */}
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
          <BasicStyleCustomizer onClose={() => setIsPopupOpen(false)} />
        </Popup>
      </div>
    </div>
  );
};

export default TestPopup;