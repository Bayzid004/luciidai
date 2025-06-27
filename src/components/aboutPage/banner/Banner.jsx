import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='relative w-full h-[300px] md:h-[400px] lg:h-[560px]'>
      <Image
        src='/aboutPageBannerBg.webp'
        alt='About Us Banner'
        fill
        className='object-cover'
        quality={100}
        priority
      />
      <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 text-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
          About Us
        </h1>
        <p className='mt-2 text-xs sm:text-sm md:text-base'>Home / About Us</p>
      </div>
    </div>
  )
}

export default Banner
