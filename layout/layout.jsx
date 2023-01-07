import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from './footer'
import Nav from './nav'

const Layout = ({children}) => {
  return (
    <>
        <Nav/>
        <Box 
          as="main"
          px={{base: 'wrap2Md', md:'calc(var(--chakra-space-wrapLg) * 2)', mdDesktop:'wrap2Lg', xlDesktop: 'wrap2XXLg'}}
        >
            {children}
        </Box>
        <Footer/>
    </>
  )
}

export default Layout