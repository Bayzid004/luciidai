import React from 'react';
import { 
  FileText, 
  MessageSquare, 
  TestTube, 
  CheckCircle, 
  Database, 
  Users 
} from 'lucide-react';

const StepsOfWork = () => {
  const steps = [
    {
      id: 1,
      title: "Proposal from Client",
      description: "Initial project requirements and specifications received",
      icon: <FileText className="w-8 h-8" />,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Project Discussion",
      description: "Detailed consultation and requirement analysis",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "Pilot for Testing Annotators",
      description: "Trial run to validate annotation quality and process",
      icon: <TestTube className="w-8 h-8" />,
      color: "bg-orange-500"
    },
    {
      id: 4,
      title: "Confirmation and Contract Sign",
      description: "Final approval and formal agreement execution",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "bg-green-500"
    },
    {
      id: 5,
      title: "Assignment of Data",
      description: "Data allocation and preparation for annotation",
      icon: <Database className="w-8 h-8" />,
      color: "bg-indigo-500"
    },
    {
      id: 6,
      title: "Pass on the Project to Annotators",
      description: "Final handover to annotation team for execution",
      icon: <Users className="w-8 h-8" />,
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Work Pipeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined process designed to ensure quality, efficiency, and client satisfaction at every step
          </p>
        </div>

        {/* Desktop View - Horizontal Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-gray-300"></div>
            
            <div className="grid grid-cols-6 gap-8">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Step Circle */}
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 mx-auto relative z-10 shadow-lg`}>
                    {step.icon}
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-700 border-2 border-gray-200 z-20">
                    {step.id}
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-20 -right-4 w-8 h-0.5 bg-gray-400 z-0">
                      <div className="absolute -right-1 -top-1 w-2 h-2 bg-gray-400 rotate-45 transform"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View - Vertical Flow */}
        <div className="lg:hidden">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-start space-x-4">
                {/* Step Circle */}
                <div className="flex-shrink-0 relative">
                  <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg`}>
                    {React.cloneElement(step.icon, { className: "w-6 h-6" })}
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-700 border border-gray-200">
                    {step.id}
                  </div>
                  
                  {/* Vertical Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-12 left-6 w-0.5 h-8 bg-gray-300"></div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white rounded-lg p-4 shadow-md border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss your annotation needs and create a customized solution for your data requirements.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsOfWork;