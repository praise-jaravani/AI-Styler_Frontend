import React, { useState } from 'react';
import { motion } from "framer-motion";

import AdvancedPopup from '../components/AdvancedStylePopup';
import AdvancedStyleCustomizer from '../components/AdvancedStyleCustomizer';

const CustomBuilder: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <main>
      {/* Call-to-action Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 opacity-90" />
        
        {/* Animated Particles Effect */}
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
                scale: [1, 2, 1],
                opacity: [0.3, 0.8, 0.3],
                y: [0, -50, 0],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                ease: "easeInOut",
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
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
                    Custom Style Generator
                  </span>
                </h2>
                
                <motion.p 
                  className="text-xl text-white/90 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Transform your fashion vision into reality with our Style generator
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
                {/* Glass Cards Background */}
                <div className="absolute inset-x-0 -top-10 -bottom-10 bg-white/5 backdrop-blur-lg rounded-3xl" />

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

      {/* Advanced Style Customizer Section */}
      <section>

        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4 py-24">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Advanced Style Customizer
              </h1>
              <p className="text-gray-600 mb-12 text-lg">
                Click the button below to open the advanced style customization where you'll get to generate any style you want.
              </p>

              <motion.button
                onClick={() => setIsPopupOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Open Advanced Style Customizer
              </motion.button>

              {/* Instructions */}
              <div className="mt-16 text-left bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  Instructions
                </h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5">
                      1
                    </span>
                    <span>Click the button above to open the advanced style customizer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5">
                      2
                    </span>
                    <span>Enter descriptions for the style you'd like to generate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5">
                      3
                    </span>
                    <span>Preview the style you'd like to generate before submission</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5">
                      4
                    </span>
                    <span>Click the Generate Style button to bring your vision to life</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Popup */}
            <AdvancedPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
              <AdvancedStyleCustomizer onClose={() => setIsPopupOpen(false)} />
            </AdvancedPopup>
          </div>
        </div>
      </section>

        {/* Style Inspiration Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
          
          {/* Particle Effect */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
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

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Style Combinations
              </motion.h2>
              <motion.p 
                className="text-xl text-white/90 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                See how our AI combines different style elements to create unique looks
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Color Palettes",
                  description: "Vibe check with the perfect palette",
                  elements: ["Neutral", "Earth Tones", "Bold Accents", "Pastels"]
                },
                {
                  title: "Style Elements",
                  description: "Mix and match different style choices",
                  elements: ["Minimalist", "Vintage", "Modern", "Artistic"]
                },
                {
                  title: "Occasions",
                  description: "Adaptable looks to fit every occasion",
                  elements: ["Casual", "Professional", "Evening", "Special Events"]
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
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-300">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                      <p className="text-white/80">{category.description}</p>
                    </div>
                    <div className="space-y-3">
                      {category.elements.map((element, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-2"
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-white/50" />
                          <span className="text-white/90">{element}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg opacity-50 -z-10" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-lg opacity-50 -z-10" />
                </motion.div>
              ))}
            </div>

            {/* Floating style elements */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-20 left-10 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </section>

        {/* Style Examples Section */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold text-center text-gray-900 mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Example Style Boards
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { style: "Minimal Elegance", image: "/images/img-5.jpg" },
                { style: "Urban Street Style", image: "/images/pic2.jpg" },
                { style: "Romantic Date Night", image: "/images/romance2.jpg" },
              ].map((example, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={example.image} 
                      alt={`${example.style} mood board`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {example.style}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    </main>
  )
}

export default CustomBuilder