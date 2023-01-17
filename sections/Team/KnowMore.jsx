import React from 'react'
import { KnowMoreCTA, ResponsiveSection } from '../../components'
import events from '../../assets/eventw-card.jpg'
import challenges from '../../assets/challenges-card.jpg'
import { Box } from '@chakra-ui/react'

const KnowMore = () => {
  return (
    <Box  
        px={{base: 'wrapSm', lgTablet:'wrap2Md', lgDesktop:'wrap2Lg', xlDesktop: 'wrap2XXLg'}}
        pb={{base: '27px', smTablet: '42px', lgTablet: '8vw', lgDesktop: '6.5vw', xlDesktop: '4vw'}}
    >
        <KnowMoreCTA
            text1="FAQs"
            text2="code of conduct" 
            url1="faqs"
            url2="code-of-conduct"
            image1={events} 
            image2={challenges}
        />
    </Box>
  )
}

export default KnowMore