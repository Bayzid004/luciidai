'use client'

import { BadgeCheck, Globe, Layers, Clock, Settings, ShieldCheck } from 'lucide-react'

export default function WhyAinovaq() {
  return (
    <section className="py-16 px-4 md:px-20 bg-gray-50">
      
      {/* Title & Description */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Why LuciidAi?</h2>
        <p className="text-gray-600 text-lg">
          We in LuciidAi use Strategic AI Operations and partners to help organizations build smarter, faster, and more reliable, accurate systems while keeping the human touch. From startups fine-tuning their first model to enterprises scaling annotation pipelines, we deliver unmatched quality, transparency, and flexibility.
        </p>
      </div>

      {/* Icon-based Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="rounded-2xl border bg-white shadow-sm p-6 text-center hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <BadgeCheck className="h-10 w-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Quality-Driven Annotators</h3>
          <p className="text-gray-600">
            Every contributor is trained in industry-specific annotation workflows, rigorously tested and monitored throughout the project.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl border bg-white shadow-sm p-6 text-center hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <Globe className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Global Freelance Workforce</h3>
          <p className="text-gray-600">
            Access to multilingual, multicultural talent to help you localize, scale, and diversify your data.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl border bg-white shadow-sm p-6 text-center hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <Layers className="h-10 w-10 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Scalable Custom AI Solutions</h3>
          <p className="text-gray-600">
            From 10,000 images to hundreds of thousands of documents—our flexible system scales without compromising quality.
          </p>
        </div>

        {/* Card 4 */}
        <div className="rounded-2xl border bg-white shadow-sm p-6 text-center hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <Clock className="h-10 w-10 text-yellow-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Fast Turnaround with Accuracy</h3>
          <p className="text-gray-600">
            Optimized workflows and built-in reviews guarantee quick delivery without sacrificing precision.
          </p>
        </div>

        {/* Card 5 */}
        <div className="rounded-2xl border bg-white shadow-sm p-6 text-center hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <Settings className="h-10 w-10 text-pink-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Fine-Tune to Its Finest</h3>
          <p className="text-gray-600">
            We go beyond annotation—matching output with your objectives, from RAG support to model instruction tweaking.
          </p>
        </div>

        {/* Card 6 */}
        <div className="rounded-2xl border bg-white shadow-sm p-6 text-center hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="h-10 w-10 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Human-in-the-Loop Quality Assurance</h3>
          <p className="text-gray-600">
            A robust QA layer overseen by experts ensures every submission meets the highest standards, catching what automation misses.
          </p>
        </div>

      </div>
    </section>
  )
}
