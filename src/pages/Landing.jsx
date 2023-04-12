import React from 'react'
import Layout from '../components/Layout/Layout'
import SayGoodby from '../components/LandingComp/SayGoodby'
import GetReward from '../components/LandingComp/GetReward'
import Control from '../components/LandingComp/Control'
import Transfer from '../components/LandingComp/Transfer'

const Landing = () => {
  return (
    <Layout>
      <div className='relative lg:pb-0 md:pb-[10rem] pb-[35rem]'>
        <SayGoodby />
        <GetReward />
      </div>
      <Control />
      <Transfer />
    </Layout>
  )
}

export default Landing