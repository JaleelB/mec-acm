import { Box, Flex, GridItem } from '@chakra-ui/react'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Resource, ResponsiveSection, SectionHeader, TabContent, Title, HeroAnimationWrapper } from '../components'
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
    
    const tabs = [
        'All', 'Courses', 'Youtube Channels', 
        'Interview Prep', 'Web Development', 'Web Design'
    ];
    const [selectedTab, setSelectedTab] = useState(tabs[0])
    const [resourceData, setResourceData] = useState(() => { return [...resources] }) //sets state only once upon initial render

    const filterResources = (filter) =>  setResourceData(filter === "All" ? [...resources] : resources.filter( data => data.attributes.Type === filter));

    return (
        <Layout>
            <HeroAnimationWrapper>
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

                    <Box>

                        <Flex as="ul"
                            listStyleType="none" p={0} w={{base: "100%", md: "60%", lgTablet: '70%',mdDesktop: '50%', lgDesktop: '100%'}}
                            justify={{base: "center"}} variant="unstyled"
                            flexWrap="wrap" gap={{base: 6, lgDesktop: 10, xlDesktop: 16}} mx="auto"
                            mt={{base: '5rem', lgTablet:'7.5rem', lgDesktop:'wrap2Md'}}
                            transition="all 300ms ease"
                        >
                            {
                                tabs.map(filter => {
                                    return (
                                        <Box key={filter}
                                            cursor="pointer"
                                            color={filter === selectedTab ? "colorBlue" : "inherit"}
                                            fontWeight={filter === selectedTab ? "500" : "inherit"}
                                            borderBottom={filter === selectedTab && "1px"} borderBottomColor={filter === selectedTab  && "colorBlue"}
                                            onClick={() => {
                                                setSelectedTab(filter)
                                                filterResources(filter)
                                            }}
                                            transition="all 300ms ease"
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

                        <TabContent >
                            {
                                resourceData.map((resource, index) => {
                                    return (
                                        <GridItem
                                            key={resource.id || index}
                                        >
                                            <Resource resource={resource} index={index}/>
                        
                                        </GridItem>
                                    )
                                })
                                
                            }
                            
                        </TabContent>
                    </Box>

                    <Box 
                        className='floor-space'
                        display={{base: 'block', lg: 'none'}}
                        pt={{base: '20vw', lgTablet: '5vw', lg: 0}}
                    />
                    
                </ResponsiveSection>
            </HeroAnimationWrapper>
        </Layout>
    )
}

export default Resources