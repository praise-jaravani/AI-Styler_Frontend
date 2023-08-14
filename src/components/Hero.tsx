import React from 'react';
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home");
  };

  return (
    <div className="relative hero-container h-[70vh] flex items-center justify-center">
      <video
        className="object-cover w-full h-full absolute top-0 left-0 z-[-1]"
        src="/videos/video-3.mp4"
        autoPlay
        loop
        muted
      />
      <div className="w-full text-center">
        <h1 className="text-white text-4xl md:text-7xl lg:text-8xl py-4 font-display">
          Unlock Your Ultimate Look
        </h1>

        <button 
          onClick={handleButtonClick}
          className="mt-4 text-white bg-transparent border-4 border-white hover:bg-white hover:text-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xl font-bold px-8 py-4 text-center mr-2 mb-2 transition-all duration-300 shadow-sm">
          AI Magic for Your Perfect Look
        </button>

      </div>
    </div>
  );
};

export default Hero;
