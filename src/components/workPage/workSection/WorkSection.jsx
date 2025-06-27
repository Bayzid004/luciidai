import GetInTouchForm from '@/components/common/form/GetInTouchForm'
import HeadingIcon from '@/components/common/HeadingIcon'
import { HeadingIconText } from '@/components/common/HeadingIconText'
import React from 'react'

const WorkSection = () => {
  return (
    <div className='full__section_x my-12 px-4 md:px-8 lg:px-16'>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
        <div className='lg:col-span-3 flex items-center'>
          <div>
            <div className='flex justify-center lg:justify-normal items-center mb-4'>
              <HeadingIcon text={HeadingIconText.works} />
            </div>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>
              Our Recent Work
            </h1>
            <p className='leading-7 md:leading-9 mr-0 lg:mr-7 text-justify md:text-left text-base md:text-lg'>
              We invite you to take a closer look at some of our most recent projects, thoughtfully selected to showcase the range and quality of our work. Each project reflects our dedication to excellence, creativity, and attention to detail. From concept to completion, we collaborate closely with our clients to ensure their vision is brought to life seamlessly. Whether you're seeking inspiration or evaluating our capabilities, these examples highlight the results we consistently deliver across a variety of industries and styles.
            </p>
          </div>
        </div>
        <div className='lg:col-span-2'>
          <div className='border border-gray-200 rounded-lg shadow-inner p-6 bg-white'>
            <GetInTouchForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkSection
