import { Box } from '@chakra-ui/react'
import React from 'react'

const ResponsiveSection = ({children}) => {
  return (
    <Box 
        as="section"
        px={{base: 'wrapSm', lgTablet:'wrap2Md', lgDesktop:'wrap2Lg', xlDesktop: 'wrap2XXLg'}}
        my={{base: '115px', lgTablet: '16.5vw', lgDesktop: '15vw'}}
    >
      {children}
    </Box>
  )
}

export default ResponsiveSection
