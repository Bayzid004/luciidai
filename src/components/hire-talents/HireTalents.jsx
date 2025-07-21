// components/hire-talents/HireTalents.jsx
'use client';

import { mailSendHandler } from '@/libs/mailSendHandeler';
import { useState } from 'react';
import { toast } from 'react-toastify';

const HireTalents = () => {
  const [selectedService, setSelectedService] = useState('');
  const [projectSize, setProjectSize] = useState('');
  const [timeline, setTimeline] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectDescription: '',
    budget: '',
    dataType: '',
    languages: '',
    specialRequirements: ''
  });

  const services = [
    { id: 'image-annotation', name: 'Image/Vidoe Annotation', description: 'Object detection, segmentation, classification' },
    { id: 'text-annotation', name: 'LLM Expert', description: 'Senior / Junior coder, Cretive Writer' },
    { id: 'video-annotation', name: 'SFT / RLFH', description: 'Supervised fine-tuning or reinforcement learning with human feedback' },
    { id: 'audio-annotation', name: 'Audio Annotation', description: 'Speech recognition, sound classification' },
    { id: 'data-collection', name: 'Data Collection', description: 'Custom dataset creation and curation' },
    { id: 'model-training', name: 'Model Training', description: 'End-to-end AI model development' },
  ];

  const projectSizes = [
    { id: 'small', name: 'Small (1K - 10K items)', description: 'Perfect for pilot projects' },
    { id: 'medium', name: 'Medium (10K - 100K items)', description: 'Standard enterprise projects' },
    { id: 'large', name: 'Large (100K+ items)', description: 'Large-scale enterprise solutions' },
    { id: 'custom', name: 'Custom Scale', description: 'Tell us your specific requirements' },
  ];

  const timelines = [
    { id: 'rush', name: '1-2 weeks', description: 'Rush delivery with priority team' },
    { id: 'standard', name: '2-4 weeks', description: 'Standard delivery timeline' },
    { id: 'extended', name: '1-3 months', description: 'Complex projects with multiple phases' },
    { id: 'ongoing', name: 'Ongoing Partnership', description: 'Long-term collaboration' },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const submissionData = {
      ...formData,
      selectedService,
      projectSize,
      timeline,
      submittedAt: new Date().toISOString()
    };
    
    console.log('Form submitted:', submissionData);
    const from = "hire talent"
    mailSendHandler({data:submissionData,from,toast});
    // Here you would typically send to your API
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Header */}
        <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-white">Luciidai</h1>
              <button 
                onClick={() => window.history.back()}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Hire Expert AI Annotation Talents
            </h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Get access to our vetted pool of AI annotation specialists. From image labeling to complex NLP tasks, 
              we match you with the perfect talent for your project needs.
            </p>
            <div className="flex justify-center space-x-8 text-blue-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1200+</div>
                <div className="text-sm">Senior Coding Expert</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2000+</div>
                <div className="text-sm">Expert Annotators</div>
              </div>
               <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm">Stem Expert</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">400+</div>
                <div className="text-sm">Creative Writer</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.5%</div>
                <div className="text-sm">Accuracy Rate</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Service Selection */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Select Your Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedService === service.id
                        ? 'border-blue-400 bg-blue-500/20'
                        : 'border-white/20 bg-white/5 hover:border-white/40'
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-blue-200 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Scale */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Project Scale</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectSizes.map((size) => (
                  <div
                    key={size.id}
                    onClick={() => setProjectSize(size.id)}
                    className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                      projectSize === size.id
                        ? 'border-blue-400 bg-blue-500/20'
                        : 'border-white/20 bg-white/5 hover:border-white/40'
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{size.name}</h3>
                    <p className="text-blue-200 text-sm">{size.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Timeline</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {timelines.map((time) => (
                  <div
                    key={time.id}
                    onClick={() => setTimeline(time.id)}
                    className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                      timeline === time.id
                        ? 'border-blue-400 bg-blue-500/20'
                        : 'border-white/20 bg-white/5 hover:border-white/40'
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{time.name}</h3>
                    <p className="text-blue-200 text-sm">{time.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-200 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:border-blue-400 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-blue-200 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:border-blue-400 focus:outline-none"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-blue-200 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:border-blue-400 focus:outline-none"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-blue-200 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:border-blue-400 focus:outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-blue-200 mb-2">Project Description *</label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:border-blue-400 focus:outline-none"
                    placeholder="Describe your project, goals, and specific requirements..."
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-blue-200 mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1A2A58] text-white border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none appearance-none"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
  
                  </div>
                  <div>
                    <label className="block text-blue-200 mb-2">Data Type</label>
                    <input
                      type="text"
                      name="dataType"
                      value={formData.dataType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:border-blue-400 focus:outline-none"
                      placeholder="e.g., Medical images, Legal documents"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-blue-200 mb-2">Required Languages</label>
                    <input
                      type="text"
                      name="languages"
                      value={formData.languages}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:border-blue-400 focus:outline-none"
                      placeholder="e.g., English, Spanish, Mandarin"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-200 mb-2">Special Requirements</label>
                    <input
                      type="text"
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:border-blue-400 focus:outline-none"
                      placeholder="e.g., HIPAA compliance, NDA required"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started - Free Consultation
              </button>
              <p className="text-blue-300 mt-4 text-sm">
                We'll respond within 24 hours with a custom proposal
              </p>
            </div>
          </form>

          {/* Features Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Precision Guaranteed</h3>
              <p className="text-blue-200">99.5% accuracy with multiple QA layers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Turnaround</h3>
              <p className="text-blue-200">Optimized workflows for quick delivery</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Talent</h3>
              <p className="text-blue-200">50+ languages with cultural expertise</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HireTalents;