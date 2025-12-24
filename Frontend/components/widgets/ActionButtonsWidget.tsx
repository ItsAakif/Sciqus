import React, { useState } from 'react';
import { ToggleState } from '../../types';

const ActionButtonsWidget: React.FC = () => {
  const [active, setActive] = useState<ToggleState>('A');

  const handleToggle = (opt: ToggleState) => {
    console.log(`Switched to Option ${opt}`);
    setActive(opt);
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="bg-gray-50 p-1 rounded-lg flex mb-6">
        <button
          onClick={() => handleToggle('A')}
          className={`
            flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200
            ${active === 'A' 
              ? 'bg-white text-gray-800 shadow-sm' 
              : 'text-gray-400 hover:text-gray-600'}
          `}
        >
          Option A
        </button>
        <button
          onClick={() => handleToggle('B')}
          className={`
            flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200
            ${active === 'B' 
              ? 'bg-white text-gray-800 shadow-sm' 
              : 'text-gray-400 hover:text-gray-600'}
          `}
        >
          Option B
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
        <div className="text-center p-4">
          <p className="text-gray-400 text-sm mb-2">Current State</p>
          <div className={`
            text-4xl font-bold transition-all duration-300 transform
            ${active === 'A' ? 'text-teal-500 rotate-0' : 'text-sky-400 -rotate-6'}
          `}>
            {active}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionButtonsWidget;