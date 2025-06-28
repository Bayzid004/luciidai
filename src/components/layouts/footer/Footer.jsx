'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Linkedin, X, MessageCircle, ChevronRight, Mail } from 'lucide-react'

const Footer = () => {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('home') // 'home' or 'messages'

  return (
    <>
      {/* Footer Section */}
      <footer className="bg-white border-t border-gray-200 text-sm text-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          
          {/* Platform */}
          <div>
            <h4 className="text-gray-500 font-semibold mb-3">Platform</h4>
            <ul className="space-y-2">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">How It Works</Link></li>
              <li><Link href="#">Hire Freelancers</Link></li>
              <li><Link href="#">Hire Outsourced Providers</Link></li>
              <li><Link href="#">Supported Labeling Tools</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li>
                <Link href="#" className="flex items-center gap-1">
                  Fully-Managed Service <span className="text-yellow-500">⚡</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* LLMs & Generative AI */}
          <div>
            <h4 className="text-gray-500 font-semibold mb-3">LLMs & Generative AI</h4>
            <ul className="space-y-2">
              <li><Link href="#">RLHF</Link></li>
              <li><Link href="#">Coding</Link></li>
              <li><Link href="#">STEM Labeling</Link></li>
              <li><Link href="#">Reasoning & Planning</Link></li>
              <li><Link href="#">Dataset Curation</Link></li>
              <li><Link href="#">Fine-Tuning</Link></li>
              <li><Link href="#">Tool Use</Link></li>
              <li><Link href="#">+6 More</Link></li>
            </ul>
          </div>

          {/* Data Labeling */}
          <div>
            <h4 className="text-gray-500 font-semibold mb-3">Data Labeling</h4>
            <ul className="space-y-2">
              <li><Link href="#">Video</Link></li>
              <li><Link href="#">Medical</Link></li>
              <li><Link href="#">Robotics</Link></li>
              <li><Link href="#">3D Point Cloud</Link></li>
              <li><Link href="#">Image</Link></li>
              <li><Link href="#">Time Series</Link></li>
              <li><Link href="#">Geospatial</Link></li>
              <li><Link href="#">+7 More</Link></li>
            </ul>
          </div>

          {/* Integrations */}
          <div>
            <h4 className="text-gray-500 font-semibold mb-3">Integrations</h4>
            <ul className="space-y-2">
              <li><Link href="#">Label Studio</Link></li>
              <li><Link href="#">Argilla</Link></li>
              <li><Link href="#">Labelbox</Link></li>
              <li><Link href="#">V7 Labs</Link></li>
              <li><Link href="#">Encord</Link></li>
              <li><Link href="#">AWS SageMaker</Link></li>
              <li><Link href="#">CVAT</Link></li>
              <li><Link href="#">+15 More</Link></li>
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h4 className="text-gray-500 font-semibold mb-3">Contact</h4>
            <ul className="space-y-2">
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Support</Link></li>
            </ul>

            <h4 className="text-gray-500 font-semibold mt-6 mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#">Glossary</Link></li>
              <li><Link href="#">News</Link></li>
            </ul>
          </div>

          {/* Join */}
          <div>
            <h4 className="text-gray-500 font-semibold mb-3">Join</h4>
            <ul className="space-y-2">
              <li><Link href="#">Join as Freelancer</Link></li>
              <li><Link href="#">List Your Data Labeling Company</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto px-4 py-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2025 OpenTrain AI. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 mr-14 md:mt-0">
            <X className="w-5 h-5 cursor-pointer hover:text-gray-700" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-gray-700" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-700" />
          </div>
        </div>
      </footer>

      {/* Floating Chat Button & Modal */}
      <div className="fixed bottom-6 right-6 z-50">
        {!open ? (
          <button
            onClick={() => {
              setOpen(true)
              setActiveTab('home')
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        ) : (
          <div className="w-[360px] rounded-2xl overflow-hidden shadow-xl bg-white flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-b from-gray-900 to-black text-white px-5 py-4 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src="/logo.svg" alt="logo" width={32} height={32} />
                  <h2 className="text-lg font-semibold">OpenTrain AI</h2>
                </div>
                <button onClick={() => setOpen(false)} className="text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold">Hi there 👋</h3>
                <p className="text-lg font-semibold">How can we help?</p>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'home' ? (
              <div className="bg-white px-4 py-3 shadow-md">
                <div className="bg-gray-100 p-3 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-black">Send us a message</p>
                    <p className="text-xs text-gray-500">We will reply as soon as we can</p>
                  </div>
                  <ChevronRight className="text-blue-600 w-5 h-5" />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center flex-1 px-4 py-6 text-center">
                <MessageCircle className="w-10 h-10 text-gray-600 mb-4" />
                <h3 className="text-lg font-semibold mb-1">No messages</h3>
                <p className="text-sm text-gray-500 mb-4">Messages from the team will be shown here</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2">
                  Send us a message <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Modal Footer Navigation */}
            <div className="border-t px-6 py-3 flex justify-around text-sm text-gray-600 bg-white rounded-b-2xl">
              <div
                className={`flex flex-col items-center cursor-pointer ${activeTab === 'home' ? 'text-blue-600' : ''}`}
                onClick={() => setActiveTab('home')}
              >
                <Mail className="w-5 h-5 mb-1" />
                <span className="font-medium">Home</span>
              </div>
              <div
                className={`flex flex-col items-center cursor-pointer ${activeTab === 'messages' ? 'text-blue-600' : ''}`}
                onClick={() => setActiveTab('messages')}
              >
                <MessageCircle className="w-5 h-5 mb-1" />
                <span className="font-medium">Messages</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Footer