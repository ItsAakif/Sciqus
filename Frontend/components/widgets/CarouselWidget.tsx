import React, { useState, useEffect } from 'react';

const slides = [
  { id: 1, color: 'bg-teal-100', text: 'Peaceful Mornings' },
  { id: 2, color: 'bg-sky-100', text: 'Clear Thinking' },
  { id: 3, color: 'bg-orange-100', text: 'Gentle Focus' },
];

const CarouselWidget: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full w-full flex flex-col justify-between min-h-[240px]">
      <div className="relative flex-1 overflow-hidden rounded-xl">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              absolute inset-0 
              transition-opacity duration-700 ease-in-out
              flex items-center justify-center
              ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}
              ${slide.color}
            `}
          >
             <div className="w-full h-full relative">
                 <img 
                    src={`https://picsum.photos/800/400?random=${slide.id}`} 
                    alt={slide.text}
                    className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <h2 className="text-white text-3xl font-bold tracking-tight drop-shadow-md">{slide.text}</h2>
                 </div>
             </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`
              w-2.5 h-2.5 rounded-full transition-all duration-300
              ${current === idx ? 'bg-gray-700 w-4' : 'bg-gray-300 hover:bg-gray-400'}
            `}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselWidget;