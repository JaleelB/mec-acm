import { Box, Button, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import Image from 'next/image';
import React from 'react'
import { ResponsiveSection, SecondaryButton, SectionHeader, Title } from '../../components';
import { Layout } from '../../layout';
import banner from '../../assets/club-event.jpg'
import Link from 'next/link';
import { convertDateFormat } from '../../utils/date';

//tell next js how many pages there are
export async function getStaticPaths(){
    const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events`)
    const events = await res.data.data;

    const paths = events.map( event => ({
        params: { slug: event.attributes.Slug }
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {

  const { slug } = params;
  
  const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events?filters[slug][$eq]=${slug}`)
  const data = await res.data.data;
  const event = data[0]

  return {
    props: { event }
  }

  
};

const EventPage = ({ event }) => {
  return (
    <Layout>
       <ResponsiveSection>

          <Box
              className='ceiling-space'
              display={{base: 'block', lg: 'none'}}
              pt={{base: '20vw', lgTablet: '5vw', lg: 0}}
          />

        <Box>
          <SectionHeader>event</SectionHeader>
          <Title>{event.attributes.Name}</Title>
        </Box>


        <Box 
          as="figure" w="100%" height="100%"
          my={{base: '2rem', md: "3rem"}}
           pos="relative"
        >
          <Image
            src={banner}
            alt='Event banner'
            style={{ 
              inlineSize: "100%", objectFit: "cover", 
              maxHeight: "1200px", aspectRatio: "2/1"
            }}
          />
        </Box>

        <Flex 
          mb={{base: '2rem', md: "3rem"}} gap="3rem" 
          justify="space-between" direction={{base: "column", md: "row"}}
        >

          <Flex justify={{base: "space-between", md: "normal"}} gap={{base: 0, md: "3rem"}}>
            <Box>
              <Text fontWeight={600}>Date</Text>
              <Text>{convertDateFormat(event.attributes.Date)}</Text>
            </Box>
            <Box>
              <Text fontWeight={600}>Event Type</Text>
              <Text>{event.attributes.Type}</Text>
            </Box>
          </Flex>
            
          <SecondaryButton path={event.attributes.Link || "/events"} text="join the event"/>
            
        </Flex>

        <Box 
            pt={{base: '2rem', md: "3rem"}}
            w={{base: "100%", md: "75%", smDesktop: "50%"}}
        >
          <Text fontWeight={600}>Agenda</Text>
          <Text>{event.attributes.Description}</Text>
        </Box>


      </ResponsiveSection>
    </Layout>
  )
}

export default EventPage