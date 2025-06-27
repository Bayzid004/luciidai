'use client'
import React from 'react'
import Image from 'next/image'
import { FaTrashAlt, FaDatabase, FaAward, FaServer, FaShieldAlt, FaRocket } from 'react-icons/fa'

const features = [
  { icon: <FaTrashAlt />, text: 'Data Cleaning' },
  { icon: <FaAward />, text: 'Data Quality Audit' },
  { icon: <FaDatabase />, text: 'SQL Database' },
  { icon: <FaServer />, text: 'Data Annotation' },
  { icon: <FaShieldAlt />, text: 'LLM Resorces' },
  { icon: <FaRocket />, text: 'API Integration Service' },
]

const Data = () => {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left: Image */}
        <div className="flex justify-center">
          <Image
            src="/feature-illustration.png"
            alt="Feature Illustration"
            width={600}
            height={400}
            className="w-full max-w-[550px] h-auto"
          />
        </div>

        {/* Right: Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F8FAFF] hover:bg-[#f1f5ff] shadow-sm border border-gray-100 rounded-xl p-5 flex items-center gap-4 transition"
            >
              <div className="text-pink-600 text-xl">{feature.icon}</div>
              <p className="font-medium text-gray-800">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Data
