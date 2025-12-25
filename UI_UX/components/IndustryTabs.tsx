import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Factory, ShoppingBag, Shirt, Coffee } from 'lucide-react';

const industries = [
  {
    id: 'it',
    label: 'IT / ITES',
    icon: Monitor,
    benefits: [
      'Streamlined Ordering Process',
      'Enhanced Product Information',
      'Efficient Complaint Resolution',
      'Customized Promotions & Discounts',
      'Inventory Management Integration'
    ],
    cta: 'Solution For IT / ITES Industry'
  },
  {
    id: 'mfg',
    label: 'Manufacturing',
    icon: Factory,
    benefits: [
      'Order Visibility & Tracking',
      'Customization & Configuration',
      'Support & Documentation',
      'Collaborative Product Development',
      'After-Sales Service & Maintenance'
    ],
    cta: 'Solution For Manufacturing Industry'
  },
  {
    id: 'retail',
    label: 'Retail',
    icon: ShoppingBag,
    benefits: [
      '24/7 Access to Product Information',
      'Self-Service Account Management',
      'Personalized Recommendations & Offers',
      'Order Tracking & Status Updates',
      'Feedback & Review Submission'
    ],
    cta: 'Solution For Retail Industry'
  },
  {
    id: 'fashion',
    label: 'Fashion',
    icon: Shirt,
    benefits: [
      'Personalized Fashion Experiences',
      'Efficient Order Management for Seasonal Trends',
      'Seamless Customer Query Handling',
      'Trend Insights & Feedback Collection',
      'Exclusive Access to New Collections & Events'
    ],
    cta: 'Solution For Fashion Industry'
  },
  {
    id: 'food',
    label: 'Food & Beverages',
    icon: Coffee,
    benefits: [
      'Streamlined Ordering Process',
      'Enhanced Product Information',
      'Efficient Complaint Resolution',
      'Customized Promotions & Discounts',
      'Inventory Management Integration'
    ],
    cta: 'Solution For Food & Beverages Industry'
  }
];

const IndustryTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('it');

  const currentIndustry = industries.find(i => i.id === activeTab) || industries[0];

  return (
    <div className="bg-white pb-24">
      {/* Navigation Strip - Full Width Purple Background */}
      <div className="w-full bg-[#602b7b]">
        {/* Container to align width with the rest of the site content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row w-full">
                {industries.map((ind) => (
                <button
                    key={ind.id}
                    onClick={() => setActiveTab(ind.id)}
                    className={`
                    flex-1 flex items-center justify-center space-x-3 py-6 px-2 transition-colors duration-200 outline-none
                    ${activeTab === ind.id 
                        ? 'bg-white text-[#602b7b]' 
                        : 'bg-[#602b7b] text-white hover:bg-[#502266]'}
                    `}
                >
                    <ind.icon className={`w-6 h-6 flex-shrink-0 ${activeTab === ind.id ? 'stroke-[2px]' : 'stroke-[1.5px]'}`} />
                    <span className={`text-base tracking-wide whitespace-nowrap ${activeTab === ind.id ? 'font-bold' : 'font-medium'}`}>
                    {ind.label}
                    </span>
                </button>
                ))}
            </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            {/* Left: Benefits List */}
            <div className="w-full lg:w-2/3">
              <ul className="space-y-6 pl-4">
                {currentIndustry.benefits.map((benefit, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-center group"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <span className="text-lg text-slate-700 font-normal group-hover:text-slate-900 transition-colors">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right: CTA Button */}
            <div className="w-full lg:w-1/3 flex lg:justify-end">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full lg:w-auto px-10 py-4 border border-[#602b7b] text-[#602b7b] font-semibold text-lg rounded-none hover:bg-[#602b7b] hover:text-white transition-all duration-300"
              >
                {currentIndustry.cta}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IndustryTabs;