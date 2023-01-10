import { Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/' className='logo'>
        <Button
            role="group"
            py={{base: 6, tablet:7}} px={6}
            bg="rgba(227, 229, 227, 0.75)"
            backdropFilter="auto" backdropBlur="8px"
            display="flex" alignContent="center" justifyContent="center"
            color="textDark"
            borderRadius="100px"
            textTransform="uppercase"
            zIndex="1200"
            fontWeight="600"
            fontSize="inherit"
            _hover={{
                background: "colorBlue",
                color: "textLight"
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
                    mec.acm
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
                    cs club
                </Text>
            </Flex>
        </Button>
    </Link>
  )
}

export default Logo