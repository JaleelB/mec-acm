import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const HoverTransformText = ({text1, text2, isOpen}) => {
  return (
    <Flex
        justify="center" direction="column"
        overflow="hidden" height="20px"
    >
        <Text
            as="div" height="100%"
            style={{transformStyle: "preserve-3d", transform: isOpen ? 'translateY(-50%)' : 'translateY(50%)'}}
            transition="transform 300ms ease" 
        >
            {text1}
        </Text>
        <Text 
            as="div" height="100%"
            style={{transformStyle: "preserve-3d", transform: isOpen ? 'translateY(-50%)' : 'translateY(50%)'}}
            transition="transform 300ms ease" 
        >
            {text2}
        </Text>
    </Flex>
  )
}

export default HoverTransformText