'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function ServicesOverview() {
  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      {/* Header with View All Button */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 md:mb-0">Services Overview For Your Needs</h2>
          <p className="text-gray-600 text-lg max-w-xl">
            All-in-one solution to AI training needs in your hand. Luciidai makes it possible to easily connect with experts for any data annotation requirements.
          </p>
        </div>
        <button className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
          VIEW ALL <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="w-full">
          <Image
            src="/assets/ai-generated-8897458_1280.webp"
            alt="AI Services"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            "Annotation Services",
            "LLM Training",
            "Annotations",
            "Computer Vision",
            "AI & ML Development",
            "Custom Solutions",
            "Coding",
            "Dataset Curation",
            "Fine Tuning"
          ].map((service, index) => (
            <div key={index} className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition text-center">
              <h3 className="text-lg font-semibold text-gray-800">{service}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
