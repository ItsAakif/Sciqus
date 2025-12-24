import React from 'react';
import { MenuIcon } from '../icons';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 h-16 px-4 lg:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="p-2 -ml-2 rounded-lg text-gray-500 hover:bg-gray-100 lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-label="Open sidebar"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-gray-800 lg:hidden">Frontend Task</h1>
        <div className="hidden lg:block">
            <h2 className="text-sm font-medium text-gray-400">Welcome back, Aakif</h2>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors">
            Help
        </button>
        <button className="text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors">
            Notifications
        </button>
      </div>
    </header>
  );
};

export default Header;