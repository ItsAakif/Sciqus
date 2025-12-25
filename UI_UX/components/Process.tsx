import React from 'react';

const Process: React.FC = () => {
    const steps = [
        { id: '01', title: 'Discovery & Strategy', desc: 'We analyze your requirements, market trends, and business goals to create a strategic roadmap.' },
        { id: '02', title: 'UI/UX Design', desc: 'Our designers create intuitive wireframes and prototypes focused on user experience.' },
        { id: '03', title: 'Agile Development', desc: 'We build your solution using agile methodology with iterative sprints and regular feedback.' },
        { id: '04', title: 'Testing & QA', desc: 'Rigorous testing ensures your software is bug-free, secure, and performs optimally.' },
        { id: '05', title: 'Launch & Support', desc: 'We help you launch successfully and provide ongoing maintenance and support.' },
    ];

    return (
        <div id="process" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Development Process</h2>
                    <p className="mt-4 text-xl text-gray-500">Agile, Transparent, and Results-Driven</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step) => (
                            <div key={step.id} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group">
                                <div className="w-12 h-12 mx-auto bg-[#602b7b] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg group-hover:scale-110 transition-transform">
                                    {step.id}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;