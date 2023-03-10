import { Box, Button, Flex, GridItem } from '@chakra-ui/react'
import axios from 'axios'
import React, {useState} from 'react'
import { HeroAnimationWrapper, ResponsiveSection, SectionHeader, Subtitle, TabContent, Title } from '../components'
import { Layout } from '../layout'
import EventCard from '../components/EventCard'
import { getDay, getMonth, getWeek } from '../utils/date'
import { motion } from "framer-motion"

const FilterButton = ({ children, active, func }) => {
    return (
        <Button
            role="group" onClick={func}
            bg={active ? "colorDark" : "transparent"} 
            color={active ? "textLight" : "colorDark"} 
            textTransform="capitalize" fontWeight="400"
            fontSize={{base: 'md', lgDesktop: '20px', xlDesktop: 'xl'}}
            transition="all ease-in 300ms"
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

const Events = ({ events }) => {

    const eventsFilters = ['Day', 'Week', 'Month'];
    const [selectedTab, setSelectedTab] = useState(eventsFilters[0]);
    const dates = new Map([
        ["Day", getDay()],
        ["Week", getWeek()],
        ["Month", getMonth()]
    ])

    const filterEventByFilter = (eventsFilter) =>  setSelectedTab(eventsFilter);

    // console.log("Today's date: ", convertDateFormat('2023-02-06'))

    const [eventData, setEventData] = useState(() => { return [...events] })

    return (
        <Layout>
            <ResponsiveSection>
                <Box 
                    className='ceiling-space'
                    display={{base: 'block', lg: 'none'}}
                    pt={{base: '20vw', lgTablet: '5vw', lg: 0}}
                />

                
                <HeroAnimationWrapper>
                    <SectionHeader>Events</SectionHeader>
                    <Box maxW="1700px"> 
                        <Title>
                            Find all the latest and upcoming club events
                        </Title>
                    </Box>
                </HeroAnimationWrapper>

                <motion.div
                    initial={{ opacity: 0, y: 90 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "easeInOut",
                        duration: .9,
                        delay: 1.2,
                    }}
                >
                    <Flex 
                        gap={{base: 3, md:6}} width="max-content" 
                        mb={{base: '3rem', lgTablet:'5.5rem', xlDesktop:'wrapMd'}}
                        mt={{base: '-2rem', lgTablet:'-3rem', lgDesktop:"-4rem"}}
                    >
                        {
                            eventsFilters.map((eventsFilter, index) => {
                                return (
                                    <FilterButton 
                                        key={index}
                                        func={() => filterEventByFilter(eventsFilter)}
                                        active={eventsFilter === selectedTab}
                                    >
                                        {eventsFilter}
                                    </FilterButton>
                                )
                            })
                        }
                    
                    </Flex>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 90 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "easeInOut",
                        duration: .9,
                        delay: 1.7,
                    }}
                >
                    <Box mt={{base: '5rem', lgTablet:'7.5rem', lgDesktop:'7rem'}}>
                        <SectionHeader>
                            {
                                selectedTab === "Day" ? 'Today':
                                selectedTab === "Week" ? 'This Week':
                                'This Month'
                            }
                        </SectionHeader>
                        <Subtitle mt={{base: '-1rem'}}>{dates.get(selectedTab)}</Subtitle>
                    </Box>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 90 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "easeInOut",
                        duration: .9,
                        delay: 2.1,
                    }}
                >
                    <TabContent>
                        {
                            eventData.map((event, index) => {
                                return (
                                    <GridItem
                                        key={event?.id || index}
                                    >
                                        <EventCard event={event} index={index}/>
                    
                                    </GridItem>
                                )
                            })
                            
                        }   
                    </TabContent>
                </motion.div>

            </ResponsiveSection>
        </Layout>
    )
}

export default Events


// get data for each individual page
export async function getStaticProps() {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events`)
    const eventsList = await res.data.data;

    return {
        props: {
            events: eventsList
        },
        
    };
};