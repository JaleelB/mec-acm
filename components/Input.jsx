import { Box, Flex, Input, FormLabel, Text } from '@chakra-ui/react'
import React from 'react'

const TextInput = ({label, ph, id, inputRef, errors, register}) => {
  
  return (
    <Box w="100%" py={4}>
        <Flex mb="1rem">
          <FormLabel htmlFor={id}>{label}</FormLabel>
          <Box as="span" ml=".2rem" color="red.400">*</Box>
        </Flex>

        <Input 
          id={id}
          type="text"
          fontSize="inherit"
          variant="flushed" 
          w="100%" size="lg"
          placeholder={ph}
          _placeholder={{ color: 'colorLight' }}
          pb="2rem" h={{mdDesktop: "75px"}}
          borderColor="colorLight"
          {...register(id, {
            required: id !== "year" ? 'This is required': 'Input must be one of the following: Freshman, Sophomore, Junior, Senior',
            minLength: 1,
            // pattern: 
            //   id === 'year' && /^(freshman|Freshman|sophomore|Sophomore|junior|Junior|senior|Senior)$/ | 
            //   id === 'email' && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            shouldFocusError: true,
            onChange: (e) => inputRef.current = e.target.value
          })}
          aria-invalid={errors[id] ? "true" : "false"} 
        />

        {errors[id] && (
          <Text
            mt=".5rem"
            color="red.400"
          >
            {errors[id].message}
          </Text>
        )}

    </Box>
  )
}

export default TextInput