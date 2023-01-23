import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
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
                
            </ResponsiveSection>
        </Layout>
    )
}

export default Resources