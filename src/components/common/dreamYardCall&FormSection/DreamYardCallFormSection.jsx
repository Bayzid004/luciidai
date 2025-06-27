import React from 'react'
import Image from 'next/image'

const DreamYardCallFormSection = () => {
  return (
    <div className='container my-10 relative w-full h-[260px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden flex items-center justify-center'>
      {/* Background Image */}
      <Image
        src='/dreamYardCall&FormSection.webp'
        alt='Banner Background'
        fill
        className='object-cover'
        priority
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/30' />

      {/* Content */}
      <div className='relative z-10 text-center px-4 max-w-4xl'>
        <h2 className='text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold leading-snug'>
          Create your dream yard.
          <br />
          <strong className='block mt-1'>
            Tell us about your project today.
          </strong>
        </h2>

        {/* Buttons */}
        <div className='mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5'>
          <a
            href='tel:6477063642'
            className='bg-white text-black text-sm md:text-base px-4 py-2 rounded shadow font-medium transition hover:scale-105'
          >
            (647) 706-3642
          </a>
          <button className='bg-orange-800 hover:bg-orange-700 text-white text-sm md:text-base px-4 py-2 rounded shadow font-medium transition hover:scale-105'>
            Free Estimate
          </button>
        </div>
      </div>
    </div>
  )
}

export default DreamYardCallFormSection
