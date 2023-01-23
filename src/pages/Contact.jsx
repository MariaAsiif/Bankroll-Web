import React from 'react'
import Layout from '../components/Layout/Layout'
import Banner from '../components/ContactComp/Banner'
import ContactForm from '../components/ContactComp/ContactForm'

const Contact = () => {
  return (
    <Layout>
      <Banner />
      <ContactForm/>
    </Layout>
  )
}

export default Contact