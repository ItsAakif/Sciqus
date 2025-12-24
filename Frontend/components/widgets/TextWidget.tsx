import React from 'react';

const TextWidget: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-center">
      <div className="space-y-4">
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
            <span className="text-emerald-600 font-bold text-xl">Aa</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 leading-tight">
          Typography Matters
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          Good design is as little design as possible. Less, but better. 
          Concentrate on the essential aspects, and the products are not burdened with non-essentials.
        </p>
        <div className="pt-2">
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md cursor-pointer hover:bg-emerald-100 transition-colors">
                READ MORE
            </span>
        </div>
      </div>
    </div>
  );
};

export default TextWidget;