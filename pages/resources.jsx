import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { Filters, ResponsiveSection, SectionHeader, Title } from '../components'
import { Layout } from '../layout'


export async function getStaticProps() {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/resources`)
    const resourcesList = await res.data.data;

    return {
        props: {
            resources: resourcesList
        },
        
    };
};
  


const Resources = ({ resources }) => {

    return (
        <Layout>
            <ResponsiveSection>
                <Box 
                    className='ceiling-space'
                    display={{base: 'block', lg: 'none'}}
                    pt={{base: '20vw', lgTablet: '5vw', lg: 0}}
                />
                <SectionHeader>Resources</SectionHeader>
                <Box maxW="1700px"> 
                    <Title>
                        Discover helpful resources for your studies and projects.
                    </Title>
                </Box>

                <Flex as="ul"
                    listStyleType="none" p={0} w={{base: "100%", md: "60%", lgTablet: '70%',mdDesktop: '50%', lgDesktop: '100%'}}
                    justify={{base: "center"}}
                    flexWrap="wrap" gap={{base: 6, lgDesktop: 10, xlDesktop: 16}} mx="auto"
                    mt={{base: '5rem', lgTablet:'7.5rem', lgDesktop:'wrap2Md'}}
                >
                    {
                        [
                            'All', 'Courses, Tutorials, Bootcamps', 'Youtube Channels', 
                            'Interview Prep', 'Web Development', 'Web Design'
                        ].map(filter => {
                            return (
                                <Box aas="li" key={filter}
                                    cursor="pointer"
                                    _hover={{
                                        color: "colorBlue"
                                    }}
                                >
                                    <Link href="/resources">
                                        {filter}
                                    </Link>
                                </Box>
                            )
                        })
                    }
                    
                </Flex>

                <Filters categories={resources}/>

                <Button
                    role="group"
                    bg="bgDark" color="textLight"
                    textTransform="capitalize" fontWeight="400"
                    fontSize={{base: 'md', lgDesktop: '20px', xlDesktop: 'xl'}}
                    transition="transform ease-in 300ms"
                    justify="center" align="center"
                    w="max-content" mx="auto" display="flex"
                    py={{base: 7, mdDesktop: 9}} px={{base: 8, tablet:12}}
                    mt={{base: '5rem', lgTablet:'7.5rem', lgDesktop:'wrap2Md'}}
                    borderRadius="100px"
                    _hover={{
                        backgroundColor: 'colorBlue'
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
                            See more
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
                            See more
                        </Flex>
                    </Flex>
                </Button>

                <Box 
                    className='floor-space'
                    display={{base: 'block', lg: 'none'}}
                    pt={{base: '20vw', lgTablet: '5vw', lg: 0}}
                />
                
            </ResponsiveSection>
        </Layout>
    )
}

export default Resources