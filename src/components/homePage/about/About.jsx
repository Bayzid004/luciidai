import React from 'react'
import Image from 'next/image'
import HeadingIcon from '@/components/common/HeadingIcon'
import { HeadingIconText } from '@/components/common/HeadingIconText'

const About = () => {
  return (
    <div className='container my-10 sm:my-14'>
      <div className='full__section_r_p grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center'>
        <div className='w-full h-auto'>
          <Image
            src='/homePageAbout.webp'
            width={813}
            height={762}
            alt='Home About Image'
            className='w-full h-auto object-cover rounded-xl'
          />
        </div>
        <div className='px-4 md:px-0'>
          <div className='mb-3 sm:mb-5'>
            <HeadingIcon text={HeadingIconText.about} />
          </div>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold leading-snug sm:leading-snug'>
            Reliable, High Quality & Affordable Landscape Construction
          </h1>
          <p className='text-sm sm:text-base md:text-lg leading-6 sm:leading-7 mt-4'>
            Grand Landscaping & Interlocking is a boutique contracting company
            specializing in landscape construction services. We pride ourselves
            on building durable and beautiful landscapes, at fair and affordable
            prices.
            <br />
            <br />
            We offer a range of landscape construction services, making us a
            one-stop shop for all our clients' landscaping needs. We
            build driveways, patios, walkways, stairs, decks, fencing, and
            specialty features like outdoor kitchens, planters and retaining
            walls. We also do repairs and demolition.
            <br />
            <br />
            We communicate with our clients throughout the construction process
            to ensure the completed landscape surpasses their expectations. Our
            commitment to our clients is reflected in our 10/10 average customer
            rating on Homestars.
            <br />
            <br />
            Our small team of experienced craftsmen are ready to help you build
            the landscape of your dreams. Contact us today!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
