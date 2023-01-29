import { Box } from '@chakra-ui/react'
import React from 'react'
import { ResponsiveSection, SectionHeader, Title } from '../components'
import { Layout } from '../layout'

const Events = () => {
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
        </ResponsiveSection>
    </Layout>
  )
}

export default Events