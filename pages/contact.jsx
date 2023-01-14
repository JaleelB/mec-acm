import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { HeroAnimationWrapper, ResponsiveSection, Title } from '../components'
import { Layout } from '../layout'
import { motion } from "framer-motion"

const Contact = () => {
    
    return (
        <Layout>
            <ResponsiveSection>
                <Box 
                    className='ceiling-space'
                    display={{base: 'block', lg: 'none'}}
                    pt={{base: '20vw', lgTablet: '5vw', mdDesktop: '2vw'}}
                />
                <Flex justify="center" align="center" minHeight={{}}>
                    <Box w={{smTablet: '80%'}}maxW="900px">
                        
                        <Box 
                            mb={{base: '2rem', lgTablet: '2.5rem', mdDesktop: '3.5rem'}}
                            maxW="965px" w="max-content"
                        >   
                            <HeroAnimationWrapper>
                                <Title> We are always</Title> 
                                <Title>here. Contact us</Title>
                            </HeroAnimationWrapper>
                        </Box>
                        <motion.div
                            initial={{ opacity: 0, y: 90 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "easeInOut",
                                duration: .9,
                                delay: 1.2,
                            }}
                        >
                            <Text 
                                w={{sm: '90%', md:'60%', smTablet: '70%', mdDesktop:'70%'}}
                                maxW="700px"
                            >
                                Whether you want to tell us about a idea for the club, 
                                find out information, or just say hi, write to us! We would 
                                love to hear from you. 
                            </Text>

                            <Box mt={{base: '3.5rem', lgTablet: '4.5rem', mdDesktop: '5.5rem'}}>
                                <Text textTransform="uppercase" mb={{base: '.5rem', sm: "1rem", lg: "2rem"}}>drop us a line at:</Text>
                                <Link 
                                    href="mailto:acm.club@mec.science"
                                    target="_blank"
                                    rel='noreferrer'
                                >
                                    <Box 
                                        fontSize={{base: '30px', md: '45px', xlDesktop: '2vw'}}
                                        role="group" w="min-content" fontWeight="300"
                                        transition="500ms all ease"
                                    >
                                        acm.club@mec.science
                                    </Box>
                                </Link>
                                <Box mt={{base: '2rem', lgTablet: '2.5rem', mdDesktop: '3.5rem'}}/>
                                <Link href="https://medgareverscuny2x.slack.com/archives/C01BPF3RBK2">
                                    <Flex flexWrap="wrap">Or <Box color="colorBlue" mx="2">send us a message</Box> over on our Slack channel</Flex> 
                                </Link>
                            </Box>
                        </motion.div>
                    </Box>
                </Flex>
            </ResponsiveSection>
        </Layout>
    )
}

export default Contact