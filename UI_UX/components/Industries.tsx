import React from 'react';
import { Landmark, Stethoscope, GraduationCap, ShoppingBag, Plane, Truck } from 'lucide-react';

const industries = [
    { name: 'Fintech', icon: Landmark, desc: 'Digital banking, payment gateways, and blockchain solutions.' },
    { name: 'Healthcare', icon: Stethoscope, desc: 'Telemedicine, EHR systems, and HIPAA compliant apps.' },
    { name: 'Education', icon: GraduationCap, desc: 'LMS platforms, virtual classrooms, and e-learning solutions.' },
    { name: 'Retail & E-commerce', icon: ShoppingBag, desc: 'Omnichannel platforms, inventory management, and POS.' },
    { name: 'Travel & Hospitality', icon: Plane, desc: 'Booking engines, property management, and travel CRMs.' },
    { name: 'Logistics', icon: Truck, desc: 'Fleet management, supply chain tracking, and route optimization.' },
];

const Industries: React.FC = () => {
    return (
        <div id="industries" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Industries We Serve
                    </h2>
                    <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                        We bring domain expertise across various sectors to deliver tailored solutions that address specific industry challenges.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {industries.map((ind) => (
                        <div key={ind.name} className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 hover:border-[#602b7b] hover:shadow-lg transition-all duration-300 bg-white group cursor-default">
                            <div className="h-16 w-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#f3eafa] transition-colors">
                                <ind.icon className="h-8 w-8 text-gray-400 group-hover:text-[#602b7b] transition-colors" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{ind.name}</h3>
                            <p className="text-xs text-gray-500 leading-tight hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity">
                                {ind.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Industries;