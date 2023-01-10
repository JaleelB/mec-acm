import { Heading } from '@chakra-ui/react'
import React from 'react'

const Title = ({children}) => {
  return (
    <Heading as="h1"
        fontSize={{base: "clamp(40px, 6.37vw, 96px)", xlDesktop: '121px'}}
        // fontSize={{base: "36px", sm: "54px", md:"75px", lg:"96px", xlDesktop: '121px'}}
        lineHeight={{base: 1.1, md: "107%"}}
    >
        {children}
    </Heading>
  )
}

export default Title