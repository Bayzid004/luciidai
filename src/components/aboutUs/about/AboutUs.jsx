'use client';
import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="relative w-full min-h-[500px]">
      {/* Background Image */}
      <Image
        src="/assets/aboutBackground.jpg" // <-- Change this to your background image path
        alt="About Us Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-[500px] px-4 sm:px-8 py-16 text-white">
        <div className="text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            <strong>Ainovaq</strong> is a human-in-the-loop AI company that focuses on high-quality data annotation, LLM development, and model alignment. 
            We believe that great AI is only as good as the data that trains it. That's why we offer scalable, ethical, and accurate AI development support 
            to startups, businesses, and research labs all over the world. 
          </p>
          <p className="text-base sm:text-lg leading-relaxed mt-4">
            We are a group of engineers, linguists, data scientists, and QA experts who know that every great model is built on a well-structured dataset, 
            and every great dataset is built by a team that cares.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
