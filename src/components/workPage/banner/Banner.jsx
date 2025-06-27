import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='container'>
      <div className='relative h-[560px] w-full'>
        <Image
          src='/workPageBannerBg.webp'
          alt='About Us Banner'
          layout='fill'
          objectFit='cover'
          quality={100}
          className='z-0 w-full'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white'>
          <h1 className='text-4xl font-bold'>Work</h1>
          <p className='mt-2 text-sm'>Home / Work</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
