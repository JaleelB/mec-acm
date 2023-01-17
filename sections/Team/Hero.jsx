import { Box } from '@chakra-ui/react'
import React from 'react'
import { BodyParagraph, HeroAnimationWrapper, ResponsiveSection, SectionHeader, Title } from '../../components'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <ResponsiveSection>
        <Box 
            className='ceiling-space'
            display={{base: 'block', lg: 'none'}}
            pt={{base: '20vw', lgTablet: '5vw', mdDesktop: '2vw'}}
        />

        <HeroAnimationWrapper>
            <Box maxW="1300px">
                <SectionHeader>meet the team</SectionHeader>
                <Title>
                    We’re a rare blend of unique characters from all over the world, working together as one.
                </Title>
            </Box>
            
        </HeroAnimationWrapper>

        <motion.div
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "easeInOut",
                duration: .9,
                delay: 1.2,
            }}
        >
            <Box my={{base: '2rem', lgTablet: '3.5rem', mdDesktop: '4.5rem', xlDesktop: '6rem'}}>
                <BodyParagraph>
                    You name it; we’ve got it: the introverts, extroverts, creators, dreamers, fixers and 
                    natural-born visionaries. Our executive body is comprised of individuals who are passionate 
                    about computer science and bringing our club members together to collaborate, learn, and grow. 
                    From organizing events and workshops to representing the club in meetings and competitions, our 
                    team is dedicated to fostering a positive and inclusive community for all of our members.
                </BodyParagraph>
            </Box>
        </motion.div>
    </ResponsiveSection>
  )
}

export default Hero