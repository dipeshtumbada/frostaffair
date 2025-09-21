import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with floating ice cubes */}
      <div className="absolute inset-0 hero-gradient">
        {/* Floating ice cubes */}
        <div className="absolute top-20 left-10 w-16 h-16 ice-cube rounded-lg floating-ice opacity-60"></div>
        <div className="absolute top-40 right-20 w-12 h-12 ice-cube rounded-lg floating-ice-slow opacity-50"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 ice-cube rounded-lg floating-ice-fast opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 ice-cube rounded-lg floating-ice opacity-60"></div>
        <div className="absolute top-1/2 left-1/4 w-10 h-10 ice-cube rounded-lg floating-ice-slow opacity-40"></div>
        <div className="absolute top-1/3 right-1/3 w-18 h-18 ice-cube rounded-lg floating-ice-fast opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-poppins text-frost-navy mb-6 text-shadow">
            Elevate Your Drink
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold font-inter text-frost-blue mb-8">
            One Cube at a Time
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-frost-black mb-12 max-w-3xl mx-auto font-light"
        >
          Experience the revolution in cocktail crafting with our premium flavored ice cubes. 
          Transform ordinary drinks into extraordinary experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSffjFCh1l9Wqfe1rwekd4Jqnu_aHn1_8-nooupwO1mwl045Jw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-frost-blue text-white text-xl font-semibold rounded-full hover:bg-frost-gold hover:shadow-frost transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Join the Frost Affair
          </a>
          <button className="px-8 py-4 frost-glass text-frost-navy text-xl font-semibold rounded-full hover:bg-white/70 transition-all duration-300 transform hover:scale-105">
            Explore Flavors
          </button>
        </motion.div>

        {/* Floating cocktail glass */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block"
        >
          <div className="w-32 h-40 bg-gradient-to-b from-frost-ice to-frost-blue rounded-t-full opacity-20"></div>
          <div className="w-24 h-32 bg-gradient-to-b from-frost-ice to-frost-blue rounded-t-full opacity-30 -mt-8 ml-4"></div>
        </motion.div>

        {/* Floating ice cube cluster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden lg:block"
        >
          <div className="grid grid-cols-2 gap-2">
            <div className="w-8 h-8 ice-cube rounded-lg opacity-60"></div>
            <div className="w-6 h-6 ice-cube rounded-lg opacity-50"></div>
            <div className="w-6 h-6 ice-cube rounded-lg opacity-50"></div>
            <div className="w-8 h-8 ice-cube rounded-lg opacity-60"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-frost-silver rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-frost-blue rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 