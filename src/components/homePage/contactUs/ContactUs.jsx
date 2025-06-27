import HeadingIcon from '@/components/common/HeadingIcon'
import { HeadingIconText } from '@/components/common/HeadingIconText'
import React from 'react'
import Image from 'next/image'
import ContactForm from '@/components/common/contactForm/ContactForm'

const ContactUs = () => {
  return (
    <div className='container my-10 px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10'>
      {/* Contact Info Section */}
      <div className='flex items-center justify-center'>
        <div className='max-w-lg'>
          <HeadingIcon text={HeadingIconText.contactUs} />
          <h2 className='text-[25px] md:text-3xl lg:text-[32px] xl:text-[35px] font-bold mb-4 mt-4'>
            Let's Discuss
            <br />
            Your Next Project
          </h2>
          <p className='text-lg mb-6 text-gray-700'>
            Fill out the form, or call us to set up a free at-home consultation.
          </p>

          {/* Contact Details */}
          <div className='space-y-5 text-sm md:text-base'>
            {[
              {
                icon: '/locationIcon.webp',
                alt: 'Location Icon',
                text: '43 Rachel Crescent, Markham, ON, L6C 1R8',
              },
              {
                icon: '/phoneIcon.webp',
                alt: 'Phone Icon',
                text: '(647) 786-9642',
              },
              {
                icon: '/emailIcon.webp',
                alt: 'Email Icon',
                text: 'grandlandscapinginterlocking@gmail.com',
                isUnderline: true,
              },
              {
                icon: '/clockIcon.webp',
                alt: 'Clock Icon',
                text: 'Mon & Sun by Appointment | Tue - Sat: 10am - 7pm',
              },
            ].map(({ icon, alt, text, isUnderline }, i) => (
              <div key={i} className='flex items-center gap-3'>
                <Image src={icon} width={28} height={28} alt={alt} />
                <p className={isUnderline ? 'underline' : ''}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className='bg-black px-6 md:px-10 py-8 md:py-10 rounded-lg shadow-lg'>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactUs
