import { Box, Button, Flex, scaleFadeConfig, Text } from '@chakra-ui/react';
import React from 'react';

const RoundButton = ({path, state, text}) => {
  return (
    <Flex 
        as="a"
        role="group"
        href={`/${path}`}
        width="clamp(144px, 12vw, 230px)" height="clamp(144px, 12vw, 230px)"
        bg={state ? "colorBlue" : "bgDark"} color="textLight"
        textTransform="capitalize" fontWeight="400"
        fontSize={{base: 'md', lgDesktop: '20px', xlDesktop: 'xl', xxlDesktop: '27px'}}
        transition="transform ease-in 300ms"
        justify="center" align="center"
        borderRadius="100%"
        _hover={{
            backgroundColor: 'colorBlue',
            transform: 'scale(1.1)'
        }}
    >
        <Flex 
            justify="center" direction="column"
            overflow="hidden" height="20px"
          >
            <Text 
              as="div" height="100%"
              style={{transformStyle: "preserve-3d"}}
              transition="transform 300ms ease" 
              transform="translateY(50%)"
              _groupHover={{      
                transform: "translateY(-50%)"                                  
              }}
            >
              {text}
            </Text>
            <Text 
              as="div" height="100%"
              style={{transformStyle: "preserve-3d"}}
              transition="transform 300ms ease" 
              transform="translateY(50%)"
              _groupHover={{
                transform:"translateY(-50%)"
              }}
            >
              {text}
            </Text>
        </Flex>
    </Flex>
  )
}

export default RoundButton