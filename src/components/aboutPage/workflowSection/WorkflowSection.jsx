import HeadingIcon from '@/components/common/HeadingIcon'
import { HeadingIconText } from '@/components/common/HeadingIconText'
import Image from 'next/image'

const steps = [
  {
    title: 'On-Site Consultation',
    image: '/aboutPageWorkFlowImage1.webp',
    icon: '🏡'
  },
  {
    title: 'Design & Construction Estimate',
    image: '/aboutPageWorkFlowImage2.webp',
    icon: '📐'
  },
  {
    title: 'Material Matters',
    image: '/aboutPageWorkFlowImage3.webp',
    icon: '📦'
  },
  {
    title: 'Quality Work, On Time',
    image: '/aboutPageWorkFlowImage4.webp',
    icon: '🛠️'
  },
  {
    title: 'Contact Us',
    image: '/aboutPageWorkFlowImage5.webp',
    icon: '📞'
  }
]

// Helper to chunk steps into rows of 3
const chunkSteps = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )
}

export default function WorkflowSection () {
  const rows = chunkSteps(steps, 3)

  return (
    <div className='full__section_x'>
      <section className='text-center py-12 px-4 md:px-8 lg:px-16'>
        <div className='flex flex-col items-center justify-center mb-8'>
          <div className='flex justify-center lg:justify-normal items-center mb-4'>
            <HeadingIcon text={HeadingIconText.workFlow} />
          </div>
          <h2 className='text-[25px] md:text-3xl lg:text-[32px] xl:text-[35px] leading-[35px] font-bold text-black'>
            Our Work Flow
          </h2>
        </div>

        <div className='space-y-8'>
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className='flex flex-wrap justify-center gap-6'
            >
              {row.map((step, index) => (
                <div
                  key={index}
                  className='relative w-full max-w-xs sm:max-w-sm md:max-w-md h-56 sm:h-72 rounded-xl overflow-hidden shadow-lg'
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-xl'
                  />
                  <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white px-4 py-3 rounded-b-xl'>
                    <div className='flex flex-col items-center'>
                      <span className='text-2xl sm:text-3xl'>{step.icon}</span>
                      <p className='mt-1 text-base sm:text-lg font-medium'>{step.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
