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
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
  {/* Text Content - Takes 50% width on desktop */}
  <div className="lg:w-1/2 text-center lg:text-left">
    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
      Our QA{' '}
      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Philosophy
      </span>
    </h2>
    <p className="text-xl text-gray-600 leading-relaxed">
      Quality isn't an afterthought at Luciidai; it's built into every step of the process. 
      Our QA systems are run by experts who have worked in the field and know more than just 
      checklists and scorecards. We put human QA agents into the workflow to check, improve, 
      and align outputs based on your changing needs.
    </p>
  </div>

  {/* Image Container - Takes 50% width and full height */}
  <div className="lg:w-1/2 w-full">
    <div className="relative w-full h-64 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-6xl">
        🎯
      </div>
      <Image
        src="/assets/ourQAPhilosophy.webp"
        alt="QA Philosophy"
        fill
        className="object-cover"
        priority
      />
    </div>
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