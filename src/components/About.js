import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden bg-frost-white scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-frost-blue/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-frost-gold/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-poppins text-frost-navy mb-6">
              About <span className="gradient-text">Frostaffair</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-frost-blue to-frost-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-semibold font-inter text-frost-navy mb-4">
                Redefining the Drinking Experience
              </h3>
              
              <p className="text-lg text-frost-black leading-relaxed">
                Frost Affair isn’t just ice — it’s an experience.
              </p>

              <p className="text-lg text-frost-black leading-relaxed">
                Freeze it. Drop it. Pair it. Whether you’re mixing it with your favourite cocktails, giving your 
                mocktails a twist, or adding it to a glass of straight-up spirit, Frost Affair makes every sip unforgettable.
              </p>

              <p className="text-lg text-frost-black leading-relaxed">
                And because ordinary isn’t our style, we bring you atrangi flavours that surprise, tease, and keep you 
                coming back for more. Cool, playful, and a little irresistible — that’s the Frost Affair promise.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-frost-blue rounded-full"></div>
                  <span className="text-frost-navy font-medium">Premium Quality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-frost-gold rounded-full"></div>
                  <span className="text-frost-navy font-medium">Innovative Technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-frost-blue rounded-full"></div>
                  <span className="text-frost-navy font-medium">Craftsmanship</span>
                </div>
              </div>
            </motion.div>

            {/* Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main ice cube display */}
              <div className="relative">
                <div className="w-64 h-64 mx-auto ice-cube rounded-2xl shadow-frost transform rotate-12"></div>
                <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-frost-blue/15 to-frost-gold/15 rounded-2xl transform -rotate-12"></div>
                
                {/* Floating flavor indicators */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-frost-blue rounded-full flex items-center justify-center shadow-frost"
                >
                  <span className="text-white font-bold text-sm">Citrus</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-14 h-14 bg-frost-gold rounded-full flex items-center justify-center shadow-frost"
                >
                  <span className="text-white font-bold text-xs">Mint</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  className="absolute top-1/2 -left-8 w-12 h-12 bg-frost-blue rounded-full flex items-center justify-center shadow-frost"
                >
                  <span className="text-white font-bold text-xs">Berry</span>
                </motion.div>
              </div>

              {/* Background decorative ice cubes */}
              <div className="absolute -top-8 -left-8 w-8 h-8 ice-cube rounded-lg opacity-40"></div>
              <div className="absolute -bottom-8 -right-8 w-6 h-6 ice-cube rounded-lg opacity-40"></div>
              <div className="absolute top-1/4 -right-12 w-10 h-10 ice-cube rounded-lg opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 