import React from 'react'
import Layout from '../components/Layout/Layout'
import SayGoodby from '../components/LandingComp/SayGoodby'
import GetReward from '../components/LandingComp/GetReward'
import Control from '../components/LandingComp/Control'

const Landing = () => {
  return (
    <Layout>
      <SayGoodby/>
      <GetReward/>
      <Control/>
    </Layout>
  )
}

export default Landing