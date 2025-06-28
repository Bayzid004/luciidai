'use client'
import React from 'react'
import {
  FileText,
  MessageCircle,
  ClipboardCheck,
  PenTool,
  UploadCloud,
  Users,
  ShieldCheck,
} from 'lucide-react'

const StepsOfWork = () => {
  const steps = [
    {
      title: 'Proposal from Client',
      icon: <FileText className="h-6 w-6 text-blue-600" />,
    },
    {
      title: 'Project Discussion',
      icon: <MessageCircle className="h-6 w-6 text-blue-600" />,
    },
    {
      title: 'Pilot for Testing Annotators',
      icon: <ClipboardCheck className="h-6 w-6 text-blue-600" />,
    },
    {
      title: 'Confirmation & Contract Sign',
      icon: <PenTool className="h-6 w-6 text-blue-600" />,
    },
    {
      title: 'Assignment of Data',
      icon: <UploadCloud className="h-6 w-6 text-blue-600" />,
    },
    {
      title: 'Pass to Annotators',
      icon: <Users className="h-6 w-6 text-blue-600" />,
    },
  ]

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Steps of Our Work</h2>
        <p className="text-center text-gray-600 mb-12">
          Our streamlined pipeline ensures clarity, quality, and speed in every project we handle.
        </p>

        {/* Pipeline steps */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group relative"
              >
                <div className="bg-blue-100 p-4 rounded-full mb-3">{step.icon}</div>
                <p className="text-sm font-medium text-gray-700 max-w-[120px]">
                  {step.title}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 right-[-16px] w-8 h-1 bg-blue-300 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* QA Statement */}
        <div className="mt-12 flex flex-col items-center text-center">
          <ShieldCheck className="h-8 w-8 text-green-600 mb-2" />
          <p className="text-lg font-semibold text-gray-800">
            To ensure High Quality, Ainovaq follows Strict Quality Assurance.
          </p>
        </div>
      </div>
    </section>
  )
}

export default StepsOfWork
