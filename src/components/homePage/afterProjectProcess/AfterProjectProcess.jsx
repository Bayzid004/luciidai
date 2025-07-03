import React from 'react';
import { CheckCircle, Users, Shield, Award, ArrowRight, Target, Zap, Eye, TrendingUp } from 'lucide-react';

const AfterProjectProcess = () => {
  const qualitySteps = [
    { step: 1, title: "Project Assignment", description: "Initial project setup and resource allocation" },
    { step: 2, title: "Annotators", description: "Expert annotators work on your data" },
    { step: 3, title: "Quality Check 1", description: "First layer of quality validation" },
    { step: 4, title: "Quality Check 2", description: "Second layer of comprehensive review" },
    { step: 5, title: "Super QA", description: "Final expert-level quality assurance" },
    { step: 6, title: "Submission", description: "Delivery of refined, high-quality output" }
  ];

  const serviceFeatures = [
    { icon: Target, title: "Tailored Talent Sourcing and Testing", description: "Custom recruitment and skill assessment" },
    { icon: Eye, title: "End To End Project Oversight", description: "Complete project management from start to finish" },
    { icon: Zap, title: "Platform Agnostic Flexibility", description: "Works with any platform or technology stack" },
    { icon: TrendingUp, title: "Transparent, Cost Effective Scaling", description: "Clear pricing with scalable solutions" }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              After Project Assignment to Ainovaq
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            "Quality isn't a stage. It's a <span className="text-blue-600">culture</span>."
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Every project at Ainovaq passes through a 3-layer Quality Assurance pipeline. For best outcome, 
            we ensure to implement multiple Quality Checks throughout the entire process.
          </p>
        </div>

        {/* Quality Pipeline */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-12">
            {qualitySteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    {index < qualitySteps.length - 1 && (
                      <ArrowRight className="text-blue-400 w-5 h-5 hidden lg:block" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{step.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Quality Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="text-blue-600 w-8 h-8 mr-3" />
                <h3 className="font-semibold text-gray-900">Peer Reviews Within Tasks</h3>
              </div>
              <p className="text-gray-600">Using real-time feedback, annotators confirm each other's submissions for enhanced accuracy.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Shield className="text-blue-600 w-8 h-8 mr-3" />
                <h3 className="font-semibold text-gray-900">Devoted QA Leads</h3>
              </div>
              <p className="text-gray-600">Domain-specific reviewers check for precision, consistency, and adherence to specifications.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Award className="text-blue-600 w-8 h-8 mr-3" />
                <h3 className="font-semibold text-gray-900">Super QA Panel</h3>
              </div>
              <p className="text-gray-600">Project managers, AI researchers, and linguists who guarantee complete task alignment are among the final-level reviewers.</p>
            </div>
          </div>
        </div>

        {/* Service Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let Ainovaq's In-House Experts Manage Your Entire AI Data Pipeline
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Tight on resources or scaling fast? Let the Ainovaq's in-house experts take the initiatives for you. 
                From hiring people to completing the project, we offer full-service management for your AI data labeling project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-blue-100 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg inline-flex items-center">
                Get A Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterProjectProcess;