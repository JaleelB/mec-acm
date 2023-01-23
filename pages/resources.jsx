import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { ResponsiveSection, SectionHeader, Title } from '../components'
import { Layout } from '../layout'

const Resources = () => {
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
                listStyleType="none" p={0}
                w='100%' justify="space-between"
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
            
        </ResponsiveSection>
    </Layout>
  )
}

export default Resources