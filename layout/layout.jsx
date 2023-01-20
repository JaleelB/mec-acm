import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from './footer'
import Nav from './nav'

const Layout = ({children, dark, noFooter}) => {

  return (
    <>
        <Nav/>
        <Box as="main" bg={ dark && 'colorDark'} color={ dark && 'textLight'}>
            {children}
        </Box>
        { !noFooter && <Footer/>}
    </>
  )
}

export default Layout