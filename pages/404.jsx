import { Box, Flex, keyframes, Text } from '@chakra-ui/react'
import React from 'react'
import { Title } from  '../components'

const animation = keyframes`
   0% {
    transform: translate3d(0%, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`

const scrollingAnimation = `${animation} linear infinite 12s`

const Error = () => {
  return (

    <Flex
        w="100vw" h="100vh" 
        bgColor="bgDark" color="textLight"
        align="center" justify="center"
        overflow="hidden"
    >
        <Box>

            <Box 
                w="100%" overflow="hidden"
            >
                <Box    
                    w="max-content" gap={{base: "5vw", smTablet: "3.2vw"}}
                    display="flex" whiteSpace="nowrap" 
                    animation={scrollingAnimation} overflow="hidden"
                >
                    <Box display="flex" gap={{base: "5vw", smTablet: "3.2vw"}}>
                        {
                            [1,2,3, 4, 5, 6, 7, 8].map(cardCount => {
                                return (
                                    
                                    <Flex 
                                        key={cardCount}
                                        w="max-content" 
                                    >
                                        <Title>404 page</Title>   
                                    </Flex>
                                )
                            })
                        }  
                    </Box>
                    <Box display="flex" gap={{base: "5vw", smTablet: "3.2vw"}}>
                        {
                            [1,2,3, 4, 5, 6, 7, 8].map(cardCount => {
                                return (
                                    
                                    <Flex 
                                        key={cardCount}
                                        w="max-content" 
                                    >
                                        <Title>404 page</Title>   
                                    </Flex>
                                )
                            })
                        } 
                    </Box>
                </Box>
            </Box>

            <Text>We’re sorry. the page you’re looking for doesn’t exist</Text>
        </Box>
    </Flex>
  )
}

export default Error