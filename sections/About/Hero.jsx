import { Box } from '@chakra-ui/react'
import React from 'react'
import { BodyParagraph, ResponsiveSection, SectionHeader, Title } from '../../components'
import Subtitle from '../../components/Subtitle'

const Hero = () => {
  return (
    <Box 
        as="section"
        px={{base: 'wrapSm', lgTablet:'wrap2Md', lgDesktop:'wrap2Lg', xlDesktop: 'wrap2XXLg'}}
        py={{base: '115px', lgTablet: '16.5vw', lgDesktop: '12vw'}}
    >
        <SectionHeader>about us</SectionHeader>
        <Box maxW={{mdDesktop: '1300px'}}>
            <Title>
                A thriving community of students who share a 
                passion for technology and problem-solving.
            </Title> 
        </Box>
            <Box mt={{base: '3rem', lgTablet: '4rem', mdDesktop: '5rem'}}>
                <BodyParagraph>
                    The MEC ACM is a place where people can come together to build new skills and make friends. 
                    Whether you're new to programming or just want to brush up on your  skills, this club will 
                    help you learn new things that will make your life easier. We believe in creating a supportive
                    community where everyone can learn from each other and grow their skills—whether it's through 
                    sharing knowledge with other members in our meetings or collaborating on projects we've worked on together.
                </BodyParagraph>
            </Box>
            
       
        
    </Box>
  )
}

export default Hero