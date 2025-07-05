'use client';
import React from 'react';
import Image from 'next/image';

const MissionValues = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            Our Missions and Values
          </h2>

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mission:</h3>
              <p>
                To provide the world's most creative AI Teams with the tools they need to succeed
                with the data and development support, that is, second to none in terms of accuracy and honesty.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Core Values:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Human-Centric AI:</strong> Humans are at the center of every model we support and work on.
                </li>
                <li>
                  <strong>Precision at Scale:</strong> Accuracy is a must, no matter if there are hundreds of prompts or millions of labels.
                </li>
                <li>
                  <strong>Transparency:</strong> We believe in honesty—open communication about everything: prices, pipelines, and team challenges.
                </li>
                <li>
                  <strong>Diversity:</strong> A versatile network of freelancers and team members brings diverse strengths to each project.
                </li>
                <li>
                  <strong>Innovation & Learning:</strong> We constantly refine our processes to stay ahead in AI and tech evolution.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full h-[400px] relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/missionValues.jpg" // replace with your image path
            alt="Mission and Values"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
