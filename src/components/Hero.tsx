import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="relative hero-container h-[80vh] flex items-center justify-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/video-4.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          {...fadeIn}
        >
          Unlock Your Ultimate Look
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-white mb-8"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          Transform your style vision into reality with AI
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <button 
          onClick={handleButtonClick}
          className="mt-4 text-white bg-transparent border-4 border-white hover:bg-white hover:text-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xl font-bold px-8 py-4 text-center mr-2 mb-2 transition-all duration-300 shadow-sm">
          AI Magic for Your Perfect Look
        </button>
        </motion.div>
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[5]"></div>
    </div>
  );
};

export default Hero;