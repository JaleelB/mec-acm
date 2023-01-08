import React from 'react'
import Layout from '../layout/layout'
import { About, Hero, Services } from '../sections/Home'

const Home = () => {
  return (
      <Layout>
          <Hero/>
          <About/>
          <Services/>
      </Layout>
    
  )
}

export default Home