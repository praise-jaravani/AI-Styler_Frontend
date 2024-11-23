import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  
  const navigateAndScroll = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-screen-xl px-8 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Section */}
        <div className="md:col-span-4 space-y-4">
        <motion.div 
            className="cursor-pointer"
            onClick={() => navigateAndScroll('/')}
            whileHover={{ scale: 1.02 }}
        >
            <div className="flex items-center gap-3">
            <img 
                src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
                alt="AI Styler Logo" 
                className="h-10 w-10 rounded-lg object-cover shadow-md"
            />
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Styler
            </span>
            </div>
        </motion.div>
        <p className="text-gray-600 leading-relaxed">
            Transform your style journey with AI-powered fashion visualization. 
            Discover, create, and explore endless style possibilities.
        </p>
        </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-2 gap-8">
              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-gray-900 font-semibold text-lg">Quick Links</h3>
                <ul className="space-y-3">
                  {[
                    { path: '/', label: 'Home' },
                    { path: '/about-us', label: 'About Us' },
                    { path: '/contact-us', label: 'Contact Us' },
                  ].map((link) => (
                    <li key={link.path}>
                      <motion.button
                        onClick={() => navigateAndScroll(link.path)}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {link.label}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Style Tools */}
              <div className="space-y-4">
                <h3 className="text-gray-900 font-semibold text-lg">Style Tools</h3>
                <ul className="space-y-3">
                  {[
                    { path: '/style-presets', label: 'Style Presets' },
                    { path: '/custom-builder', label: 'Custom Builder' },
                  ].map((link) => (
                    <li key={link.path}>
                      <motion.button
                        onClick={() => navigateAndScroll(link.path)}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {link.label}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-gray-900 font-semibold text-lg">Connect</h3>
            <p className="text-gray-600 leading-relaxed">
              Follow our journey and contribute to the future of AI-powered fashion.
            </p>
            <motion.a
              href="https://github.com/praise-jaravani/ai-styler-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>View on GitHub</span>
            </motion.a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} AI Styler. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;