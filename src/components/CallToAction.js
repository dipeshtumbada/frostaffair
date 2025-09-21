import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section id="join-the-frost-affair" className="py-20 px-4 relative overflow-hidden bg-frost-white scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-frost-blue/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-frost-gold/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-poppins text-frost-navy mb-6">
              Join the <span className="gradient-text">Frost Affair</span>
            </h2>
            <p className="text-xl text-frost-black max-w-3xl mx-auto">
              Be the first to experience new flavors, exclusive offers, and insider tips from the world of premium cocktail crafting
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-frost-blue to-frost-gold mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Newsletter Subscription */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-semibold font-inter text-frost-navy mb-4">
                Stay Frosty with Updates
              </h3>
              
              <p className="text-lg text-frost-black leading-relaxed">
                Subscribe to our newsletter and get exclusive access to new flavor launches, cocktail recipes, and special promotions. 
                Join thousands of cocktail enthusiasts who are already part of the Frostaffair family.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-frost-blue rounded-full"></div>
                  <span className="text-frost-black">Early access to new flavors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-frost-gold rounded-full"></div>
                  <span className="text-frost-black">Exclusive cocktail recipes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-frost-blue rounded-full"></div>
                  <span className="text-frost-black">Member-only discounts</span>
                </div>
              </div>
            </motion.div>

            {/* Subscription Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="frost-glass rounded-2xl p-8">
                {!isSubscribed ? (
                  <>
                    <h4 className="text-xl font-semibold text-frost-navy mb-4 text-center">
                      Subscribe to Our Newsletter
                    </h4>
                    <form onSubmit={handleSubscribe} className="space-y-4">
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full px-4 py-3 bg-white border border-frost-silver rounded-lg text-frost-navy placeholder-frost-navy/40 focus:outline-none focus:border-frost-blue focus:ring-2 focus:ring-frost-blue/20 transition-all duration-300"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-frost-blue text-white font-semibold rounded-lg hover:bg-frost-gold hover:shadow-frost transition-all duration-300 transform hover:scale-105"
                      >
                        Subscribe Now
                      </button>
                    </form>
                    <p className="text-xs text-frost-black/60 text-center mt-4">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-frost-blue to-frost-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-frost-navy mb-2">
                      Welcome to the Frost Affair!
                    </h4>
                    <p className="text-frost-black">
                      You're now part of our exclusive community. Check your email for your welcome gift!
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default CallToAction; 