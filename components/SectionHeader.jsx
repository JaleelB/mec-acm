import { Text } from '@chakra-ui/react'
import React from 'react'

const SectionHeader = ({children}) => {
  return (
    <Text 
      as="h2"
      textTransform="uppercase"
      fontWeight="400 !important"
      fontSize="clamp(11px, 1.2vw, 25px)"
      pb={{base: '.8rem', sm: "1.5rem"}}
    >
      {children}
    </Text>
  )
}

export default SectionHeader
