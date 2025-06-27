import React from 'react'
import Image from 'next/image'

const HeadingIcon = ({ text = 'empty text', classes = {} }) => {
  return (
    <div className='flex items-center pb-2'>
      <Image
        src='/everySectionNameIcon.webp'
        width={38}
        height={20}
        alt='section logo'
        className='h-5 w-10 mr-2 text-dark text-base'
      />
      <p className={`text-center text-xs sm:text-base ${classes?.textWhite}`}>
        {text}
      </p>
    </div>
  )
}

export default HeadingIcon
