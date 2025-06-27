'use client'

import Image from 'next/image'

const Gallery = () => {
  const images = [
    { id: 1, src: '/galleryImage1.png', width: 871, height: 365 },
    { id: 2, src: '/galleryImage2.png', width: 457, height: 365 },
    { id: 5, src: '/galleryImage5.png', width: 801, height: 580 },
    { id: 3, src: '/galleryImage3.png', width: 527, height: 279 },
    { id: 4, src: '/galleryImage4.png', width: 527, height: 279 },
    { id: 6, src: '/galleryImage6.png', width: 871, height: 365 },
    { id: 7, src: '/galleryImage7.png', width: 457, height: 365 }
  ]

  return (
    <div className='container full__section_x my-10'>
      <h1 className='text-3xl font-bold mb-6 text-center'>
        Pinterest-Style Gallery
      </h1>

      {/* Masonry Grid */}
      <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
        {images.map((image) => (
          <div key={image.id} className='break-inside-avoid overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
            <Image
              src={image.src}
              alt={`Gallery Image ${image.id}`}
              width={image.width}
              height={image.height}
              className='w-full h-auto object-cover'
              priority={image.id <= 3}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
