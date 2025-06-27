import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div>
      <div className='relative h-[560px] w-full'>
        <Image
          src='/blogPageBannerBg.webp'
          alt='About Us Banner'
          layout='fill'
          objectFit='cover'
          quality={100}
          className='z-0'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white'>
          <h1 className='text-4xl font-bold'>Blog</h1>
          <p className='mt-2 text-sm'>Home / Blog</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
