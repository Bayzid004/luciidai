import HeadingIcon from '@/components/common/HeadingIcon'
import { HeadingIconText } from '@/components/common/HeadingIconText'
import React from 'react'
import Image from 'next/image'

const reviewData = [
  {
    id: 1,
    sort_name: 'L',
    name: 'Lisa',
    star: '/fiveStarsImages.webp',
    date: 'Review on 05 March, 2025',
    review:
      'Vlad and Hamid did a wonderful job. The work was done with high quality and in the shortest possible time. I am very pleased with the guys. I recommend Grand Landscaping Interlocking to everyone.',
    g: '/homePageReviewIcon.webp'
  },
  {
    id: 2,
    sort_name: 'W',
    name: 'Waleed Zoghby',
    star: '/fiveStarsImages.webp',
    date: 'Review on 24 February, 2025',
    review:
      'They discussed with us adjustments, modifications and troubleshooting at every major step. They had great suggestions and the design turned out to be even better than expected.',
    g: '/homePageReviewIcon.webp'
  },
  {
    id: 3,
    sort_name: 'S',
    name: 'Samaneh Navabpour',
    star: '/fiveStarsImages.webp',
    date: 'Review on 12 March 2025',
    review:
      'We have been extremely happy and satisfied with Hamid and Vlad. Their work is precise, clean and very modern. They were extremely polite and punctual.',
    g: '/homePageReviewIcon.webp'
  }
]

const Review = () => {
  return (
    <div className='container full__section_x my-10'>
      {/* Heading */}
      <div className='text-center'>
        <div className='flex justify-center'>
          <HeadingIcon text={HeadingIconText.chooseUs} />
        </div>
        <h2 className='text-[25px] md:text-3xl lg:text-[32px] xl:text-[35px] leading-[35px] font-bold text-black pb-5'>
          Satisfied Customers
        </h2>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {reviewData.map((data) => (
          <div
            key={data.id}
            className='border rounded-lg p-4 h-full bg-white shadow-sm'
          >
            <div className='flex items-center gap-3 mb-4'>
              <p className='bg-primary-200 py-2 px-4 rounded-full text-white text-xl font-medium'>
                {data.sort_name}
              </p>
              <div>
                <p className='text-base font-bold text-black'>{data.name}</p>
                <div className='flex items-center gap-2'>
                  <Image
                    src={data.star}
                    alt='star icon'
                    width={102}
                    height={15}
                  />
                  <p className='text-xs text-gray-600 font-medium'>
                    {data.date}
                  </p>
                </div>
              </div>
            </div>

            <p className='text-sm sm:text-base text-black mb-4'>
              {data.review}
            </p>

            <Image src={data.g} alt='Logo' width={236} height={32} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Review
