import React from 'react'
import Banner from './banner/Banner'
import ContactUs from '../homePage/contactUs/ContactUs'
import Map from '../common/map/Map'

const ContactUsPage = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <ContactUs />
      </section>
      <section>
        <Map />
      </section>
    </div>
  )
}

export default ContactUsPage
