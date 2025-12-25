import React, { useState, useEffect } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    title: 'The Ultimate Account Management Solution',
    subtitle: 'Strengthen Your Account Management With Technology',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80', // Woman smiling with phone
    title: 'The Future of Account Management',
    subtitle: 'Customer Relationships Redefined',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80', // Group of diverse people
    title: 'Empower Your Business with Smart Customer Retention',
    subtitle: 'Account Engagement Redefined',
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-white overflow-hidden mt-16 h-[600px] lg:h-[700px]">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={slides[currentSlide].image} 
              alt="Hero Background" 
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay Gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    {/* Brand Label */}
                    <div className="flex items-end gap-1 mb-4">
                        <span className="text-5xl font-bold text-[#602b7b] tracking-tighter opacity-80 mix-blend-screen">sciqus</span>
                        <span className="text-5xl font-bold text-pink-500 tracking-tighter opacity-80 mix-blend-screen">ams</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
                      {slides[currentSlide].title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl lg:text-2xl text-gray-200 font-medium leading-relaxed mb-10 drop-shadow-md">
                      {slides[currentSlide].subtitle}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        className="group inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white border-2 border-white hover:bg-white hover:text-[#602b7b] transition-all duration-300 uppercase tracking-wide"
                      >
                        Watch Now
                      </button>
                      <button
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300 uppercase tracking-wide"
                      >
                        Book A Demo
                      </button>
                    </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-0 w-full z-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center lg:justify-start gap-3">
            {slides.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-12 bg-[#602b7b]' : 'w-4 bg-white/50 hover:bg-white'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                />
            ))}
         </div>
      </div>
    </div>
  );
};

export default Hero;