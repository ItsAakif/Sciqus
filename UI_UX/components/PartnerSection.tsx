import React from 'react';

const PartnerSection: React.FC = () => {
  return (
    <div className="bg-white py-12 border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 text-center">
            Trusted By
        </p>
        <div className="flex justify-center items-center">
            <img 
                src="https://i0.wp.com/sciqus.com/wp-content/uploads/2025/01/Group-146.png?resize=300%2C151&ssl=1" 
                alt="Microsoft for Startups Founders Hub" 
                className="h-16 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
            />
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;