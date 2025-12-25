import React from 'react';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 border-t-4 border-[#602b7b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Products</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-[#602b7b] hover:pl-1 transition-all">AMS</a></li>
              <li><a href="#" className="hover:text-[#602b7b] hover:pl-1 transition-all">Employee Portal</a></li>
              <li><a href="#" className="hover:text-[#602b7b] hover:pl-1 transition-all">Vendor Portal</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Solutions</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-[#602b7b] hover:pl-1 transition-all">IT/ITES</a></li>
              <li><a href="#" className="hover:text-[#602b7b] hover:pl-1 transition-all">Manufacturing</a></li>
              <li><a href="#" className="hover:text-[#602b7b] hover:pl-1 transition-all">Retail</a></li>
              <li><a href="#" className="hover:text-[#602b7b] hover:pl-1 transition-all">Fashion</a></li>
              <li><a href="#" className="hover:text-[#602b7b] hover:pl-1 transition-all">Food & Beverages</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-[#602b7b] hover:pl-1 transition-all">Blogs</a></li>
              <li><a href="#" className="hover:text-[#602b7b] hover:pl-1 transition-all">Book A Demo</a></li>
              <li><a href="#" className="hover:text-[#602b7b] hover:pl-1 transition-all">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
             <h4 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Company</h4>
             <ul className="space-y-3 text-gray-400 mb-8">
                <li><a href="#" className="hover:text-[#602b7b] hover:pl-1 transition-all">About Us</a></li>
                <li><a href="#" className="hover:text-[#602b7b] hover:pl-1 transition-all">Join Us</a></li>
                <li><a href="#" className="hover:text-[#602b7b] hover:pl-1 transition-all">Contact Us</a></li>
             </ul>
             <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#602b7b] hover:text-white transition-all">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#602b7b] hover:text-white transition-all">
                    <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#602b7b] hover:text-white transition-all">
                    <Facebook className="w-5 h-5" />
                </a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>
                &copy; {new Date().getFullYear()} Sciqus Infotech Private Limited. All Rights Reserved.
            </p>
            {/* Capterra Badge Placeholder */}
            <div className="mt-4 md:mt-0 flex items-center">
                <span className="mr-2">Review us on</span>
                <div className="h-8 w-24 bg-gray-700 rounded flex items-center justify-center text-xs text-gray-300 font-bold">
                    Capterra
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;