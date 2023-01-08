import { Flex } from '@chakra-ui/react'
import React from 'react'
import { BodyParagraph, ResponsiveSection, RoundButton, SectionHeader } from '../../components'
import Subtitle from '../../components/Subtitle'

const About = () => {
  return (
    <ResponsiveSection>
        <SectionHeader text='about'/>
        <Subtitle>
            We are more than just a coding club. A supportive 
            and engaging community for students to learn and grow
        </Subtitle>
        <Flex 
            direction={{base:"column-reverse", lgTablet:"row"}}
            justify="space-between" mt={{base: '5rem', lgTablet:'7.5rem', lgDesktop:'wrap2Md'}}
        >
            <Flex
                width={{lg:"40%", mdDesktop:'50%'}} justify={{mdDesktop:"center"}}
                pl={{mdDesktop: 'calc(wrapLg * 2)', lgDesktop:'calc(wrapXLg * 2)', xxlDesktop:'calc(wrapLg * 2)'}}
                mt={{base: '3.75rem', lgTablet:'0'}}
            >
                <RoundButton path="about" text="about us"/>
            </Flex>
            
            <BodyParagraph>
                The MEC ACM is a group of students from all majors who are interested in learning 
                about computer science, programming and computer hardware. Here, everyone can learn 
                new skills, make friends, and share their love of Computer Science. We are not just 
                about learning to code — we are about learning how to think, problem-solve, and collaborate. 
                You will find yourself surrounded by people who will push you past your comfort zone and help 
                you grow into the person you want to be — and that is something worth getting excited about!
            </BodyParagraph>
        </Flex>
        
    </ResponsiveSection>
  )
}

export default About