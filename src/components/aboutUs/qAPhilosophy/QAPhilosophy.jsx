import React from 'react';
import Image from 'next/image';

const QAPhilosophy = () => {
  const pillars = [
    {
      icon: '📊',
      text: 'Domain-specific test sets',
      description: 'Tailored testing frameworks designed for your specific industry and use cases'
    },
    {
      icon: '👥',
      text: 'Peer-to-peer auditing',
      description: 'Collaborative review process ensuring multiple expert perspectives'
    },
    {
      icon: '⭐',
      text: 'Super QA final-layer review',
      description: 'Final expert validation before delivery to ensure exceptional quality'
    },
    {
      icon: '🔄',
      text: 'Feedback integration loops with clients',
      description: 'Continuous improvement through direct client feedback integration'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-xl">
              🎯
            </div>
            {/* Replace with actual image when available */}
            {/* <Image
              src="/your-qa-image.jpg"
              alt="QA Philosophy"
              width={128}
              height={128}
              className="rounded-2xl shadow-xl"
            /> */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Title and Description */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our QA{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Philosophy
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Quality isn't an afterthought at LuciidAi; it's built into every step of the process. 
              Our QA systems are run by experts who have worked in the field and know more than just 
              checklists and scorecards. We put human QA agents into the workflow to check, improve, 
              and align outputs based on your changing needs.
            </p>
          </div>
        </div>

        {/* Key Pillars Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Key Pillars of Our QA Model
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  
                  {/* Text */}
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {pillar.text}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QAPhilosophy;