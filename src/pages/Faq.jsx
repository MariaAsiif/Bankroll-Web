import React from 'react'
import Layout from '../components/Layout/Layout'
import Banner from '../components/FaqComp/Banner'
import TypeHelp from '../components/FaqComp/TypeHelp'
import Query from '../components/FaqComp/Faq'

const Faq = () => {
  return (
    <Layout>
      <Banner />
      <TypeHelp />
      <Query />
    </Layout>
  )
}

export default Faq