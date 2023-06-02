import React from 'react'
import Layout from '../components/Layout/Layout'
import Banner from '../components/ContactComp/Banner'
import ContactForm from '../components/ContactComp/ContactForm'
import GetInTouch from '../components/ContactComp/GetInTouch'
import LocationMap from '../components/ContactComp/LocationMap'

const Contact = () => {
  return (
    <Layout>
      <Banner />
      <GetInTouch/>
      <ContactForm/>
      <LocationMap/>
    </Layout>
  )
}

export default Contact