import React from 'react'
import {Layout} from '../layout'
import { Banner, Hero,ElectiveBody, KnowMore } from '../sections/Team'

const Team = () => {
  return (
    <Layout>
        <Hero/>
        <Banner/>
        <ElectiveBody/>
        <KnowMore/>
    </Layout>
  )
}

export default Team