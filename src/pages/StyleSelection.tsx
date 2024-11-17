import React from 'react';
import { motion } from "framer-motion";

function StyleSelection() {
  return (
    <main>
      <div>StyleSelection</div>
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
            <span className="text-white">Start Creating</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
              Your Perfect Style
            </span>
          </h2>
          
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Transform your fashion vision into reality with our AI-powered style generator
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

          {/* Buttons */}
          <div className="relative flex flex-col sm:flex-row justify-center gap-6 mb-8 p-6">
            <motion.button 
              className="group relative overflow-hidden px-10 py-4 rounded-full bg-white text-blue-600 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Quick Style</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button 
              className="group relative overflow-hidden px-10 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold text-lg border-2 border-white/50 hover:border-white transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Custom Style</span>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>

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

{/* Style Examples Section */}
<section className="py-10 bg-gray-50">
  <div className="container mx-auto px-4">
    <motion.h2 
      className="text-4xl font-bold text-center text-gray-900 mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      Style Examples
    </motion.h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { style: "Minimal Elegance", image: "/images/img-1.jpg" },
        { style: "Urban Street Style", image: "/images/img-3.jpg" },
        { style: "Bohemian Spirit", image: "/images/img-4.jpg" },
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
            <button className="relative overflow-hidden w-full py-3 px-4 border-2 border-gray-900 text-gray-900 rounded-lg group-hover:bg-gray-900 group-hover:text-white transition-all duration-300 hover:scale-[1.02]">
              <span className="relative z-10">Try This Style</span>
              <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    </main>
  )
}

export default StyleSelection