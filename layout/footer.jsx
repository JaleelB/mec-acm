import { Box, Container, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { RoundButton } from '../components'

const Footer = () => {
  return (
    <Box
        as="footer"
        width="100%" height="100%"
        bg="bgDark" color="textLight" 
        pt="clamp(5rem, 21vh, 12rem)"
        pb="clamp(2rem, 8vw, 4rem)"
        // px={{base: 'wrapSm', lgTablet:'wrap2Md', mdDesktop:'wrap2Lg', xlDesktop: 'wrap2XXLg'}}/
        px={{base: 'wrap2Md', md:'calc(var(--chakra-space-wrapLg) * 2)', mdDesktop:'wrap2Lg', xlDesktop: 'wrap2XXLg'}}
    >
        <Container 
            as="section" maxW="2000px"
        >
            <Grid gap="5vh">  
                <GridItem >
                    <Flex direction={{base: "column", smTablet: "row"}} justify="space-between">

                        <Box 
                            maxW={{ smTablet: '350px', lg:"550px"}}
                            mb={{base: 12, smTablet:"3vw"}}
                        >
                            <Heading 
                                as="h2"
                                fontWeight="400" lineHeight="1.05"
                                fontSize="clamp(36px, 4.5vw, 80px)"
                                mb={{base: 8, smTablet:"3vw", xlDesktop:"2.5rem"}}
                            >
                                Become a <br/>member today.
                            </Heading>
                            <Text fontSize="clamp(16px, 1.2vw, 20px)">
                                Join us and become a part of our vibrant community of computer science enthusiasts!
                            </Text>
                        </Box>

                        <Flex 
                            justify={{ base: 'center', smTablet: 'start'}}
                        >
                            <RoundButton 
                                path="join"  state="hover"  text="Join Us" 
                            />
                        </Flex>
                        

                    </Flex>
                </GridItem>

                <GridItem>
                    <Box
                        width="100%" height="1px" 
                        bg="colorLight" mt="8"
                    />
                </GridItem>

                <GridItem>
                    <Flex 
                        justify="space-between" direction={{base: "column", smTablet:"row"}}
                        fontSize="clamp(13px, 1.2vw, 16px)"
                    >
                        <Text>Site by Jaleel Bennett, 2022 ACM Club President</Text>
                        <Text>©2022 All Rights Reserved</Text>
                    </Flex>
                    
                </GridItem> 
            </Grid>
            
        </Container>
      
    </Box>
  )
}

export default Footer
