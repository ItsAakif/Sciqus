import React from 'react';

const Clients: React.FC = () => {
  return (
    <div className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-400 tracking-wider mb-8">
          Trusted by Innovative Companies Worldwide
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
               {/* Placeholder for Client Logos */}
               <div className="h-12 w-32 bg-gray-100 rounded flex items-center justify-center text-gray-400 font-bold italic">
                  Client {item}
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;