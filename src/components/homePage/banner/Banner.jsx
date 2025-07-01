"use client";
import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full min-h-[600px]">
      {/* Background Image */}
      <Image
        src="/assets/heroBanner.webp.webp"
        alt="AI banner background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Centered Content */}
      <div className="relative z-20 flex items-center justify-center min-h-[600px] px-4 sm:px-8 py-12">
        <div className="text-center max-w-2xl text-white">
          <h1 className="text-2xl sm:text-3xl xl:text-4xl leading-9 md:leading-[44px] xl:leading-[52px] font-bold">
            Power The AI Foundation with Human Optimization
          </h1>
          <p className="text-sm sm:text-base xl:text-lg py-4">
            End-to-end annotation and AI development service for your needs
            Unlock the full potential of your needs for your AI System through
            an Expert Team of annotators. Combining Scalable workflows with
            Human precision to drive next-gen machine learning models
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 hover:shadow-lg active:scale-95" onClick={() => window.location.href = '/hire-talents'}>
              Hire Talents
            </button>
            <button className="px-6 py-3 bg-green-600 text-white font-bold rounded-xl shadow-md transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 active:scale-95">
              How We Work
            </button>
          </div>
          <p className="text-sm sm:text-base mt-10 md:mt-16 py-4">Powered By Humans, Designed for Scaling</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
