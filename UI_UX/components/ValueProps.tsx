import React from 'react';
import { RefreshCw, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const ValueProps: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <ValueCard 
            icon={<RefreshCw className="h-6 w-6 text-green-600" />}
            iconBg="bg-green-100"
            title="Retain & Ensure Business Continuation"
            description="Ensure business continuity with repeat business and renewals through automated insights."
            delay={0}
          />

          <ValueCard 
            icon={<TrendingUp className="h-6 w-6 text-blue-600" />}
            iconBg="bg-blue-100"
            title="Identify New Opportunities"
            description="Upsell, cross-sell within accounts with a clearly defined roles and predictive analytics."
            delay={0.1}
          />

          <ValueCard 
            icon={<Users className="h-6 w-6 text-[#602b7b]" />}
            iconBg="bg-purple-100"
            title="Generate Referral Business"
            description="Targeted approach of referrals with easy team alignment and relationship tracking."
            delay={0.2}
          />

        </div>
      </div>
    </section>
  );
};

const ValueCard: React.FC<{ icon: React.ReactNode, iconBg: string, title: string, description: string, delay: number }> = ({ icon, iconBg, title, description, delay }) => (
    <motion.div 
        className="bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-[#602b7b]/20 hover:shadow-xl hover:shadow-[#602b7b]/5 transition-all duration-300 group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
    >
        <div className={`inline-flex items-center justify-center p-4 ${iconBg} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#602b7b] transition-colors">{title}</h3>
        <p className="text-slate-500 leading-relaxed text-sm">
            {description}
        </p>
    </motion.div>
);

export default ValueProps;