import { Heading } from '@chakra-ui/react'
import React from 'react'

const Subtitle = ({children}) => {
  return (
    <Heading as="h2"
        fontSize={{base: "29px", sm: "36px", md:"50px", lg:"65px", xlDesktop: '80px'}}
        lineHeight={{base: "100%", md: "107%"}}
        maxW={{lg: '95%', mdDesktop: '87.5%' }}
    >
        {children}
    </Heading>
  )
}

export default Subtitle