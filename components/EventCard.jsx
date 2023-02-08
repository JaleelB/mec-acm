import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { convertDateFormat } from '../utils/date'

const EventCard = ({event, index}) => {

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
          key={event.attributes.Type ? event.attributes.Type : "empty"}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 * (index + 1), delay: .1 * index }}
          style={{height: "100%"}}
      >
        <Grid
          border="1px" borderColor="colorDark"
          borderRadius="10px" p={{base: 5, md: 10}}
          height="100%" 
        >
            <Flex justify="space-between" gap={{base: 12, smTablet: 0, md: 8, mdDesktop: 0}}>
                
                <Text>{convertDateFormat(new Date(event?.attributes.Date).toUTCString().split(' ').slice(0, 4).join(' '))}</Text>

                <Box
                    border="1px" px={6} py={2}
                    borderColor="colorDark" borderRadius="100px"
                    h="max-content"
                >
                    {event.attributes.Type || "Programming"}
                </Box>
                
            </Flex>
            
            <Flex  mt={{base: '5rem', md:'7.5rem', lgDesktop:'wrap2Md'}} direction="column">
                <Heading mb={3} fontWeight="500 !important">{event.attributes.Name || ""}</Heading>
                <Text fontWeight="400 !important">{event.attributes.Description || "Coming Soon: event on ai, web dev, design etc"}</Text>
            </Flex>

            <Grid w="max-content" alignSelf="flex-start" mt={{base: '1rem', md:"2rem", lgDesktop:"3rem", xlDesktop: "4rem"}}>        
                <Link href={`/club-event/${event?.attributes.Slug}`}>
                    <Box 
                        border="1px" px={4} py={{base: 3, lgDesktop: 2}}
                        borderColor="colorDark" borderRadius="100%"
                        transition="all 300ms ease"
                        _hover={{
                            bg: "colorBlue",
                            borderColor: "colorBlue",
                            color: "textLight"
                            }}
                    >
                        <ArrowForwardIcon transform="rotate(-45deg)"/>
                    </Box>
                </Link>
            </Grid>
            
        </Grid>
      </motion.div>
    </AnimatePresence>
  )
}

export default EventCard