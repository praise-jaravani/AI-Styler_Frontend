import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Palette, Users } from 'lucide-react';
import Hero from "../components/Hero";
import { useNavigate } from 'react-router-dom';

const AboutUs: React.FC = () => {

  const navigate = useNavigate();

  const navigateAndScroll = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">

      <Hero/>

      <main className="container mx-auto px-4 py-24">
        {/* Main About Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About AI Styler
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge AI technology with fashion expertise to help you discover and visualize your perfect style.
          </p>
        </motion.div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {[
            {
              icon: <Sparkles className="w-12 h-12 text-blue-600" />,
              title: "Innovation",
              description: "Leveraging the latest AI technology to transform how you explore and discover fashion."
            },
            {
              icon: <Palette className="w-12 h-12 text-blue-600" />,
              title: "Creativity",
              description: "Pushing the boundaries of style visualization to bring your fashion ideas to life."
            },
            {
              icon: <Users className="w-12 h-12 text-blue-600" />,
              title: "Community",
              description: "Building a platform where style enthusiasts can explore and share their fashion vision."
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <motion.div 
                className="mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {value.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div 
          className="bg-blue-600 text-white p-12 rounded-2xl mb-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              To empower everyone to express their unique style with confidence through innovative AI-powered fashion visualization tools.
            </motion.p>
          </div>
        </motion.div>
      </main>

        {/* Journey Section with Enhanced Video Background */}
        <section className="relative min-h-screen overflow-hidden -mx-2">
          {/* Video Background */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover scale-105"
            src="/videos/video-9.mp4"
            autoPlay
            loop
            muted
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 backdrop-blur-[1px]" />
          
          {/* Animated Particles */}
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
                  y: [0, -100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
          <div className="relative py-20">
            <div className="container mx-auto px-4">
              {/* Section Header */}
              <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-bold text-white mb-6">
                  Our Journey
                </h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
                <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                  From concept to reality, we're transforming the future of fashion visualization
                </p>
              </motion.div>

              {/* Timeline */}
              <div className="max-w-6xl mx-auto relative">
                {/* Center Line */}
                <motion.div 
                  className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500/0"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                />

                {[
                  {
                    year: "2023",
                    title: "The Vision Takes Shape",
                    description: "From a revolutionary idea to transform fashion visualization, we began our journey to merge AI with style.",
                    icon: "🌟",
                    achievements: ["Concept Development", "Team Formation", "Initial Prototypes"]
                  },
                  {
                    year: "2024",
                    title: "Breaking New Ground",
                    description: "Launched our groundbreaking AI style generation platform, setting new standards in fashion technology.",
                    icon: "🚀",
                    achievements: ["Platform Launch", "AI Integration", "User Testing"]
                  },
                  {
                    year: "Beyond",
                    title: "Shaping the Future",
                    description: "Expanding the boundaries of what's possible in AI fashion technology and style visualization.",
                    icon: "✨",
                    achievements: ["Global Expansion", "Advanced Features", "Community Growth"]
                  }
                ].map((milestone, index) => (
                  <motion.div 
                    key={index}
                    className={`relative flex items-center mb-24 last:mb-0 ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {/* Content Card */}
                    <div className={`w-[calc(50%-40px)] ${
                      index % 2 === 0 ? 'mr-10' : 'ml-10'
                    }`}>
                      <motion.div 
                        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-300"
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      >
                        {/* Year Badge */}
                        <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                          {milestone.year}
                        </div>
                        
                        {/* Icon */}
                        <div className="text-4xl mb-4">{milestone.icon}</div>
                        
                        {/* Content */}
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-200 mb-4">
                          {milestone.description}
                        </p>
                        
                        {/* Achievements */}
                        <div className="space-y-2">
                          {milestone.achievements.map((achievement, i) => (
                            <div 
                              key={i}
                              className="flex items-center text-gray-300"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Center Point */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <motion.div 
                        className="w-4 h-4 bg-blue-500 rounded-full"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      />
                      <motion.div 
                        className="absolute w-8 h-8 bg-blue-500/30 rounded-full -inset-2"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Team Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600">The innovators behind AI Styler</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Alex Chen", role: "AI Lead", image: "/images/img-1.jpg" },
                { name: "Sarah Wilson", role: "Fashion Director", image: "/images/img-10.jpg" },
                { name: "Mike Roberts", role: "Tech Lead", image: "/images/img-7.jpg" }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="relative h-80 mb-6 overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section with Parallax */}
        <section className="py-24 bg-blue-600 relative overflow-hidden">
          {/* Decorative elements */}
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
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "10k+", label: "Styles Generated" },
                { number: "95%", label: "Satisfaction Rate" },
                { number: "24/7", label: "AI Support" },
                { number: "50+", label: "Style Presets" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div 
                    className="text-5xl font-bold mb-2"
                    whileInView={{ scale: [0.5, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <motion.div 
            className="container mx-auto px-4 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Style?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Join thousands of fashion enthusiasts who have discovered their perfect style with AI Styler
              </p>
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateAndScroll('/style-presets')}
              >
                Get Started Today
              </motion.button>
            </div>
          </motion.div>
        </section>
    </div>
  );
};

export default AboutUs;