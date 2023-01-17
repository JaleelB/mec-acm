import { Grid, GridItem, Flex, Box, Text, AspectRatio } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { ResponsiveSection, SectionHeader, Subtitle } from '../../components'
import banner from '../../assets/h-banner.jpg'

const ElectiveBody = () => {

    const studentBody = [
        {
            name: 'Name', position: 'Position',
            description: 'description'
        },
        {
            name: 'Name', position: 'Position',
            description: 'description'
        },
        {
            name: 'Name', position: 'Position',
            description: 'description', image: ''
        },
        {
            name: 'Name', position: 'Position',
            description: 'description', image: ''
        }
    ]

    return (
        <ResponsiveSection>
            <SectionHeader>elective body</SectionHeader>
            <Subtitle>Meet the student officers</Subtitle>
            <Grid 
                templateColumns={{base: '1fr', lgTablet: '1fr 1fr'}}
                gap={{base: '90px', lgTablet: '3vw', xlDesktop: '1.2vw'}}
                mt={{base: '2rem', md: '4rem', lgDesktop: "7rem"}}
            >
                {
                    studentBody.map(student => {
                        return (
                            <GridItem key={student.position}>
                                <Flex direction={{base: 'column', sm: "row"}} gap="2rem">
                                    <AspectRatio    
                                        h={{base: "346px", lgTablet: 'clamp(230px, 17vw, 550px)'}}
                                        w={{base: '100%', md: '50%', lgDesktop: '40%'}}
                                        ratio={2/4}
                                    >
                                        <Image
                                            src={banner}
                                            alt="student image"
                                            style={{
                                                inlineSize: '100%', objectFit: 'cover',
                                                height: '100%'
                                            }}
                                        />
                                    </AspectRatio>
                                    <Box alignSelf="end" w={{base: '100%', md: '40%'}}>
                                        <Text 
                                            textTransform="capitalize"
                                            fontSize="clamp(1rem, 1vw, 27px)"
                                        >
                                            {student.position}
                                        </Text>
                                        <Text as="h4"
                                            textTransform="uppercase" mt="1"
                                            fontSize={{base: '25px', md: '30px', lgTablet: "27px", lgDesktop: "min(2vw, 44px)"}}
                                        >
                                            {student.name}
                                        </Text>
                                    </Box>
                                </Flex>
                                <Text mt="2rem">{student.description}</Text>
                            </GridItem>
                        )
                    })
                }
            </Grid>
        </ResponsiveSection>
    )
}

export default ElectiveBody