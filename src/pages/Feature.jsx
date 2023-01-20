import React from 'react'
import Layout from '../components/Layout/Layout'
import Banner from '../components/FeatureComp/Banner'
import TypeHelp from '../components/FeatureComp/TypeHelp'
import Faq from '../components/FeatureComp/Faq'

const Feature = () => {
  return (
    <Layout>
      <Banner/>
      <TypeHelp/>
      <Faq/>

    </Layout>
  )
}

export default Feature