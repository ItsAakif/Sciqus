import React from 'react';
import { HomeIcon, ChartIcon, UserIcon, SettingsIcon, XIcon } from '../icons';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { name: 'Dashboard', icon: HomeIcon, active: true },
  { name: 'Analytics', icon: ChartIcon, active: false },
  { name: 'Profile', icon: UserIcon, active: false },
  { name: 'Settings', icon: SettingsIcon, active: false },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`
          fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <aside 
        className={`
          fixed top-0 left-0 bottom-0 z-50
          w-64 bg-white border-r border-gray-100
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:h-screen lg:block
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="h-full flex flex-col">
          {/* Logo Area */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-gray-50">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-pink-300 to-rose-300 flex items-center justify-center shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                </div>
                <span className="text-lg font-bold text-gray-800 tracking-tight">Frontend Task</span>
            </div>
            <button onClick={onClose} className="lg:hidden text-gray-400 hover:text-gray-600">
              <XIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                  ${item.active 
                    ? 'bg-pink-50 text-pink-600' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
                `}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </a>
            ))}
          </nav>

          {/* User Profile Mini */}
          <div className="p-4 border-t border-gray-50">
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
              <img 
                src="https://picsum.photos/100/100?random=user" 
                alt="User" 
                className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-700">Aakif Mudel</span>
                <span className="text-xs text-gray-400">Software Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;