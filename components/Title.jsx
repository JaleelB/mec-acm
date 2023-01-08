import { Heading } from '@chakra-ui/react'
import React from 'react'

const Title = ({children}) => {
  return (
    <Heading as="h1"
        fontSize={{base: "36px", sm: "54px", md:"75px", lg:"96px", xlDesktop: '121px'}}
        mb={{base: 8, sm: 10}} lineHeight={{base: "100%", md: "107%"}}
    >
        {children}
    </Heading>
  )
}

export default Title