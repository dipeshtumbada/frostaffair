import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Drink',
      description: 'Select your favorite cocktail or spirit. Our flavored ice cubes work with any beverage to enhance the experience.',
      icon: '🍸',
      color: 'from-frost-blue to-frost-blue/80'
    },
    {
      number: '02',
      title: 'Drop in the Cube',
      description: 'Simply add one of our premium flavored ice cubes to your drink. Watch as it transforms your beverage instantly.',
      icon: '🧊',
      color: 'from-frost-ice to-frost-blue'
    },
    {
      number: '03',
      title: 'Enjoy Elevated Flavor',
      description: 'Experience the magic as flavors infuse your drink, creating a sophisticated and memorable drinking experience.',
      icon: '✨',
      color: 'from-frost-gold to-frost-blue'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 relative overflow-hidden bg-frost-white scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-frost-blue/10 to-transparent rounded-full blur-3xl"></div>
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
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-frost-black max-w-3xl mx-auto">
              Experience the simplicity and elegance of transforming your drinks with our premium flavored ice cubes
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-frost-blue to-frost-gold mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Timeline Steps */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-frost-blue to-frost-gold transform -translate-x-1/2 hidden lg:block"></div>

            <div className="space-y-16 lg:space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col lg:flex-row items-center gap-8"
                >
                  {/* Step Icon - Always on the left side */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                    className="relative z-10 order-1 lg:order-2"
                  >
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-4xl shadow-frost`}>
                      {step.icon}
                    </div>
                    
                    {/* Floating ice cubes around icon */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 ice-cube rounded-lg opacity-60"></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 ice-cube rounded-lg opacity-50"></div>
                    <div className="absolute top-1/2 -right-4 w-5 h-5 ice-cube rounded-lg opacity-40"></div>
                  </motion.div>

                  {/* Step Content - Responsive layout */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                    className="flex-1 text-center lg:text-left order-2 lg:order-1"
                  >
                    <div className="mb-4">
                      <span className="text-4xl lg:text-6xl font-bold font-poppins text-frost-navy/30">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold font-inter text-frost-navy mb-3 lg:mb-4">
                      {step.title}
                    </h3>
                    <div className="max-w-md mx-auto lg:mx-0">
                      <p className="text-lg text-frost-black leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="frost-glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold font-inter text-frost-navy mb-4">
                Ready to Transform Your Drinks?
              </h3>
              <p className="text-frost-black mb-6">
                It's that simple! Start your journey with Frostaffair today and discover a new way to enjoy your favorite beverages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-frost-navy text-frost-white font-semibold rounded-full hover:bg-frost-black hover:shadow-frost transition-all duration-300 transform hover:scale-105">
                  Get Started Now
                </button>
                <button className="px-8 py-3 frost-glass text-frost-navy font-semibold rounded-full hover:bg-black/5 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 