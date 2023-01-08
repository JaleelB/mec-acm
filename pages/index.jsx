import React from 'react'
import Layout from '../layout/layout'
import { About, Hero } from '../sections/Home'

const Home = () => {
  return (
      <Layout>
          <Hero/>
          <About/>
      </Layout>
    
  )
}

export default Home