'use client'
import React from 'react'

const skills = [
  { label: 'MACHINE LEARNING', value: 90 },
  { label: 'LLM TRAINING', value: 95 },
  { label: 'AI SOLUTIONS', value: 90 },
]

const ChooseUs = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h4 className="text-pink-600 font-semibold text-lg mb-2">Why Ainovaq?</h4>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
            We Specialize in traing Large<br />Language models
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Unleash the Potential of Your Data with Expert Labeling High-quality, Targeted Training Data for Superior Model Performance.
          </p>
        </div>

        {/* Right Progress Bars */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1 font-semibold text-sm text-gray-800">
                <span>{skill.label}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-pink-600 h-1.5 rounded-full"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChooseUs
