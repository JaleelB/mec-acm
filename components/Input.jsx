import { Box, Flex, Text, Input } from '@chakra-ui/react'
import React from 'react'

const TextInput = ({label, ph}) => {
  return (
    <Box w="100%" py={4}>
        <Flex mb="1rem">
            <Text as="label">{label}</Text>
            <Box as="span" ml=".2rem" color="red.400">*</Box>
        </Flex>
        <Input 
            fontSize="inherit"
            variant="flushed" 
            w="100%" size="lg"
            placeholder={ph}
            pb="2rem" h={{mdDesktop: "75px"}}
        />
    </Box>
  )
}

export default TextInput