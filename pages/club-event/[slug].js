import { Box } from '@chakra-ui/react';
import axios from 'axios';
import Image from 'next/image';
import React from 'react'
import { ResponsiveSection, SectionHeader, Title } from '../../components';
import { Layout } from '../../layout';
import banner from '../../assets/club-event.jpg'

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
          mt={{base: '2rem', md: "3rem"}}
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


      </ResponsiveSection>
    </Layout>
  )
}

export default EventPage