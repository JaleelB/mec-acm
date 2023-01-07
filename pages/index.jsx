import { Heading } from '@chakra-ui/react'
import React from 'react'
import Layout from '../layout/layout'

const Home = () => {
  return (
      <Layout>
          {/* <Heading pt={{base: 'wrap2Lg', md:'calc(var(--chakra-space-wrapLg) * 2)', mdDesktop:'wrap2Lg', xlDesktop: 'wrap2XXLg'}}>hi</Heading> */}
          <Heading pt={{base: 'wrap2Lg', md:'calc(var(--chakra-space-wrapLg) * 2)', mdDesktop: 'wrapXXLg'}}>hi</Heading>
      </Layout>
    
  )
}

export default Home