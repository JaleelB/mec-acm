import { Flex } from '@chakra-ui/react'
import React from 'react'
import { BodyParagraph, ResponsiveSection, RoundButton, SectionHeader } from '../../components'
import Subtitle from '../../components/Subtitle'

const Join = () => {
  return (
    <ResponsiveSection>
        <SectionHeader>join us</SectionHeader>
        <Subtitle>
            We are looking for fresh new faces with big ambitions. Eager to 
            experiment and take on challenges. Ready to change their future.
        </Subtitle>
        <Flex 
            direction={{base:"column-reverse", lgTablet:"row"}}
            justify="space-between" mt={{base: '5rem', lgTablet:'7.5rem', lgDesktop:'wrap2Md'}}
        >
            <Flex
                width={{lg:"40%", mdDesktop:'50%'}} 
                pl={{mdDesktop: 'calc(var(--chakra-space-wrapLg) * 2)', lgDesktop:'calc(var(--chakra-space-wrapXLg) * 2)', xxlDesktop:'calc(var(--chakra-space-wrapLg) * 2)'}}
                mt={{base: '3.75rem', lgTablet:'0'}}
            >
                <RoundButton path="join" text="join us"/>
            </Flex>
            
            <BodyParagraph>
                If this sounds like you, then you should consider joining the computer science club at your school. As a member of the club, 
                you will have the opportunity to work on exciting projects with like-minded individuals who share your passion for technology
                and innovation. So why not take the first step and join the computer science club today? If you are ready to take charge of 
                your development, join us and see where your passion for computer science can take you.
            </BodyParagraph>
        </Flex>
        
    </ResponsiveSection>
  )
}

export default Join