import React from 'react'
import Banner from './banner/Banner'
import Blogs from './blogsSection/Blogs'
import GrandLandscapingBlogs from './grandLandscapingBlogs/GrandLandscapingBlogs'
import ContactUs from '../homePage/contactUs/ContactUs'
import Map from '../common/map/Map'

const BlogPage = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <Blogs />
      </section>
      <section>
        <GrandLandscapingBlogs />
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

export default BlogPage
