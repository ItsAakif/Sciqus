import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  bgColor?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', title, bgColor = 'bg-white' }) => {
  return (
    <div 
      className={`
        ${bgColor} 
        rounded-2xl 
        shadow-sm 
        border border-gray-100 
        p-6 
        transition-all 
        duration-300 
        hover:shadow-md 
        flex flex-col
        ${className}
      `}
    >
      {title && (
        <h3 className="text-lg font-bold text-gray-700 mb-4 tracking-tight">
          {title}
        </h3>
      )}
      <div className="flex-1 relative">
        {children}
      </div>
    </div>
  );
};

export default Card;