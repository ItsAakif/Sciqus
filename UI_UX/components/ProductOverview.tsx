import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductOverview: React.FC = () => {
  return (
    <div className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-6xl font-bold text-[#602b7b] tracking-tighter">sciqus</span>
              <span className="text-6xl font-bold text-[#e13b82] tracking-tighter">ams</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#e13b82] uppercase tracking-wide mb-6 leading-tight">
              Smart Account Management Solution
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10">
              Manage, Retain and Grow your existing customers with easy team alignment and clear vision, direction of each action to be taken towards customer growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-10 py-4 bg-[#502266] text-white font-bold text-lg rounded shadow-lg hover:bg-[#3e1a4f] transition-all transform hover:-translate-y-1">
                Watch Video
              </button>
              <button className="px-10 py-4 bg-[#502266] text-white font-bold text-lg rounded shadow-lg hover:bg-[#3e1a4f] transition-all transform hover:-translate-y-1">
                Book A Demo
              </button>
            </div>
          </motion.div>

          {/* Dashboard Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Dashboard Stack Image */}
            <div className="relative z-10 transform transition-transform hover:scale-[1.02] duration-500">
                <img 
                    src="https://i0.wp.com/sciqus.com/wp-content/uploads/2025/01/Group-146.png" 
                    alt="Sciqus AMS Dashboard" 
                    className="w-full h-auto object-contain drop-shadow-2xl"
                />
            </div>
            
            {/* Decorative elements behind - subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/50 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ProductOverview;