import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
    return (
        <div className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                     <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Client Success Stories</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            text: "Sciqus team demonstrated high professional standards. They understood our complex requirements perfectly and delivered a solution that exceeded our expectations.",
                            author: "CTO, Fintech Startup",
                            loc: "USA"
                        },
                        {
                            text: "The communication was excellent throughout the project. Their agile approach allowed us to make changes quickly and the final product is top-notch.",
                            author: "Product Manager, Healthcare Provider",
                            loc: "UK"
                        },
                        {
                            text: "We have been working with Sciqus for over 3 years now. They are our trusted technology partners for all our digital transformation initiatives.",
                            author: "CEO, E-commerce Giant",
                            loc: "India"
                        }
                    ].map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
                            <Quote className="absolute top-6 left-6 w-8 h-8 text-purple-100" />
                            <p className="text-gray-600 italic mb-6 relative z-10 pt-4">"{t.text}"</p>
                            <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                                <div className="ml-3">
                                    <p className="text-sm font-bold text-gray-900">{t.author}</p>
                                    <p className="text-xs text-gray-500">{t.loc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;