import React from 'react'
import Banner from './banner/Banner'
import DreamYardCallFormSection from '../common/dreamYardCall&FormSection/DreamYardCallFormSection'
import ContactUs from '../homePage/contactUs/ContactUs'
import Map from '../common/map/Map'

const ProjectsPage = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section></section>
      <section>
        <DreamYardCallFormSection />
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

export default ProjectsPage
