import React from 'react';
import { motion } from 'framer-motion';

const Integrations: React.FC = () => {
  return (
    <div className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Seamless Integrations <br/>
              <span className="text-[#602b7b]">To Serve Your Customers Better</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#602b7b] mb-10 rounded-full"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Elevate customer service standards with our integrated customer portal, seamlessly connecting with other applications for enhanced efficiency. By streamlining processes and access to data, we empower faster resolutions and personalized experiences.
            </p>
            <ul className="grid grid-cols-2 gap-4">
                {['Real-time Sync', 'Secure API', 'Custom Webhooks', 'Single Sign-On'].map((item) => (
                    <li key={item} className="flex items-center text-slate-700 font-medium">
                        <span className="w-2 h-2 bg-[#602b7b] rounded-full mr-3"></span>
                        {item}
                    </li>
                ))}
            </ul>
          </motion.div>
          
          <div className="lg:w-1/2 relative flex justify-center items-center h-[500px] w-full">
             {/* Center Core */}
             <motion.div 
                className="w-32 h-32 bg-gradient-to-br from-[#602b7b] to-purple-800 rounded-full flex items-center justify-center shadow-2xl z-20 text-white font-bold text-xl relative"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
             >
                <div className="absolute inset-0 bg-white/20 rounded-full blur-md animate-pulse"></div>
                Sciqus
             </motion.div>

             {/* Orbit 1 */}
             <div className="absolute w-[300px] h-[300px] border border-slate-200 rounded-full flex items-center justify-center">
                 <motion.div 
                    className="absolute w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 >
                     <IntegrationNode label="SAP" color="bg-blue-50 text-blue-700" top="-top-5" left="left-1/2" />
                     <IntegrationNode label="Xero" color="bg-green-50 text-green-700" top="bottom-10" left="left-0" />
                     <IntegrationNode label="HubSpot" color="bg-orange-50 text-orange-700" top="top-1/2" left="-right-5" />
                 </motion.div>
             </div>
             
             {/* Orbit 2 */}
             <div className="absolute w-[480px] h-[480px] border border-slate-100 rounded-full flex items-center justify-center">
                 <motion.div 
                    className="absolute w-full h-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                 >
                     <IntegrationNode label="Slack" color="bg-purple-50 text-purple-700" top="top-0" left="left-1/4" />
                     <IntegrationNode label="Jira" color="bg-blue-50 text-blue-700" top="bottom-0" left="right-1/4" />
                     <IntegrationNode label="Gmail" color="bg-red-50 text-red-700" top="top-1/2" left="-left-4" />
                     <IntegrationNode label="Salesforce" color="bg-sky-50 text-sky-700" top="top-1/2" left="-right-4" />
                 </motion.div>
             </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const IntegrationNode = ({ label, color, top, left }: { label: string, color: string, top: string, left: string }) => (
    <div className={`absolute ${top} ${left} -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full shadow-lg border border-white/50 backdrop-blur-sm ${color} font-bold text-sm flex items-center gap-2`}>
        <div className="w-2 h-2 rounded-full bg-current opacity-50"></div>
        {label}
    </div>
);

export default Integrations;