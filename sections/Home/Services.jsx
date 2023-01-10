import { Stack, Box } from '@chakra-ui/react'
import React from 'react'
import { ResponsiveSection, SectionHeader } from '../../components'


const Services = () => {

    const services = ['Workshops', 'Coding Challenges', 'Community Projects', 'Coding Competitions']

    return (
        <ResponsiveSection>
            <SectionHeader>things we do here :</SectionHeader>
            <Stack 
                as="ul" listStyleType="none" p={0}
            >
                {
                    services.map((service)=>{
                        
                        return (
                            <Box
                                as="li"
                                key={service}
                                fontWeight="300"
                                fontSize="clamp(36px, 6.35vw, 160px)"
                                lineHeight="100%"
                            >
                                {service}
                            </Box>
                        )
                    })
                }
            </Stack>
        </ResponsiveSection>
            
    )
}

export default Services