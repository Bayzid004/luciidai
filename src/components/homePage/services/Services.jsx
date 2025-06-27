import HeadingIcon from '@/components/common/HeadingIcon'
import { HeadingIconText } from '@/components/common/HeadingIconText'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='container my-10 px-4 sm:px-6 lg:px-8'>
      <div className='full__section_x'>
        <div className='mb-4'>
          <HeadingIcon text={HeadingIconText.chooseUs} />
        </div>

        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[35px] leading-tight font-bold text-black pb-5'>
          Our Services
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Example card - can be reused */}
          <div className='relative w-full h-[250px] sm:h-[280px] md:h-[300px] lg:h-[320px] xl:h-[350px] rounded-lg overflow-hidden'>
            {/* Background Image */}
            <Image
              src='/homePageServicesImage1.png'
              alt='Driveway'
              fill
              className='object-cover'
            />

            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-50' />

            {/* Centered Text */}
            <div className='absolute inset-0 flex items-center justify-center z-10'>
              <span className='text-orange-500 text-2xl sm:text-3xl md:text-4xl font-semibold'>
                Driveways
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
