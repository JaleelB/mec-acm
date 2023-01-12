import { Box } from '@chakra-ui/react'
import React from 'react'

const ResponsiveSection = ({children}) => {
  return (
    <Box 
        as="section"
        px={{base: 'wrapSm', lgTablet:'wrap2Md', lgDesktop:'wrap2Lg', xlDesktop: 'wrap2XXLg'}}
        // py={{base: '115px', lgTablet: '16.5vw', lgDesktop: '15vw'}}
        py={{base: '55px', smTablet: '115px', lgTablet: '16.5vw', lgDesktop: '15vw', xlDesktop: '9vw'}}
    >
      {children}
    </Box>
  )
}

export default ResponsiveSection
