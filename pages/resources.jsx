import { Box, Stack } from '@chakra-ui/react'
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
            
        </ResponsiveSection>
    </Layout>
  )
}

export default Resources