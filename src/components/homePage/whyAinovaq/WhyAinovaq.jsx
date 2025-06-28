'use client'
import React from 'react'
import { CheckCircle, Users, Globe, Clock, SlidersHorizontal, Wrench } from 'lucide-react'
import Link from 'next/link'

const WhyAinovaq = () => {
  const highlights = [
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
      title: 'Quality-Driven Annotators',
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: 'Global Freelance Workforce',
    },
    {
      icon: <SlidersHorizontal className="h-6 w-6 text-blue-600" />,
      title: 'Scalable Custom AI Solutions',
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Fast Turnaround with Accuracy',
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-600" />,
      title: 'Fine Tune to Its Finest',
    },
  ]

  const services = [
    'Annotation Services',
    'LLM Training',
    'Annotations',
    'Computer Vision',
    'AI & ML Development',
    'Custom Solutions',
    'Coding',
    'Dataset Curation',
    'Fine Tuning',
  ]

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Why Ainovaq */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Why Ainovaq?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-xl flex items-start gap-4 hover:shadow-lg transition"
            >
              {item.icon}
              <h3 className="text-base font-semibold text-gray-700">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto bg-white p-8 shadow-md rounded-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
            Services Overview For Your Needs
          </h2>
          <Link href="/services">
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              VIEW ALL
            </button>
          </Link>
        </div>
        <p className="text-gray-600 mb-6">
          All-in-one solution to AI training needs in your hand. Ainovaq makes it easy to connect with experts for any data annotations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 p-4 rounded-lg hover:border-blue-600 transition"
            >
              <p className="text-gray-700 font-medium">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyAinovaq
