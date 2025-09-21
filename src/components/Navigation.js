import React from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = ['About', 'Flavors', 'How It Works'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="frost-glass mx-4 mt-4 rounded-2xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <img
                src="/logo.jpg"
                alt="FrostAffairs logo"
                className="w-10 h-10 rounded-md object-contain"
              />
              <span className="text-2xl font-bold font-poppins gradient-text">
                Frostaffair
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-frost-navy hover:text-frost-blue transition-colors duration-300 font-medium"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSffjFCh1l9Wqfe1rwekd4Jqnu_aHn1_8-nooupwO1mwl045Jw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="px-6 py-2 bg-frost-blue text-white rounded-full font-semibold hover:bg-frost-gold hover:shadow-frost transition-all duration-300 inline-block"
              >
                Join the Frost Affair
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-frost-silver"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-frost-silver/20"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-frost-silver hover:text-frost-blue transition-colors duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSffjFCh1l9Wqfe1rwekd4Jqnu_aHn1_8-nooupwO1mwl045Jw/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-frost-blue text-white rounded-full font-semibold hover:bg-frost-gold hover:shadow-frost transition-all duration-300 inline-block"
                >
                  Join the Frost Affair
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 