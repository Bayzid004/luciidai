import React from 'react';
import { ArrowRight, Users, TestTube, CheckCircle, FileText } from 'lucide-react';

const BeforeProject = () => {
  const steps = [
    {
      id: 1,
      icon: <FileText className="w-8 h-8" />,
      title: "Client Requirement Tasks",
      description: "We analyze your project requirements and define clear objectives and deliverables.",
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      title: "Candidates/Freelancers Chosen",
      description: "Our expert team selects the most qualified candidates based on skills and experience.",
      color: "bg-green-500",
      lightColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      id: 3,
      icon: <TestTube className="w-8 h-8" />,
      title: "Specialized Test to Ensure Quality",
      description: "Rigorous testing and evaluation process to guarantee top-tier talent selection.",
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      id: 4,
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Hired for the Task",
      description: "Perfect match achieved - your project is ready to begin with the right talent.",
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Before Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures you get the perfect talent for your project through careful selection and quality assurance.
          </p>
        </div>

        {/* Desktop Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200 transform -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center">
                  {/* Icon Circle */}
                  <div className={`${step.color} rounded-full p-4 shadow-lg mb-6 relative`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-700 shadow-md">
                      {step.id}
                    </div>
                  </div>
                  
                  {/* Card */}
                  <div className={`${step.lightColor} ${step.borderColor} border-2 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="flex items-start space-x-4">
                {/* Icon Circle */}
                <div className={`${step.color} rounded-full p-3 shadow-lg flex-shrink-0 relative`}>
                  <div className="text-white">
                    {React.cloneElement(step.icon, { className: "w-6 h-6" })}
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-1 -right-1 bg-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold text-gray-700 shadow-md">
                    {step.id}
                  </div>
                </div>
                
                {/* Card */}
                <div className={`${step.lightColor} ${step.borderColor} border-2 rounded-xl p-6 flex-1 hover:shadow-lg transition-all duration-300`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-6">
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeProject;