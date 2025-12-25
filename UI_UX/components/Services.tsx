import React from 'react';
import { Monitor, Smartphone, Cloud, Database, Brain, Lock, Layout, Code, LineChart } from 'lucide-react';

const services = [
  {
    title: 'Product Engineering',
    description: 'End-to-end software product development from ideation to deployment. We build robust, scalable, and secure products tailored to your business goals.',
    icon: Code,
  },
  {
    title: 'Digital Transformation',
    description: 'Reimagine your business processes with digital technologies. We help legacy enterprises modernize their IT infrastructure and workflows.',
    icon: LineChart,
  },
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like React, Angular, and Vue.js, ensuring high performance and responsive design.',
    icon: Monitor,
  },
  {
    title: 'Mobile App Development',
    description: 'Native (iOS/Android) and cross-platform (Flutter/React Native) mobile solutions that deliver exceptional user experiences.',
    icon: Smartphone,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Accelerate your delivery pipeline with our Cloud and DevOps services. AWS, Azure, GCP migration, CI/CD implementation, and infrastructure management.',
    icon: Cloud,
  },
  {
    title: 'Data & AI/ML',
    description: 'Unlock the value of your data. We build predictive models, recommendation engines, and data visualization dashboards to drive decisions.',
    icon: Brain,
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric design that combines aesthetics with functionality. We create intuitive interfaces that drive user engagement and satisfaction.',
    icon: Layout,
  },
  {
    title: 'QA & Testing',
    description: 'Comprehensive testing services including manual, automated, security, and performance testing to ensure bug-free releases.',
    icon: CheckCircleIcon,
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your digital ecosystem with our security assessments, penetration testing, and compliance consulting services.',
    icon: Lock,
  },
];

// Helper for icon
function CheckCircleIcon(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    )
}

const Services: React.FC = () => {
  return (
    <div id="services" className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-[#602b7b] font-bold tracking-wide uppercase mb-2">Our Expertise</h2>
          <p className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Technology Solutions
          </p>
          <p className="mt-4 text-xl text-gray-500">
            We combine deep technical expertise with business acumen to deliver solutions that create tangible value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#602b7b] flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                 <div className="p-3 bg-purple-50 rounded-lg group-hover:bg-[#602b7b] transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-[#602b7b] group-hover:text-white transition-colors" />
                 </div>
                 <span className="text-gray-300 group-hover:text-[#602b7b] transition-colors text-2xl font-light">0{index + 1}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#602b7b] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed flex-grow">
                {service.description}
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-50 flex items-center text-[#602b7b] font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Explore Service</span>
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;