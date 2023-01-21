import { Box, Flex, Input, FormLabel, FormErrorMessage } from '@chakra-ui/react'
import React from 'react'

const TextInput = ({label, ph, id, ref, errors, register}) => {
  return (
    <Box w="100%" py={4}>
        <Flex mb="1rem">
          <FormLabel htmlFor={id}>{label}</FormLabel>
          <Box as="span" ml=".2rem" color="red.400">*</Box>
        </Flex>

        <Input 
          ref={ref}
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
            required: 'This is required',
            minLength: 1,
            pattern: id == 'year' && /^(freshman|Freshman|sophomore|Sophomore|junior|Junior|senior|Senior)$/,
            shouldFocusError: true,
          })}
          aria-invalid={errors.id ? "true" : "false"} 
        />

        <FormErrorMessage>
          {errors.id && errors.id?.message}
        </FormErrorMessage>

    </Box>
  )
}

export default TextInput