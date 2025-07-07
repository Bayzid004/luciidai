'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      question: "Can I Apply for multiple Domains?",
      answer: "Absolutely, we encourage to do so, after certification from one domain you will unlock additional modules anytime and get more access to do them"
    },
    {
      question: "Is there a Fee to take the tests?",
      answer: "No, We dont apply any sort of fees for the testing or re-testing, its completely Free."
    },
    {
      question: "How Soon Do I get paid for the projects?",
      answer: "Payments are processed monthly, 36 days after the projects start"
    }
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                {openItem === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openItem === index && (
                <div className="px-6 pb-4 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* TLDR Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          TLDR
        </h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
              Login
            </span>
            <span className="text-gray-400">→</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
              Build A profile
            </span>
            <span className="text-gray-400">→</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
              Upload Resume
            </span>
            <span className="text-gray-400">→</span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">
              Prove Skills
            </span>
            <span className="text-gray-400">→</span>
            <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full font-medium">
              Meet Experts
            </span>
            <span className="text-gray-400">→</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-medium">
              Get Certified
            </span>
            <span className="text-gray-400">→</span>
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-medium">
              Get Work
            </span>
            <span className="text-gray-400">→</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
              Start Earning
            </span>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          READY TO GET STARTED AND EARN SOME MONEY?
        </h2>
        <p className="text-blue-100 mb-8 text-lg">
          Click the button to join and begin the vetting process
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default FAQSection;