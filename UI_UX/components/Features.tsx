import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureBlockProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  isReversed?: boolean;
  bgColor?: string;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ title, subtitle, description, image, isReversed = false, bgColor = 'bg-white' }) => {
  return (
    <div className={`py-24 ${bgColor} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white p-2">
               <div className="rounded-xl overflow-hidden bg-slate-50 relative aspect-[16/10] flex items-center justify-center">
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-full h-full object-contain bg-white"
                    />
               </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            className="w-full lg:w-1/2 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
                {subtitle && (
                    <div className="flex items-center gap-2 mb-4">
                        <span className="h-px w-8 bg-[#602b7b]"></span>
                        <h3 className="text-[#602b7b] font-bold tracking-wider uppercase text-xs">{subtitle}</h3>
                    </div>
                )}
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    {title}
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-8">
                    {description}
                </p>
                <button className="inline-flex items-center text-[#602b7b] font-bold hover:text-[#4a2160] transition-colors group text-sm uppercase tracking-wide">
                    Know More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: "Account Insights The Easiest Way",
      description: "Enrich your account management efforts by offering a seamless, self-service experience. It provides real-time access to account details, transaction histories, and personalized support. This convenience not only empowers customers but also cultivates loyalty, ensuring they feel valued and delighted with every interaction.",
      image: "https://i0.wp.com/sciqus.com/wp-content/uploads/2025/01/Group-86.png?fit=960%2C799&ssl=1",
      isReversed: true,
      bgColor: 'bg-white'
    },
    {
      title: "Re-imagine The Opportunities In Your Accounts",
      description: "Subtly boost revenue by identifying upselling and cross-selling opportunities tailored to customer preferences. Through personalized recommendations and timely offers, customers discover products that complement their purchases. This strategic approach drives incremental sales maximizing value.",
      image: "https://i0.wp.com/sciqus.com/wp-content/uploads/2024/12/Opportunity-Proposal.gif",
      isReversed: false,
      bgColor: 'bg-slate-50'
    },
    {
      title: "Ticketing Insights Understand Your Customer Well",
      description: "Enhance support by providing immediate access to live chat with support agents. This feature allows customers to resolve issues quickly and efficiently, ensuring a smooth and satisfying experience. The convenience of real-time assistance fosters a sense of care and reliability.",
      image: "https://i0.wp.com/sciqus.com/wp-content/uploads/2024/12/New-Ticket-Received.gif",
      isReversed: true,
      bgColor: 'bg-white'
    },
    {
      title: "Client Meetings With Assisted Bookings",
      description: "Elevate the customer convenience with seamless meeting scheduling via calendar integration on our customer portal. Empower clients to effortlessly book meeting slots, syncing with their calendars for effortless coordination. This streamlined process fosters efficiency and professionalism.",
      image: "https://i0.wp.com/sciqus.com/wp-content/uploads/2024/05/Group-70.png",
      isReversed: false,
      bgColor: 'bg-slate-50'
    },
    {
      title: "Quick View of Invoices & Payments",
      description: "Transform payment experiences with our customer portal, empowering seamless transactions for clients. Through secure payment gateways integrated within the portal, customers enjoy hassle-free payments at their convenience. This user-friendly interface ensures a delightful experience.",
      image: "https://i0.wp.com/sciqus.com/wp-content/uploads/2024/05/Group-71.png",
      isReversed: true,
      bgColor: 'bg-white'
    },
    {
      title: "Ease of Access of Contracts, Invoices & Other Finance & Legal Documents",
      description: "Allow your customer to access essential documents effortlessly through our customer portal, putting critical information at your customers' fingertips. From contracts to product guides, clients can conveniently retrieve vital documents anytime, anywhere. This streamlined access enhances productivity.",
      image: "https://i0.wp.com/sciqus.com/wp-content/uploads/2024/05/Group-80.png",
      isReversed: false,
      bgColor: 'bg-slate-50'
    },
    {
      title: "Delighted Customers = More Referrals",
      description: "Leverage the power of satisfied customers through our customer portal, facilitating seamless referrals and repeat purchases. Empower happy clients to effortlessly refer friends and colleagues, while enjoying personalized offers for their loyalty. This strategic approach strengthens brand advocacy.",
      image: "https://i0.wp.com/sciqus.com/wp-content/uploads/2024/05/Group-81.png",
      isReversed: true,
      bgColor: 'bg-white'
    }
  ];

  return (
    <div id="features">
      {features.map((feature, index) => (
        <FeatureBlock 
            key={index}
            {...feature}
        />
      ))}
    </div>
  );
};

export default Features;
