import React from 'react'
import Banner from './banner/Banner'
import AboutUs from './aboutUs/AboutUs'
import WorkflowSection from './workflowSection/WorkflowSection'
import DreamYardCallFormSection from '../common/dreamYardCall&FormSection/DreamYardCallFormSection'
import Review from '../homePage/review/Review'
import ServiceArea from '../homePage/serviceArea/ServiceArea'
import ContactUs from '../homePage/contactUs/ContactUs'
import Map from '../common/map/Map'

const AboutPage = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <WorkflowSection />
      </section>
      <section>
        <DreamYardCallFormSection />
      </section>
      <section>
        <Review />
      </section>
      <section>
        <ServiceArea />
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

export default AboutPage
