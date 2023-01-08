import { Text } from '@chakra-ui/react'
import React from 'react'

const SectionHeader = ({text}) => {
  return (
    <Text 
      textTransform="uppercase"
      // fontSize={{base: '11px', sm: '14px', md:'17px', lgDesktop:'20px', xxlDesktop: '25px'}}
      fontSize="clamp(11px, 1.2vw, 25px)"
      pb="1.5rem"
    >
      {text}
    </Text>
  )
}

export default SectionHeader
