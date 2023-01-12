import { Box } from '@chakra-ui/react'
import React from 'react'
import { ResponsiveSection, SectionHeader } from '../../components'
import Subtitle from '../../components/Subtitle'

const Hero = () => {
  return (
    // <Box
    //     pt={{base: '53px', smTablet: '60px', md: '7.729vw', lgTablet:'6.238vw', mdDesktop: '5.9vw'}}
    //     h={{base: '70vh', smTablet:"80vh"}}
    //     minHeight={{base: "38vh", smTablet:'350px'}}
    //     px={{base: 'wrapSm', lgTablet:'wrap2Md', lgDesktop:'wrap2Lg', xlDesktop: 'wrap2XXLg'}}
    // >
    //     gggg
    // </Box>

    <ResponsiveSection>
        <SectionHeader>join us</SectionHeader>
        <Subtitle>
            We are looking for fresh new faces with big ambitions. Eager to 
            experiment and take on challenges. Ready to change their future.
        </Subtitle>
    </ResponsiveSection>
  )
}

export default Hero