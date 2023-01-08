import { Text } from '@chakra-ui/react'
import React from 'react'

const SectionHeader = ({text}) => {
  return (
    <Text 
      as="h2"
      textTransform="uppercase"
      fontWeight="400 !important"
      fontSize="clamp(11px, 1.2vw, 25px)"
      pb="1.5rem"
    >
      {text}
    </Text>
  )
}

export default SectionHeader
