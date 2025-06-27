'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const HeaderNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [annotationOpen, setAnnotationOpen] = useState(false)
  const [hireOpen, setHireOpen] = useState(false)
  const [integrationsOpen, setIntegrationsOpen] = useState(false)

  const otherServices = [
    'AI & ML Development',
    'Custom Solutions',
    'Coding',
    'Dataset Curation',
    'Fine Tuning',
    'Instruction-tuning',
    'Evaluation',
    'Moderation and Alignment',
    'RLHF',
    'STEM',
    'RAG Model',
  ]

  const hireOptions = [
    { label: 'Apply as Freelancers', href: '/apply-freelancers' },
    { label: 'Hire Talents', href: '/hire-talents' },
    { label: 'Get Service Quote', href: '/service-quote' },
  ]

  const integrationOptions = [
    { label: 'Roboflow', href: '/integrations#roboflow' },
    { label: 'Labelbox', href: '/integrations#labelbox' },
    { label: 'CVAT', href: '/integrations#cvat' },
    { label: 'VGG Image Annotator', href: '/integrations#vgg-image-annotator' },
    { label: 'Label Studio', href: '/integrations#label-studio' },
    { label: 'Your Custom Tools', href: '/integrations#custom-tools' },
  ]

  return (
    <header className="w-full shadow-sm bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative">

        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <Image
            src=""
            width={180}
            height={50}
            alt="Logo"
            priority
          />
        </a>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6 font-semibold text-sm md:text-base text-gray-800 relative">

          {/* Services dropdown container */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => {
              setServicesOpen(false)
              setAnnotationOpen(false)
            }}
          >
            <button className="hover:text-[#cf4697] transition flex items-center">
              Services
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl border rounded-md z-50 p-4">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li
                    className="relative"
                    onMouseEnter={() => setAnnotationOpen(true)}
                    onMouseLeave={() => setAnnotationOpen(false)}
                  >
                    <span className="cursor-pointer font-semibold flex items-center justify-between">
                      Annotation Services
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>

                    {annotationOpen && (
                      <div className="absolute left-full top-0 ml-2 w-52 bg-white border shadow-lg rounded-md p-3 z-50">
                        <ul className="space-y-2 text-sm">
                          <li><a href="/services#llm-training" className="hover:text-[#cf4697]">LLM Training</a></li>
                          <li><a href="/services#annotations" className="hover:text-[#cf4697]">Annotations</a></li>
                          <li><a href="/services#computer-vision" className="hover:text-[#cf4697]">Computer Vision</a></li>
                        </ul>
                      </div>
                    )}
                  </li>

                  {otherServices.map((service, index) => (
                    <li key={index}>
                      <a href={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#cf4697]">
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Hire dropdown container */}
          <div
            className="relative"
            onMouseEnter={() => setHireOpen(true)}
            onMouseLeave={() => setHireOpen(false)}
          >
            <button className="hover:text-[#cf4697] transition flex items-center">
              Hire
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {hireOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl border rounded-md z-50 p-3">
                <ul className="space-y-2 text-sm text-gray-700">
                  {hireOptions.map(({ label, href }, index) => (
                    <li key={index}>
                      <a href={href} className="hover:text-[#cf4697]">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Integrations dropdown container */}
          <div
            className="relative"
            onMouseEnter={() => setIntegrationsOpen(true)}
            onMouseLeave={() => setIntegrationsOpen(false)}
          >
            <button className="hover:text-[#cf4697] transition flex items-center">
              Integrations
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {integrationsOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl border rounded-md z-50 p-3">
                <ul className="space-y-2 text-sm text-gray-700">
                  {integrationOptions.map(({ label, href }, index) => (
                    <li key={index}>
                      <a href={href} className="hover:text-[#cf4697]">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Other menu items */}
          <a href="/contact" className="hover:text-[#cf4697] transition">Contact</a>
          <a href="/freelancers" className="hover:text-[#cf4697] transition">Freelancers</a>
          <a href="/clients" className="hover:text-[#cf4697] transition">Clients</a>
          <a href="/about" className="hover:text-[#cf4697] transition">About Us</a>
        </nav>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md border w-64 py-4 px-4 flex flex-col space-y-3 md:hidden z-50 text-gray-800">
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="font-semibold w-full text-left"
              >
                Services {servicesOpen ? '▲' : '▼'}
              </button>

              {servicesOpen && (
                <ul className="mt-2 space-y-2 text-sm">
                  <li>
                    <button
                      onClick={() => setAnnotationOpen(!annotationOpen)}
                      className="text-left w-full"
                    >
                      Annotation Services {annotationOpen ? '▲' : '▼'}
                    </button>
                    {annotationOpen && (
                      <ul className="ml-3 mt-1 space-y-1">
                        <li><a href="/services#llm-training" className="hover:text-[#cf4697]">LLM Training</a></li>
                        <li><a href="/services#annotations" className="hover:text-[#cf4697]">Annotations</a></li>
                        <li><a href="/services#computer-vision" className="hover:text-[#cf4697]">Computer Vision</a></li>
                      </ul>
                    )}
                  </li>

                  {otherServices.map((service, index) => (
                    <li key={index}>
                      <a href={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#cf4697]">
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Hire dropdown mobile */}
            <div>
              <button
                onClick={() => setHireOpen(!hireOpen)}
                className="font-semibold w-full text-left"
              >
                Hire {hireOpen ? '▲' : '▼'}
              </button>
              {hireOpen && (
                <ul className="mt-2 ml-3 space-y-2 text-sm">
                  {hireOptions.map(({ label, href }, index) => (
                    <li key={index}>
                      <a href={href} className="hover:text-[#cf4697]">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Integrations dropdown mobile */}
            <div>
              <button
                onClick={() => setIntegrationsOpen(!integrationsOpen)}
                className="font-semibold w-full text-left"
              >
                Integrations {integrationsOpen ? '▲' : '▼'}
              </button>
              {integrationsOpen && (
                <ul className="mt-2 ml-3 space-y-2 text-sm">
                  {integrationOptions.map(({ label, href }, index) => (
                    <li key={index}>
                      <a href={href} className="hover:text-[#cf4697]">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <a href="/contact" className="hover:text-[#cf4697]">Contact</a>
            <a href="/freelancers" className="hover:text-[#cf4697]">Freelancers</a>
            <a href="/clients" className="hover:text-[#cf4697]">Clients</a>
            <a href="/about" className="hover:text-[#cf4697]">About Us</a>
          </div>
        )}
      </div>
    </header>
  )
}

export default HeaderNavbar
