import React from 'react';

const StaticWidget: React.FC = () => {
  return (
    <div className="h-full flex flex-col md:flex-row gap-6 items-center">
      <div className="w-full md:w-1/2 h-48 bg-orange-50 rounded-xl overflow-hidden relative group">
         <img 
            src="https://picsum.photos/400/300?grayscale" 
            alt="Static" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
         />
         <div className="absolute inset-0 bg-orange-900/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      <div className="w-full md:w-1/2 space-y-3">
        <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider">
          Featured Collection
        </h4>
        <h3 className="text-2xl font-bold text-gray-800">
          Minimalist Living
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          Simplicity is the ultimate sophistication. Embrace the calm of open spaces and soft tones in your daily workflow.
        </p>
        <button className="mt-2 text-sm font-medium text-orange-400 hover:text-orange-600 transition-colors">
          Explore Collection &rarr;
        </button>
      </div>
    </div>
  );
};

export default StaticWidget;