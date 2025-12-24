import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons';

interface SliderWidgetProps {
  items: Array<{ title: string; subtitle: string; bg: string }>;
  variant?: 'blue' | 'teal';
}

const SliderWidget: React.FC<SliderWidgetProps> = ({ items, variant = 'blue' }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  const currentItem = items[index];
  const accentColor = variant === 'blue' ? 'text-sky-600' : 'text-teal-600';
  const iconBg = variant === 'blue' ? 'hover:bg-sky-50' : 'hover:bg-teal-50';

  return (
    <div className="h-full flex flex-col items-center justify-center min-h-[180px]">
      <div className="flex items-center w-full justify-between gap-2">
        <button 
          onClick={prev}
          className={`p-2 rounded-full text-gray-400 hover:text-gray-700 transition-colors ${iconBg}`}
          aria-label="Previous"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        <div className="flex-1 flex flex-col items-center text-center transition-all duration-300">
          <div className={`w-20 h-20 rounded-2xl mb-4 ${currentItem.bg} shadow-inner flex items-center justify-center transition-colors duration-500`}>
             <span className={`text-2xl font-bold ${accentColor} opacity-50`}>
                {index + 1}
             </span>
          </div>
          <h4 className="font-bold text-gray-700">{currentItem.title}</h4>
          <p className="text-xs text-gray-400 mt-1">{currentItem.subtitle}</p>
        </div>

        <button 
          onClick={next}
          className={`p-2 rounded-full text-gray-400 hover:text-gray-700 transition-colors ${iconBg}`}
          aria-label="Next"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex gap-1.5 mt-6">
        {items.map((_, idx) => (
            <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === index ? 'w-4 bg-gray-400' : 'w-1.5 bg-gray-200'}`}
            />
        ))}
      </div>
    </div>
  );
};

export default SliderWidget;