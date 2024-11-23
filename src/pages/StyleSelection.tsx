import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Layers, Palette, Share2, ChevronRight } from 'lucide-react';
import { StylePreset, Feature, StylePreview } from '../types/style';
import { stylePresets } from '../types/data';

import { useState } from 'react';
import Popup from '../components/Popup';
import BasicStyleCustomizer from '../components/BasicStyleCustomizer';

const features: Feature[] = [
  {
    icon: Wand2,
    title: "AI-Powered Customization",
    description: "Tailored style recommendations using advanced AI"
  },
  {
    icon: Layers,
    title: "Multiple Variations",
    description: "Explore different options for your chosen style"
  },
  {
    icon: Share2,
    title: "Save & Share",
    description: "Keep your favorite styles and share with friends"
  }
];

const StyleSelection: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<StylePreset | null>(null);
  const [showAllPresets, setShowAllPresets] = useState(false);

  const handleStyleClick = (preset: StylePreset) => {
    setSelectedPreset(preset);
    setIsPopupOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Particles */}
        <section className="relative py-20 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 opacity-90" />
          
          {/* Particle Effect */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: Math.random() * 2 + 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Content Container */}
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Main Content */}
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  {/* Decorative Lines */}
                  <div className="flex justify-center gap-2 mb-8">
                    {[...Array(3)].map((_, i) => (
                      <motion.div 
                        key={i}
                        className="h-1 bg-white rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 20 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 * i, duration: 0.4 }}
                      />
                    ))}
                  </div>
                  
                  <h2 className="text-6xl font-bold mb-6 leading-tight">
                    <motion.span 
                      className="text-white block"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      Choose Your Perfect Style
                    </motion.span>
                  </h2>
                  
                  <motion.p 
                    className="text-xl text-white/90 max-w-2xl mx-auto mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    Select from our collection of style presets to begin your fashion journey
                  </motion.p>
                </motion.div>

                {/* Buttons Container */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  
                  {/* Additional Info */}
                  <motion.div 
                    className="relative flex justify-center items-center gap-8 text-white/90 text-sm font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    {[
                      "Instant Generation",
                      "AI-Powered",
                      "Unlimited Styles"
                    ].map((text, i) => (
                      <motion.div 
                        key={i}
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        <span>{text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div 
              className="absolute left-10 top-10 w-72 h-72 bg-blue-200 opacity-20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />
            <motion.div 
              className="absolute right-10 bottom-10 w-96 h-96 bg-purple-200 opacity-20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
          </div>
        </section>

      {/* Style Presets Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Style Presets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stylePresets.slice(0, showAllPresets ? undefined : 3).map((style, index) => (
                <motion.div
                  key={style.id}
                  className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleStyleClick(style)}
                >
                <div className="relative h-80">
                  <img 
                    src={style.image} 
                    alt={style.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{style.name}</h3>
                  <p className="text-white/90 mb-4">{style.description}</p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-white font-semibold"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStyleClick(style);
                    }}
                  >
                    Customize Style <ChevronRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

            {/* Show More/Less Button */}
            <motion.div 
              className="flex justify-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={() => setShowAllPresets(!showAllPresets)}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {showAllPresets ? 'Show Less' : 'Show More Styles'}
                  <span className="text-white/80">
                    {showAllPresets ? '↑' : '↓'}
                  </span>
                </span>
              </motion.button>
            </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Style Inspiration Section */}
        <section className="py-16 relative overflow-hidden bg-white">
          {/* Animated Grid Pattern Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.15) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                animate={{
                  opacity: [0.5, 0.3, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-8">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Style Combinations
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                See how our AI combines different style elements to create unique looks
              </motion.p>
            </div>

            {/* Interactive Style Guide Indicator */}
              <motion.div
                className="max-w-2xl mx-auto mb-10 bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-2xl p-6 shadow-xl border border-white/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center justify-between gap-8">
                  <div className="flex-1">
                    <motion.div 
                      className="flex items-center gap-3 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="h-px flex-1 bg-gradient-to-r from-blue-500/20 to-transparent"/>
                      <span className="text-blue-600/80 text-sm font-medium uppercase tracking-wider">Interactive Guide</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-blue-500/20 to-transparent"/>
                    </motion.div>
                    <h3 className="text-gray-800 font-medium text-center">
                      Explore style combinations through hover and click interactions
                    </h3>
                  </div>
                </div>

                {/* Interactive Indicators */}
                <div className="mt-6 flex justify-center gap-8">
                  {/* Hover Indicator */}
                  <motion.div 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-blue-500/30"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <span className="text-sm text-gray-600">Hover to preview</span>
                  </motion.div>

                  {/* Click Indicator */}
                  <motion.div 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-purple-500/30"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        delay: 0.3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <span className="text-sm text-gray-600">Click to select</span>
                  </motion.div>
                </div>
              </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Color Palettes",
                  description: "Vibe check with the perfect palette",
                  elements: ["Neutral", "Earth Tones", "Bold Accents", "Pastels"],
                  gradient: "from-blue-500 to-blue-600"
                },
                {
                  title: "Style Elements",
                  description: "Mix and match different style choices",
                  elements: ["Minimalist", "Vintage", "Modern", "Artistic"],
                  gradient: "from-purple-500 to-purple-600"
                },
                {
                  title: "Occasions",
                  description: "Adaptable looks to fit every occasion",
                  elements: ["Casual", "Professional", "Evening", "Special Events"],
                  gradient: "from-indigo-500 to-indigo-600"
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
                    {/* Gradient Border */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                    <div className="space-y-3">
                      {category.elements.map((element, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3 group/item"
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`} />
                          <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                            {element}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Decorative Elements */}
                    <motion.div 
                      className="absolute -z-10 top-0 left-0 right-0 h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(99, 102, 241, 0.06), transparent 40%)',
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    width: Math.random() * 100 + 50,
                    height: Math.random() * 100 + 50,
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    background: `linear-gradient(45deg, ${i % 2 === 0 ? 'rgba(99, 102, 241, 0.1)' : 'rgba(147, 51, 234, 0.1)'})`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    rotate: 360,
                    x: [0, Math.random() * 50 - 25],
                    y: [0, Math.random() * 50 - 25],
                  }}
                  transition={{
                    duration: 20 + Math.random() * 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
          <BasicStyleCustomizer 
            onClose={() => setIsPopupOpen(false)}
            presetStyle={selectedPreset ? {
              baseStyle: selectedPreset.baseStyle,
              colorScheme: selectedPreset.colorScheme,
              occasion: selectedPreset.occasion,
              season: selectedPreset.season
            } : undefined}
          />
        </Popup>

    </div>
  );
};

export default StyleSelection;