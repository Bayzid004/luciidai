import React from 'react'

const Map = () => {
  return (
    <div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.7017210786257!2d-79.4818907!3d43.8620107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2968ab14ffe9%3A0x44b4c761886b31cb!2sEasy%20pools!5e0!3m2!1sen!2sbd!4v1744261330242!5m2!1sen!2sbd'
        width='430'
        height='300'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        className='w-full h-[202px] md:h-[300px]'
        title='Google Map showing our office location'
      ></iframe>
    </div>
  )
}

export default Map
