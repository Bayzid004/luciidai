'use client'
import React from 'react'
import { CheckCircle } from 'lucide-react'

const cardData = [
  {
    title: 'LLM Data Trainer',
    items: [
      'Reinforcement Learning (RLHF)',
      'Supervised Fine-Tuning (SFT)',
      'Unmatched Precision for Models',
      'Comprehensive Guidance',
    ],
  },
  {
    title: 'Data Analysis',
    items: [
      'Analyzing large datasets',
      'Extracting meaningful insights',
      'Data cleaning and preprocessing',
      'Exploratory data analysis (EDA)',
    ],
  },
  {
    title: 'Machine Learning',
    items: [
      'Image Recognition',
      'Speech Recognition',
      'Recommendation Systems',
      'Anomaly Detection',
    ],
  },
  {
    title:'Custom AI Solutions',
    items:[
        'Business Requirements',
        'Consulting',
        'Prototyping',
        'Development & Implementation'
    ]
  },
  {
    title:'Model Optimization',
    items:[
        'Model Deployment',
        'Performance Optimization',
        'Drift Monitoring',
        'Accuracy Monitoring'
    ]
  },
  {
    title:'Model Optimization',
    items:[
        'Strategic Guidance',
        'AI Consulting',
        'Use Case Identification',
        'Roadmap Development'
    ]
  },
]

const OurServices = () => {
    return (
        <div className="container">
            <div>
                <div className="text-center space-y-4">
                    <h1 className="text-5xl font-bold text-pink-500">Our Services</h1>
                    <h2 className="text-4xl font-bold">What We Do</h2>
                </div>
                <div>
                    <div className="py-12 px-4 bg-gray-100">
                        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {cardData.map((card, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl p-6 text-white bg-gradient-to-br from-pink-500 via-purple-500 to-blue-600 shadow-lg"
                                >
                                    <h3 className="text-2xl font-bold mb-6">{card.title}</h3>
                                    <ul className="space-y-4">
                                        {card.items.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <CheckCircle size={20} className="text-white" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurServices