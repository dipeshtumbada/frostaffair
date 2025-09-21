import React from 'react';
import { motion } from 'framer-motion';

const Flavors = () => {
  const flavors = [
    {
      name: 'Tropical Coconut',
      description: 'Creamy island coconut that brings smooth tropical vibes to any drink',
      color: 'from-amber-200 to-amber-300',
      icon: '🥥',
      features: ['Tropical', 'Smooth', 'Creamy']
    },
    {
      name: 'Zesty Lemon Ginger',
      description: 'Lively lemon brightness balanced with a gentle ginger warmth',
      color: 'from-yellow-400 to-amber-400',
      icon: '🍋',
      features: ['Zesty', 'Warm', 'Refreshing']
    },
    {
      name: 'Pure Sugarcane',
      description: 'Clean sugarcane sweetness that elevates classics without overpowering',
      color: 'from-stone-200 to-stone-300',
      icon: '🍬',
      features: ['Clean', 'Balanced', 'Versatile']
    },
    {
      name: 'Fiery Guava',
      description: 'Juicy guava lifted with a hint of chili heat for a bold kick',
      color: 'from-rose-400 to-red-500',
      icon: '🌶️',
      features: ['Bold', 'Juicy', 'Spiced']
    },
    {
      name: 'Citrus Orange',
      description: 'Bright orange citrus that adds sparkle and freshness',
      color: 'from-orange-400 to-amber-500',
      icon: '🍊',
      features: ['Bright', 'Fresh', 'Uplifting']
    },
    {
      name: 'Cinnamon Spice',
      description: 'Cozy cinnamon warmth for rich, aromatic cocktails',
      color: 'from-red-400 to-amber-600',
      icon: '🌿',
      features: ['Aromatic', 'Warm', 'Comforting']
    },
    {
      name: 'Fresh Watermelon',
      description: 'Crisp, juicy watermelon for a light and refreshing twist',
      color: 'from-rose-300 to-pink-400',
      icon: '🍉',
      features: ['Light', 'Juicy', 'Refreshing']
    },
    {
      name: 'Classic Strawberry',
      description: 'Familiar strawberry sweetness with a clean, bright finish',
      color: 'from-pink-400 to-rose-500',
      icon: '🍓',
      features: ['Classic', 'Sweet', 'Vibrant']
    }
  ];

  return (
    <section id="flavors" className="py-20 px-4 relative overflow-hidden bg-frost-white scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-frost-navy/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-frost-black/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-poppins text-frost-navy mb-6">
              Flavor <span className="gradient-text">Showcase</span>
            </h2>
            <p className="text-xl text-frost-black max-w-3xl mx-auto">
              Discover our carefully curated collection of premium flavored ice cubes, each designed to transform your cocktail experience
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-frost-navy to-frost-black mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flavors.map((flavor, index) => (
              <motion.div
                key={flavor.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="frost-glass rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-frost">
                  {/* Flavor Icon */}
                  <div className="text-center mb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${flavor.color} flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {flavor.icon}
                    </div>
                  </div>

                  {/* Flavor Name */}
                  <h3 className="text-2xl font-bold font-inter text-frost-navy text-center mb-3">
                    {flavor.name}
                  </h3>

                  {/* Description */}
                  <p className="text-frost-black text-center mb-6 leading-relaxed">
                    {flavor.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {flavor.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-frost-ice text-frost-navy text-sm font-medium rounded-full border border-frost-blue/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-frost-navy/5 to-frost-black/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="frost-glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold font-inter text-frost-navy mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-frost-black mb-6">
                Join thousands of cocktail enthusiasts who have already elevated their drinking experience with Frostaffair
              </p>
              <button 
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScp8ERhtxryjf8QzfOZq0pFSzN9I2GN7jUi3yz6WYjUequvhA/viewform?usp=header', '_blank')}
                className="px-8 py-3 bg-frost-navy text-frost-white font-semibold rounded-full hover:bg-frost-black hover:shadow-frost transition-all duration-300 transform hover:scale-105"
              >
                Order Your Flavors
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Flavors; 