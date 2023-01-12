import { Box } from '@chakra-ui/react'
import React from 'react'

const ResponsiveSection = ({children}) => {
  return (
    <Box 
        as="section"
        px={{base: 'wrapSm', lgTablet:'wrap2Md', lgDesktop:'wrap2Lg', xlDesktop: 'wrap2XXLg'}}
        pt={{base: '55px', smTablet: '85px', lgTablet: '16.5vw', lgDesktop: '15vw', xlDesktop: '9vw'}}
        pb={{base: '27px', smTablet: '42px', lgTablet: '8vw', lgDesktop: '6.5vw', xlDesktop: '4vw'}}
    >
      {children}
    </Box>
  )
}

export default ResponsiveSection
