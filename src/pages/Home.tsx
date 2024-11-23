import React from 'react';
import { motion } from "framer-motion";
import { Palette, Sliders, Wand2, Zap, Layers, Paintbrush, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const navigate = useNavigate();

  const navigateAndScroll = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <main>
        {/* Hero Section with Video Background */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="/videos/video-5.mp4"
            autoPlay
            loop
            muted
          />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
              {...fadeIn}
            >
              Transform Your Style Vision
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white mb-8"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              Create stunning fashion mood boards with the power of AI
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <button 
                className="bg-white text-gray-900 hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
                onClick={() => navigateAndScroll('/custom-builder')}
              >
                Create Your Style Board
              </button>
              <button 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
                onClick={() => navigateAndScroll('/style-presets')}
              >
                Explore Style Presets
              </button>
            </motion.div>
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/30 z-[5]"></div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white py-10">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold text-center text-gray-900 mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              How It Works
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { 
                  icon: <Palette className="w-16 h-16 text-blue-600" />, 
                  title: "Choose your style", 
                  description: "Select from minimalist, streetwear, bohemian, and more" 
                },
                { 
                  icon: <Sliders className="w-16 h-16 text-blue-600" />, 
                  title: "Customize preferences", 
                  description: "Set your preferred colors, occasion, and season" 
                },
                { 
                  icon: <Wand2 className="w-16 h-16 text-blue-600" />, 
                  title: "Get AI-generated mood boards", 
                  description: "Receive personalized fashion inspiration in seconds" 
                },
              ].map((step, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </motion.div>
              ))}
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
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-80">
                    <img 
                      src={example.image} 
                      alt={`${example.style} mood board`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-4">{example.style}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-action Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800" />
          
          {/* Animated Particles Effect */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.5, 0.2],
                  y: [0, -100, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
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
                  {/* Decorative Line */}
                  <motion.div 
                    className="w-20 h-1 bg-white mx-auto mb-8"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  />
                  
                  <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
                    Start Creating
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white">
                      Your Perfect Style
                    </span>
                  </h2>
                  
                  <motion.p 
                    className="text-xl text-blue-100 max-w-2xl mx-auto"
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
                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
                    <motion.button 
                      className="group relative overflow-hidden px-8 py-4 rounded-full bg-white text-blue-600 font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigateAndScroll('/style-presets')}
                    >
                      <span className="relative z-10">Quick Style</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white"
                        initial={{ x: '100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>

                    <motion.button 
                      className="group relative overflow-hidden px-8 py-4 rounded-full text-white border-2 border-white font-semibold text-lg transition-colors duration-300 hover:text-blue-600"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigateAndScroll('/custom-builder')}
                    >
                      <span className="relative z-10">Custom Style</span>
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </div>

                  {/* Additional Info */}
                  <motion.div 
                    className="flex justify-center items-center gap-8 text-blue-100 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-200 rounded-full animate-pulse" />
                      <span>Instant Generation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-200 rounded-full animate-pulse" />
                      <span>AI-Powered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-200 rounded-full animate-pulse" />
                      <span>Unlimited Styles</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div 
              className="absolute left-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />
            <motion.div 
              className="absolute right-0 bottom-0 w-96 h-96 bg-blue-300 opacity-10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
          </div>
        </section>
        
        {/* Video Showcase Section */}
        <section className="relative h-[90vh] overflow-hidden">
          {/* Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover scale-105"
            src="/videos/video-7.mp4"
            autoPlay
            loop
            muted
          />
          
          {/* Blur + Dark Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-black/20" />
          
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-white"
                >
                  <div className="flex gap-2 mb-8">
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
                  <motion.h2 
                    className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Your Style Journey
                    <span className="pb-2 block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                      Begins Here
                    </span>
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-white/90 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    Watch as AI transforms your style preferences into stunning fashion mood boards.
                    Experience the future of personalized fashion curation.
                  </motion.p>
                </motion.div>

                {/* Floating Cards */}
                <div className="relative h-[400px]">
                  <motion.div
                    initial={{ opacity: 0, y: 50, x: 20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="absolute top-0 right-0 w-72 bg-black/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10"
                  >
                    <div className="absolute -top-3 -left-3 w-12 h-12 bg-blue-500/20 backdrop-blur-md rounded-lg border border-white/10" />
                    <h3 className="text-white text-2xl font-semibold mb-4">Smart Curation</h3>
                    <p className="text-white/90 text-lg">
                      AI-powered style recommendations that learn from your preferences
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 50, x: -20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="absolute bottom-0 left-0 w-72 bg-black/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 mb-10"
                  >
                    <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-purple-500/20 backdrop-blur-md rounded-lg border border-white/10" />
                    <h3 className="text-white text-2xl font-semibold mb-4">Endless Possibilities</h3>
                    <p className="text-white/90 text-lg">
                      Unlimited style combinations at your fingertips
                    </p>
                  </motion.div>

                  {/* Additional decorative elements */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-black/5 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => (
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
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                { number: "10M+", label: "Styles Generated" },
                { number: "50k+", label: "Happy Users" },
                { number: "100+", label: "Style Presets" },
                { number: "24/7", label: "AI Assistance" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-blue-400">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose AI Styler?
              </h2>
              <p className="text-xl text-gray-600">
                Experience the perfect blend of artificial intelligence and fashion expertise
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Smart Learning",
                  description: "Our AI learns your preferences and improves recommendations",
                  gradient: "from-blue-500 to-purple-500"
                },
                {
                  title: "Real-Time Generation",
                  description: "Get instant mood boards and style suggestions in seconds",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Style Evolution",
                  description: "Explore and evolve your style with AI-guided suggestions",
                  gradient: "from-pink-500 to-red-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-50 rounded-xl blur group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-5">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold text-center text-gray-900 mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Features
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { 
                  icon: <Zap className="w-12 h-12 text-blue-600" />, 
                  title: "Quick style presets", 
                  description: "Get instant inspiration with our curated style presets" 
                },
                { 
                  icon: <Layers className="w-12 h-12 text-blue-600" />, 
                  title: "Custom style builder", 
                  description: "Create your unique style combination from scratch" 
                },
                { 
                  icon: <Paintbrush className="w-12 h-12 text-blue-600" />, 
                  title: "Multiple variations", 
                  description: "Generate diverse options for each style preference" 
                },
                { 
                  icon: <Sparkles className="w-12 h-12 text-blue-600" />, 
                  title: "High-quality mood boards", 
                  description: "Receive polished, professional-looking style guides" 
                },
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
            }}
          />
          
          <div className="container mx-auto px-4 relative">
            <motion.div
              className="max-w-4xl mx-auto text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-8">
                Ready to Transform Your Style?
              </h2>
              <p className="text-xl mb-12 text-gray-100">
                Join thousands of fashion enthusiasts who have discovered their perfect style with AI Styler
              </p>
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateAndScroll('/about-us')}
              >
                Learn More About Us
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;