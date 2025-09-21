import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Award-Winning Mixologist',
      company: 'The Golden Hour Bar',
      quote: 'Frostaffair has revolutionized how I craft cocktails. The Citrus Zest cubes add a brightness that no garnish could match. My guests are constantly asking about the secret ingredient.',
      avatar: '👩‍🍳',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Bar Manager',
      company: 'Skyline Lounge',
      quote: 'The Mint Chill cubes are a game-changer for our mojitos. They maintain the perfect temperature while adding an authentic mint essence that lasts throughout the entire drink.',
      avatar: '👨‍💼',
      rating: 5
    },
    {
      name: 'Emma Thompson',
      role: 'Cocktail Enthusiast',
      company: 'Home Bartender',
      quote: 'I was skeptical at first, but Frostaffair has completely elevated my home cocktail game. The Berry Frost cubes make my gin and tonics taste like they came from a five-star bar.',
      avatar: '👩‍🎨',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Head Bartender',
      company: 'The Velvet Room',
      quote: 'We\'ve been using Frostaffair for six months now, and our customer satisfaction scores have increased by 40%. The Vanilla Dream cubes are perfect for our dessert cocktails.',
      avatar: '👨‍🍸',
      rating: 5
    },
    {
      name: 'Lisa Park',
      role: 'Beverage Director',
      company: 'Aqua Restaurant',
      quote: 'The Ocean Breeze cubes are unlike anything I\'ve ever experienced. They add a sophisticated salinity that perfectly complements our seafood-focused cocktail menu.',
      avatar: '👩‍💼',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Craft Cocktail Consultant',
      company: 'Independent',
      quote: 'I\'ve consulted for bars across the country, and Frostaffair is the most innovative product I\'ve seen in years. It\'s not just ice—it\'s an experience enhancer.',
      avatar: '👨‍🎓',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 relative overflow-hidden bg-frost-white">
      <div className="container mx-auto max-w-7xl">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-frost-navy/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-frost-black/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-poppins text-frost-navy mb-6">
              What People <span className="gradient-text">Say</span>
            </h2>
            <p className="text-xl text-frost-black max-w-3xl mx-auto">
              Hear from the experts and enthusiasts who have experienced the Frostaffair difference
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-frost-navy to-frost-black mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="frost-glass rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-frost">
                  {/* Quote Icon */}
                  <div className="text-4xl text-frost-blue/40 mb-4">"</div>
                  
                  {/* Quote Text */}
                  <p className="text-frost-black leading-relaxed mb-6 italic">
                    {testimonial.quote}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-frost-navy" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Author Info */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-frost-blue rounded-full flex items-center justify-center text-2xl text-white">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-frost-navy">{testimonial.name}</h4>
                      <p className="text-sm text-frost-black">{testimonial.role}</p>
                      <p className="text-xs text-frost-black">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-frost-navy/5 to-frost-black/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="frost-glass rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold font-inter text-frost-navy mb-4">
                Join the Growing Community
              </h3>
              <p className="text-frost-black mb-6">
                Don't just take our word for it. Experience the Frostaffair difference for yourself and become part of a community that's redefining the art of drinking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-frost-navy text-frost-white font-semibold rounded-full hover:bg-frost-black hover:shadow-frost transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                </button>
                <button className="px-8 py-3 frost-glass text-frost-navy font-semibold rounded-full hover:bg-black/5 transition-all duration-300">
                  Read More Reviews
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 