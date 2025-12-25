import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = twMerge(
    "fixed top-0 w-full z-50 transition-all duration-300 border-b",
    scrolled 
      ? "bg-white/80 backdrop-blur-md border-gray-200 shadow-sm py-2" 
      : "bg-white border-transparent py-4"
  );

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <img 
               src="https://i0.wp.com/sciqus.com/wp-content/uploads/2025/01/Group-1.png?fit=1024%2C334&ssl=1" 
               alt="Sciqus AMS" 
               className="h-10 w-auto object-contain"
             />
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-8">
            {['Products', 'Solutions', 'About'].map((item) => (
                <div key={item} className="relative group">
                    <button className="flex items-center text-slate-600 group-hover:text-[#602b7b] font-medium transition-colors text-sm tracking-wide">
                        {item} <ChevronDown className="ml-1 w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    {/* Simplified dropdown for visual fidelity to original structure */}
                     <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 transform origin-top-left scale-95 group-hover:scale-100">
                        <a href="#" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-[#602b7b]/5 hover:text-[#602b7b] transition-colors">Overview</a>
                        <a href="#" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-[#602b7b]/5 hover:text-[#602b7b] transition-colors">Features</a>
                    </div>
                </div>
            ))}
            <a href="#blog" className="text-slate-600 hover:text-[#602b7b] font-medium transition-colors text-sm tracking-wide">Resources</a>
            
            {/* Action Buttons */}
             <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-200">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-6 py-2.5 text-sm font-bold text-white bg-[#602b7b] rounded-full shadow-lg shadow-[#602b7b]/20 hover:shadow-xl hover:shadow-[#602b7b]/30 transition-all"
                >
                  Book A Demo
                </motion.a>
             </div>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-[#602b7b] hover:bg-gray-50 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {isOpen && (
        <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
        >
          <div className="px-4 pt-4 pb-8 space-y-2">
            {['Products', 'Solutions', 'About', 'Resources'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-700 hover:text-[#602b7b] hover:bg-gray-50 transition-colors">
                    {item}
                </a>
            ))}
            
            <div className="mt-6 flex flex-col space-y-4 px-3 pt-6 border-t border-gray-100">
                <a 
                  href="#contact"
                  className="w-full text-center px-4 py-3 text-base font-bold text-white bg-[#602b7b] rounded-lg shadow-md"
                >
                  Book A Demo
                </a>
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;