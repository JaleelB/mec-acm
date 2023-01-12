import React from 'react'
import { Layout } from '../layout'
import { Banner, Hero, Mission, Principles } from '../sections/About'

const About = () => {
  return (
    <Layout> 
        <Hero/>
        <Banner/>
        <Mission/>
        <Principles/>
    </Layout>
  )
}

export default About