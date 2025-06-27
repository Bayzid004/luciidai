import React from 'react'
import Banner from './banner/Banner'
import WorkSection from './workSection/WorkSection'
import ContactUs from '../homePage/contactUs/ContactUs'
import Map from '../common/map/Map'
import WorkingProcessSection from './workingProcessSection/WorkingProcessSection'

const WorkPage = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <WorkSection />
      </section>
      <section>
        <WorkingProcessSection />
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

export default WorkPage
