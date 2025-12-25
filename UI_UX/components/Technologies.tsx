import React from 'react';

const Technologies: React.FC = () => {
    const techStack = {
        'Frontend': ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind'],
        'Backend': ['Node.js', 'Python', 'Java', 'Go', '.NET Core', 'PHP'],
        'Mobile': ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)', 'Ionic'],
        'Cloud & DevOps': ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins'],
        'Database': ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'DynamoDB', 'Elasticsearch']
    };

    return (
        <div id="technologies" className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                     <div className="max-w-2xl">
                        <h2 className="text-base text-[#602b7b] font-bold tracking-wide uppercase mb-2">Technology Stack</h2>
                        <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                            Powered by Modern Tech
                        </h3>
                        <p className="mt-4 text-gray-400 text-lg">
                            We stay ahead of the curve by mastering the latest frameworks and tools to build future-proof solutions.
                        </p>
                     </div>
                     <div className="mt-4 md:mt-0">
                         <button className="text-white border border-gray-600 px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                             View Full Tech Stack
                         </button>
                     </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {Object.entries(techStack).map(([category, techs]) => (
                        <div key={category} className="space-y-4">
                            <h4 className="text-lg font-bold text-[#602b7b] border-b border-gray-800 pb-2">{category}</h4>
                            <ul className="space-y-2">
                                {techs.map((tech) => (
                                    <li key={tech} className="flex items-center text-gray-300 hover:text-white transition-colors">
                                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></div>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Technologies;