import HeadingIcon from '@/components/common/HeadingIcon'
import { HeadingIconText } from '@/components/common/HeadingIconText'
import React from 'react'

const ServiceArea = () => {
  const cities = ['Toronto', 'Vaughan', 'Markham', 'Richmond Hill']

  return (
    <div className='container full__section_x my-10'>
      <div className='flex flex-col items-center justify-center text-center'>
        <div className='flex justify-center lg:justify-start items-center'>
          <HeadingIcon text={HeadingIconText.serviceArea} />
        </div>
        <h2 className='text-[25px] md:text-3xl lg:text-[32px] xl:text-[35px] leading-[35px] font-bold text-black pb-3'>
          Service Area
        </h2>
        <p className='text-lg text-gray-700'>
          We provide landscaping and construction services
        </p>
      </div>

      {/* Cities Area */}
      <div className='bg-black mt-6 px-4 py-6 rounded'>
        <div className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
          {cities.map((city, index) => (
            <div key={city} className='flex items-center text-white text-base md:text-lg font-bold'>
              <h3>{city}</h3>
              {index < cities.length - 1 && (
                <div className='hidden sm:block h-4 w-[1px] bg-gray-400 mx-4' />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceArea
