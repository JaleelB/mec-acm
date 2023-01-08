import { Box } from '@chakra-ui/react'
import React from 'react'

const ResponsiveSection = ({children}) => {
  return (
    <Box 
        as="section"
        px={{base: 'wrapSm', lgTablet:'wrap2Md', lgDesktop:'wrap2Lg', xlDesktop: 'wrap2XXLg'}}
    >
      {children}
    </Box>
  )
}

export default ResponsiveSection
