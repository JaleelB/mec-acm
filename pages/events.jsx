import { Box, Button, Flex, Stack } from '@chakra-ui/react'
import React, {useState} from 'react'
import { ResponsiveSection, SectionHeader, Title } from '../components'
import { Layout } from '../layout'

const FilterButton = ({ children, active, func }) => {
    return (
        <Button
            role="group" onClick={func}
            bg={active ? "colorDark" : "transparent"} 
            color={active ? "textLight" : "colorDark"} 
            textTransform="capitalize" fontWeight="400"
            fontSize={{base: 'md', lgDesktop: '20px', xlDesktop: 'xl'}}
            transition="transform ease-in 300ms"
            justify="center" align="center" border="1px" borderColor="colorDark"
            w="max-content" mx="auto" display="flex"
            py={{base: 7, mdDesktop: 9}} px={{base: 8, tablet:12}}
            mt={{base: '5rem', lgTablet:'7.5rem', lgDesktop:'wrap2Md'}}
            borderRadius="100px"
            _hover={{
                backgroundColor: 'colorBlue',
                color: "textLight",
                borderColor: "colorBlue"
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
                    {children}
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
                    {children}
                </Flex>
            </Flex>
        </Button>
    )
}

const Events = () => {

    const eventsFilters = ['Day', 'Week', 'Month'];
    const [selectedTab, setSelectedTab] = useState(eventsFilters[0]);

    const filterEventByFilter = (eventsFilter) =>  setSelectedTab(eventsFilter);

    return (
        <Layout>
            <ResponsiveSection>
                <Box 
                    className='ceiling-space'
                    display={{base: 'block', lg: 'none'}}
                    pt={{base: '20vw', lgTablet: '5vw', lg: 0}}
                />

                <SectionHeader>Events</SectionHeader>
                <Box maxW="1700px"> 
                    <Title>
                        Find all the latest and upcoming club events
                    </Title>
                </Box>

                <Flex 
                    gap={{base: 3, md:6}} width="max-content" 
                    mb={{base: '3rem', lgTablet:'5.5rem', lgDesktop:'wrapMd'}}
                    mt={{base: '-2rem', lgTablet:'-3rem', lgDesktop:"-4rem"}}
                >
                    {
                        eventsFilters.map(eventsFilter => {
                            return (
                                <FilterButton 
                                    key={eventsFilters}
                                    func={() => filterEventByFilter(eventsFilter)}
                                    active={eventsFilter === selectedTab}
                                >
                                    {eventsFilter}
                                </FilterButton>
                            )
                        })
                    }
                
                </Flex>
            </ResponsiveSection>
        </Layout>
    )
}

export default Events