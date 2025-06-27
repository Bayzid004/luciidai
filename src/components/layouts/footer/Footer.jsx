'use client'
import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-[#F3FAFF] pt-10 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
            <div>
              <h1 className="text-xl font-bold">GenMorphics</h1>
              <p className="text-xs text-gray-500">AI Solutions</p>
            </div>
          </div>
          <p className="text-sm">Unleash the Potential of Your Data with Expert
            Labeling High-quality, Targeted Training Data for
            Superior Model Performance</p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Usefull Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About US</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>LLM Traing</li>
            <li>API Development</li>
            <li>Machine Learning</li>
            <li>Data Visualization</li>
            <li>Big Data</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <p className="text-sm mb-3">
            Possible offering at contempt mr distance stronger an. Attachment excellence announcing
          </p>
          <p className="text-sm">
            <strong>Email:</strong>{' '}
            <a href="mailto:hr@genmorphicsai.com" className="text-gray-900">
              hr@genmorphicsai.com
            </a>
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#"><FaFacebookF className="w-8 h-8 p-2 bg-[#3b5998] text-white rounded" /></a>
            <a href="#"><FaTwitter className="w-8 h-8 p-2 bg-[#00acee] text-white rounded" /></a>
            <a href="#"><FaLinkedinIn className="w-8 h-8 p-2 bg-[#0A66C2] text-white rounded" /></a>
            <a href="#"><FaInstagram className="w-8 h-8 p-2 bg-black text-white rounded" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-300 py-4 px-4 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p>
            © Copyright 2024. All Rights Reserved by{' '}
            <span className="text-pink-600 font-semibold">GenMorphics AI Solutions</span>
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-black">Terms</a>
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
