'use client'
import React from 'react'
import { ClipboardList, UserCheck, CheckCircle, UserPlus } from 'lucide-react'

const steps = [
  {
    icon: <ClipboardList className="w-6 h-6 text-purple-600" />,
    label: 'Based On Client Requirement Tasks',
  },
  {
    icon: <UserPlus className="w-6 h-6 text-purple-600" />,
    label: 'Candidates / Freelancers Chosen',
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    label: 'Specialized Test to Ensure Quality',
  },
  {
    icon: <UserCheck className="w-6 h-6 text-purple-600" />,
    label: 'Hired for the Task',
  },
]

const BeforeProject = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Before Project</h2>
        <p className="text-gray-600">Our streamlined selection process to ensure quality</p>
      </div>

      {/* Horizontal pipeline */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center max-w-[180px]">
            <div className="bg-purple-100 p-4 rounded-full mb-3">{step.icon}</div>
            <p className="text-gray-700 font-medium">{step.label}</p>

            {/* Arrow except last item */}
            {i !== steps.length - 1 && (
              <div className="hidden sm:block w-12 h-1 bg-purple-300 mt-6 -mb-10"></div>
            )}
          </div>
        ))}
      </div>

      {/* Arrows for small screens */}
      <div className="sm:hidden flex justify-center mt-6 space-x-4">
        {steps.map((_, i) =>
          i !== steps.length - 1 ? (
            <div key={i} className="w-6 h-1 bg-purple-300 rounded" />
          ) : null
        )}
      </div>
    </section>
  )
}

export default BeforeProject
