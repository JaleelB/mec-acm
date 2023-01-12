import React from 'react'
import { Layout } from '../layout'
import { Banner, Hero, Mission } from '../sections/About'

const About = () => {
  return (
    <Layout> 
        <Hero/>
        <Banner/>
        <Mission/>
    </Layout>
  )
}

export default About