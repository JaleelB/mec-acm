import { Flex, Grid } from '@chakra-ui/react'
import React from 'react'
import { BodyParagraph, CardLink, CardLinksGrid, ResponsiveSection, RoundButton, SectionHeader } from '../../components'
import Subtitle from '../../components/Subtitle'
import events from '../../assets/eventw-card.jpg'
import challenges from '../../assets/challenges-card.jpg'

const Passion = () => {
  return (
    <ResponsiveSection>
        <SectionHeader>passion and creativity</SectionHeader>
        <Subtitle>
            Here at the Medgar Evers ACM club we’re passionate about computer science,
            and concerned with the wider context. 
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
                <RoundButton path="about" text="read more"/>
            </Flex>
            
            <BodyParagraph>
                We believe that everybody has the potential to change the world, that’s why we’re here: to focus
                on your goals and improve your skills to the next level. The MEC ACM offers workshops, challenges, and competitions on topics like web development, web design, and data science that can help you expand your comfort zone when it comes to coding. 
            </BodyParagraph>
        </Flex>

        <CardLinksGrid
            text1="events"
            text2="challenges" 
            url1="events"
            url2="challenges"
            image1={events} 
            image2={challenges}
        />
    </ResponsiveSection>
  )
}

export default Passion