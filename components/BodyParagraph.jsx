import { Text } from '@chakra-ui/react'
import React from 'react'

const BodyParagraph = ({children}) => {
  return (
    <Text
        maxW={{base:'600px', lgTablet: '75%', mdDesktop: '65%', xlDesktop: '50%' }}
    >
        {children}
    </Text>
  )
}

export default BodyParagraph