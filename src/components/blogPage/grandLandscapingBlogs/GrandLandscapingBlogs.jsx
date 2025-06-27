import React from 'react'
import Image from 'next/image'
import HeadingIcon from '@/components/common/HeadingIcon'
import { HeadingIconText } from '@/components/common/HeadingIconText'

const GrandLandscapingBlogs = () => {
  return (
    <div className='full__section_x my-10 px-4 md:px-8 lg:px-16'>
      <div>
        <div className='flex justify-center items-center mb-4'>
          <HeadingIcon text={HeadingIconText.blogs} />
        </div>
        <h1 className='text-3xl sm:text-4xl font-bold text-center mb-8'>
          Grand Landscaping Blogs
        </h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {[{
          title: 'Driveways',
          image: '/blogPageGrandLandscapingBlogsImage1.webp',
          alt: 'Driveways',
          description:
            'Concrete interlocking is the perfect driveway material because it is versatile, durable, easy to repair and comes in a wide variety of textures, sizes and colours. We build beautiful and durable interlock driveways that will add instant curb appeal and value to your home.',
          href: '#'
        },
        {
          title: 'Patios & Walkways',
          image: '/blogPageGrandLandscapingBlogsImage2.webp',
          alt: 'Patios & Walkways',
          description:
            'Let us help you make the most of your yard, by building a beautiful and functional outdoor patio using concrete interlocking or natural stone. Both concrete interlocking and natural stone are available in a wide array of sizes, textures and colours.',
          href: '#'
        },
        {
          title: 'Stairs',
          image: '/blogPageGrandLandscapingBlogsImage3.webp',
          alt: 'Stairs',
          description:
            'Stairs allows for a smooth transition between the different elevations of your home and yard. They are also an important focal point in your landscape. We build stairs whose material and design are aesthetically pleasing, as well as being safe and durable.',
          href: '#'
        }].map(({ title, image, alt, description, href }) => (
          <div key={title} className='bg-[#E9E9E9] rounded-2xl overflow-hidden shadow-md flex flex-col'>
            <div className='relative w-full h-[205px] sm:h-[180px] md:h-[205px]'>
              <Image
                src={image}
                alt={alt}
                layout='fill'
                objectFit='cover'
                className='rounded-t-2xl'
              />
            </div>
            <div className='px-5 py-6 flex flex-col flex-grow'>
              <h2 className='font-bold text-[20px] mb-2'>{title}</h2>
              <p className='mb-6 flex-grow text-gray-800'>{description}</p>
              <a href={href} className='pt-2 text-blue-600 hover:underline self-start'>
                Click Here
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GrandLandscapingBlogs
