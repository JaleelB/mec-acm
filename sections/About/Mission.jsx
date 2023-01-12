import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { BodyParagraph, ResponsiveSection, SectionHeader, Subtitle } from '../../components'

const Mission = () => {
  return (
    <ResponsiveSection>
      
         <SectionHeader>our mission</SectionHeader>
  
        <Box maxW="1300px">
            <Heading as="h3" 
                ml={{lgTablet: "auto" }}
                fontSize={{base: "29px", sm: "36px", md:"50px", lg:"65px", xlDesktop: '80px'}}
                lineHeight={{base: "100%", md: "107%"}}
                textIndent={{lgTablet:"7.5rem", mdDesktop: '11.2rem'}}
            >
                Our mission is to empower our members with the confidence and the agency to 
                succeed during their time at MEC as students, as well as beyond graduation.  
            </Heading> 
        </Box>
        <Box  mt={{base: '3rem', lgTablet: '4rem', mdDesktop: '5rem'}}>
            <Text 
                ml={{lgTablet: "auto" }}
                maxW={{base:'600px', lgTablet: '75%', xlDesktop: '50%' }}
            >
                We aim to provide opportunities for students to engage in hands-on projects and events, 
                and to connect with industry professionals and academic experts. Through our club, we hope 
                to inspire and empower our members to become leaders in the field of computer science and make 
                a positive impact in the world through technology.
            </Text>
            
        </Box>
    </ResponsiveSection>
  )
}

export default Mission