import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const posts = [
    {
        title: "8 Ways To Reduce Miscommunication While Handling Customers",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
        category: "Customer Success",
        link: "#"
    },
    {
        title: "Stop Customer Churn: Smart Retention Strategies For Growth",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
        category: "Strategy",
        link: "#"
    },
    {
        title: "Boost Sales Fast with Data-Driven Upselling & Cross-Selling!",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
        category: "Sales",
        link: "#"
    }
];

const Insights: React.FC = () => {
    return (
        <div id="blog" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Latest Insights</h2>
                        <div className="w-20 h-1.5 bg-[#602b7b] rounded-full"></div>
                    </div>
                    <a href="#" className="hidden md:flex items-center font-bold text-[#602b7b] hover:text-[#4a2160] transition-colors">
                        View All Articles <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <motion.div 
                            key={idx} 
                            className="group cursor-pointer flex flex-col h-full"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-sm mb-5 aspect-[16/10]">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wide">
                                    {post.category}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#602b7b] transition-colors leading-snug">
                                {post.title}
                            </h3>
                            <div className="mt-auto pt-4 flex items-center text-[#602b7b] font-bold text-sm uppercase tracking-wide opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                Read Article <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Insights;