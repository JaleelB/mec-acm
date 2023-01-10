import React from 'react'
import Layout from '../layout/layout'
import { About, Hero, Join, Passion, Services } from '../sections/Home'

const Home = () => {
  return (
      <Layout>
          <Hero/>
          <About/>
          <Services/>
          <Passion/>
          <Join/>
      </Layout>
    
  )
}

export default Home