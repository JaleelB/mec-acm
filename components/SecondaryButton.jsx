import { Flex } from '@chakra-ui/react'
import React from 'react'

const SecondaryButton = ({path, state, text, outline}) => {
  return (
    <Flex 
        as="a"
        role="group"
        href={`/${path}`}
        bg={outline ? 'transparent' : state ? "colorBlue" : "bgDark" } 
        color={ outline ? 'colorDark' : "textLight"}
        textTransform="capitalize" fontWeight="400"
        fontSize={{base: 'md', lgDesktop: '20px', xlDesktop: 'xl'}}
        transition="transform ease-in 300ms"
        justify="center" align="center"
        w="max-content"
        border={outline && '1px'} borderColor={outline && 'colorDark'}
        py={{base: 5, tablet:7, lg:9}} px={{base: 8, tablet:12}}
        borderRadius="100px"
        _hover={{
            backgroundColor: !outline ? 'colorBlue' : 'bgDark',
            color: 'textLight'
        }}
    >
        <Flex
            justify="center" direction="column"
            overflow="hidden" height="20px"
          >
            <Flex 
              height="100%"
              style={{transformStyle: "preserve-3d"}}
              transition="transform 300ms ease" 
              transform="translateY(50%)"
              align="center"
              _groupHover={{      
                transform: "translateY(-50%)"                                  
              }}
            >
              {text}
            </Flex>
            <Flex
              height="100%"
              style={{transformStyle: "preserve-3d"}}
              transition="transform 300ms ease" 
              transform="translateY(50%)"
              align="center"
              _groupHover={{
                transform:"translateY(-50%)"
              }}
            >
              {text}
            </Flex>
        </Flex>
    </Flex>
  )
}

export default SecondaryButton