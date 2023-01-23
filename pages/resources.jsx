import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { ResponsiveSection, SectionHeader, Title } from '../components'
import { Layout } from '../layout'


const Resources = () => {

    const resources = [
        {author: 'FreeCodeCamp', title: "Learn to code for free with F's comprehensive curriculum.", type: "Courses, Tutorials, Bootcamps", url: 'https://www.freecodecamp.org/'},
        {author: 'FreeCodeCamp', title: "Learn to code for free with FreeCodeCamp's comprehensive curriculum.", type: "Courses, Tutorials, Bootcamps", url: 'https://www.freecodecamp.org/'},
        {author: 'FreeCodeCamp', title: "Learn to code for free with FreeCodeCamp's comprehensive curriculum.", type: "Courses, Tutorials, Bootcamps", url: 'https://www.freecodecamp.org/'},
        {author: 'FreeCodeCamp', title: "Learn to code for free with FreeCodeCamp's comprehensive curriculum.", type: "Courses, Tutorials, Bootcamps", url: 'https://www.freecodecamp.org/'},
        {author: 'FreeCodeCamp', title: "Learn to code for free with FreeCodeCamp's comprehensive curriculum.", type: "Courses, Tutorials, Bootcamps", url: 'https://www.freecodecamp.org/'}
    ]

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
                    listStyleType="none" p={0} w={{base: "100%", md: "60%", lgTablet: '70%',mdDesktop: '50%', xlDesktop: '100%'}}
                    justify={{base: "center", lgTablet: "space-between"}}
                    flexWrap="wrap" gap={6} mx="auto"
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
                                    {filter}
                                </Box>
                            )
                        })
                    }
                    
                </Flex>

                <Grid 
                    templateColumns={{base: '1fr', md: "1fr 1fr", lgTablet: '1fr', lg:'1fr 1fr'}}
                    gap={{base: 8, md: 2, lgTablet: 6}}  w="100%"
                    mt={{base: '5rem', lgTablet:'7.5rem', lgDesktop:'wrap2Md'}}
                >
                    {
                        resources.map(resource => {
                            return (
                                 <GridItem
                                    key={resource}
                                    border="1px" borderColor="colorDark"
                                    borderRadius="10px" p={{base: 5, md: 10}}
                                >
                                    <Flex justify="space-between" gap={{base: 12, smTablet: 0, md: 8, mdDesktop: 0}}>
                                        <Box
                                            border="1px" px={6} py={2}
                                            borderColor="colorDark" borderRadius="100px"
                                        >
                                            {resource.type}
                                        </Box>
                                        <Link 
                                            href={resource.url}
                                            target="_blank"
                                            rel='noreferrer'
                                        >
                                            <Box 
                                                border="1px" px={4} py={{base: 3, lgDesktop: 2}}
                                                borderColor="colorDark" borderRadius="100%"
                                            >
                                                <ArrowForwardIcon transform="rotate(-45deg)"/>
                                            </Box>
                                        </Link>
                                        
                                    </Flex>
                                    
                                    <Flex  mt={'wrap2Md'} direction="column">
                                        <Text mb={3} fontWeight="500 !important">{resource.author}</Text>
                                        <Heading fontWeight="400 !important">{resource.title}</Heading>
                                    </Flex>

                                </GridItem>
                            )
                        })
                       
                    }
                    
                </Grid>

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