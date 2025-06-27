import React from 'react';

const TestimonialSection = () => {
  return (
    <div className="w-full bg-white py-12 flex flex-col items-center text-center">
      <h3 className="text-pink-500 font-bold text-lg tracking-wide mb-2">
        TESTIMONIALS
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
        What people say
      </h2>

      <div className="max-w-3xl px-4">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-blue-50 flex items-center justify-center rounded-full">
            <span className="text-pink-500 text-3xl font-bold">“</span>
          </div>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          Genmorphics AI was a great team player, bringing much energy to this project. 
          The company's reliability and commitment were outstanding. It was a pleasure 
          to work with them on a personal level, and his individual technical skills can 
          equally be recommended.
        </p>
      </div>

      <div className="mt-10 text-center">
        <h4 className="text-xl font-bold text-black">Kamer Kaya</h4>
        <p className="text-pink-500 font-medium">CTO - Dakikyazilim</p>
      </div>
    </div>
  );
};

export default TestimonialSection;
