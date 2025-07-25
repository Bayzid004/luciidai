"use client";
import Image from "next/image";

import React from "react";

const FreelancerVettingSection = () => {
  const vettingStages = [
    {
      stage: "Setting Profile & NDA Sign",
      whatHappens: [
        "Create your account",
        "Sign our Mutual NDA",
        "Add Resume, Portfolios and language proficiencies",
        "Choose Domains",
      ],
    },
    {
      stage: "Skill Assessments",
      whatHappens: [
        "Core Aptitude test (Logic, English test)",
        "Domain Modules",
        "Tool simulations",
        "Immediate Feedback",
        "Optional Retake (one time till cool down period of 2 months)",
        "Access Our in-house testing platform to complete the tests",
      ],
    },
    {
      stage: "Live Interview with the experts",
      whatHappens: [
        "Scenario, walkthrough of edge cases",
        "Behavioral and cultural fit questions",
        "Q&A about project expectations",
        "15-30 min video call with the QA leads and technical heads",
      ],
    },
    {
      stage: "Certifications and onboarding",
      whatHappens: [
        "Digital Contract and NDA Sign",
        "Platform Tour and Community HUB invitation",
        "Pass score 90% or greater",
      ],
    },
  ];

  const benefits = [
    {
      title: "Premium Projects",
      description:
        "Work on high-tech AI products, from LLM Alignment to computer-vision startups and big tech companies.",
    },
    {
      title: "Transparent and Fair Pay",
      description:
        "Get paid upfront for your time and work, with on-time payments you can rely on.",
    },
    {
      title: "Career Growth",
      description:
        "Earn skill badges and recognition to help grow your career.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="relative py-16 px-4 min-h-[400px] flex items-center justify-center bg-cover bg-center">
  {/* Background Image with darker overlay */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/assets/applyAsAFreelancer.webp"
      alt="Freelancer application background"
      layout="fill"
      objectFit="cover"
      quality={100}
      priority
      className="brightness-50"
    />
    {/* Stronger overlay for better contrast */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
  </div>

  {/* Content - Optimized for dark background */}
  <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto w-full px-4">
    <div className="p-6 md:p-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg mb-4">
        Apply as a Freelancer
      </h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-blue-300 drop-shadow-md mb-8">
        Vetting Process
      </h2>
      <div className="space-y-6 text-lg">
        <p className="text-gray-100 max-w-2xl mx-auto leading-relaxed [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]">
          Welcome to <span className="font-semibold text-blue-200">Luciidai</span> talent
          gateway. We believe our clients deserve data crafted by the best
          minds in the industry.
        </p>
        <p className="text-gray-100 max-w-2xl mx-auto leading-relaxed [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]">
          Every annotator, trainer, and coder goes through our multi-layered 
          vetting process before joining live projects.
        </p>
        <p className="text-gray-50 max-w-2xl mx-auto leading-relaxed font-medium [text-shadow:_0_2px_4px_rgb(0_0_0_/_60%)]">
          Here's a transparent look at how we hire and onboard talent—and what
          you can expect at each stage.
        </p>
      </div>
    </div>
  </div>
</div>

        {/* Why Join Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-gray-900 text-center">
            Why Join Luciidai?
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <h4 className="text-lg font-bold text-blue-600 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vetting Pipeline Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 text-center">
            Vetting Pipeline
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-4 px-6 border-b font-medium text-gray-600 w-1/3">
                    Stage
                  </th>
                  <th className="py-4 px-6 border-b font-medium text-gray-600">
                    What Happens
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {vettingStages.map((stage, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition">
                    <td className="py-4 px-6 font-medium text-gray-800 align-top border-r border-gray-200">
                      {stage.stage}
                    </td>
                    <td className="py-4 px-6 text-gray-700">
                      <ul className="space-y-2 list-disc list-inside">
                        {stage.whatHappens.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Timeline Info */}
        <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg text-center">
          <p className="text-gray-700 leading-relaxed">
            <span className="font-medium">Timeline:</span> Approximately 3-7
            business days from application to certification. In some cases, the
            process may take slightly longer depending on circumstances.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow transition active:scale-95">
            Start Application Process
          </button>
        </div>
      </div>
    </section>
  );
};

export default FreelancerVettingSection;
