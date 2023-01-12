import { Box, Flex, keyframes, Text } from '@chakra-ui/react'
import React from 'react'
import { Title, SecondaryButton } from  '../components'
import Nav from  '../layout/nav'

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

    <Box
        w="100vw" h="100vh" 
        bgColor="bgDark" 
        overflow="hidden"
    >
        
        <Nav/>

        <Flex
            align="center" justify="center"
            direction="column" w="100%"
            h="100%"
        >
              
            <Box 
                w="100%" overflow="hidden"
            >
                <Box    
                    w="max-content" gap={{base: "5vw", smTablet: "3.2vw"}}
                    display="flex" whiteSpace="nowrap" 
                    animation={scrollingAnimation} overflow="hidden"
                    color="textLight"
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

            <Text 
                mt={{base: "7vw", sm:'5vw', smTablet: "3.2vw", xlDesktop: '1.5vw'}}
                textAlign="center" color="textLight"
            >
                We’re sorry. The page you’re looking for doesn’t exist.
            </Text>
            
            <Box  mt={{base: "7vw", sm:'5vw', smTablet: "3.2vw", xlDesktop: '1.5vw'}}>
                <SecondaryButton path="" text="go back home" state="hover"/>
            </Box>
        </Flex>
    </Box>
  )
}

export default Error