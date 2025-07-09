import React from 'react';
import { Brain, Database, FileText, Shield, Users, GraduationCap } from 'lucide-react';

export default function OurWorking() {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "End-to-end Data Annotation",
      description: "Comprehensive annotation services across text, image, video, and audio datasets"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "LLM Instruction Tuning",
      description: "Custom dataset creation and model fine-tuning for optimal AI performance"
    },
    {
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: "RAG Model Preparation",
      description: "Context linking and retrieval-augmented generation model optimization"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Quality Assurance Frameworks",
      description: "Robust QA systems to ensure reliability in your AI pipelines"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Freelance Workforce Management",
      description: "Scalable team coordination and project management solutions"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
      title: "Domain-Specific Projects",
      description: "Specialized expertise in STEM, medical, legal, and other complex domains"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            LuciidAi gives you the tools, people, and processes you need to make AI work well, 
            whether you're training a small chatbot or fine-tuning a model with a billion parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-50 rounded-lg mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}