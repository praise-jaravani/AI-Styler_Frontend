import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';


interface MenuItemProps {
  href: string;
  text: string;
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const menuItems: MenuItemProps[] = [
    { href: '/', text: 'Home' },
    { href: '/about-us', text: 'About Us' },
    { href: '/contact-us', text: 'Contact Us' },
  ];

  return (
    <nav className="bg-white shadow-lg relative">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <motion.a 
          href="/"
          className="flex items-center space-x-3" // Added space-x-3 for better spacing
        >
          <img 
            src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
            alt="Ai Styler Logo" 
            className="h-10 w-10 rounded-lg object-cover"
          />
          <motion.span 
            className="self-center text-2xl font-bold text-gray-800"
            whileHover={{ 
              color: '#2563eb',
              transition: { duration: 0.2 }
            }}
          >
            Ai Styler
          </motion.span>
        </motion.a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            type="button"
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={toggleMobileMenu}
            whileHover={{ backgroundColor: '#f3f4f6' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">Open main menu</span>
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <motion.a 
                  href="/"
                  className="flex items-center space-x-3"
                  onClick={toggleMobileMenu}
                >
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
                    alt="Ai Styler Logo" 
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                  <span className="text-2xl font-bold text-gray-800">
                    Ai Styler
                  </span>
                </motion.a>
                <motion.button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Menu Content */}
              <motion.div 
                className="flex flex-col h-[calc(100vh-73px)]" // Subtract header height
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {/* Main Menu Items */}
                <div className="flex-1 overflow-y-auto px-4 py-6">
                  <div className="space-y-2" role="menu">
                    {menuItems.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        className="flex items-center w-full px-4 py-4 text-lg font-medium text-gray-700 rounded-xl transition-all duration-200"
                        role="menuitem"
                        onClick={toggleMobileMenu}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ 
                          backgroundColor: '#f8fafc',
                          color: '#2563eb'
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.text}
                      </motion.a>
                    ))}
                  </div>

                  {/* Decorative Elements */}
                  <div className="mt-8">
                    <div className="h-px bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"/>
                    <div className="py-6">
                      <motion.div 
                        className="text-center text-gray-500 space-y-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p className="text-sm font-medium">Transform your style with AI</p>
                        <p className="text-xs">Discover endless possibilities</p>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="p-6 bg-gray-50 border-t">
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.a
                      href="/style-presets"
                      className="flex items-center justify-center w-full px-4 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-sm hover:opacity-90 transition-opacity"
                      whileTap={{ scale: 0.98 }}
                      onClick={toggleMobileMenu}
                    >
                      Explore Style Presets
                    </motion.a>
                    <motion.a
                      href="/custom-builder"
                      className="flex items-center justify-center w-full px-4 py-4 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 transition-colors"
                      whileTap={{ scale: 0.98 }}
                      onClick={toggleMobileMenu}
                    >
                      Custom Style Builder
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div className="relative">
                <motion.a
                  href={item.href}
                  className="relative text-gray-600 font-medium py-2"
                  whileHover="hover"
                >
                  {/* Text with hover effect */}
                  <motion.span
                    variants={{
                      hover: {
                        color: '#2563eb',
                        y: -2,
                        transition: { duration: 0.2 }
                      }
                    }}
                    className="relative z-10 inline-block"
                  >
                    {item.text}
                  </motion.span>
                  
                  {/* Animated underline */}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"
                    variants={{
                      hover: {
                        scaleX: 1,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10
                        }
                      }
                    }}
                    initial={{ scaleX: 0 }}
                    style={{ originX: 0 }}
                  />
                  
                  {/* Subtle background highlight */}
                  <motion.span
                    className="absolute inset-0 w-full h-full bg-blue-50 rounded-lg -z-10"
                    variants={{
                      hover: {
                        opacity: 1,
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                  />
                </motion.a>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;