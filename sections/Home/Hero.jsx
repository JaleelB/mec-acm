import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import banner from '../../assets/h-banner.jpg'
import { AnimatedText } from '../../components'
import { motion } from "framer-motion"


const Hero = () => {
  return (
 
    <Box as="section">
         
            <Flex
                pt={{base: '53px', smTablet: '60px', md: '7.729vw', lgTablet:'6.238vw', mdDesktop: '5.9vw'}}
                h={{base: '70vh', smTablet:"80vh"}}
                minHeight={{base: "38vh", smTablet:'350px'}}
                px={{base: 'wrapSm', lgTablet:'wrap2Md', lgDesktop:'wrap2Lg', xlDesktop: 'wrap2XXLg'}}
                align="center" 
            >
                <Box
                    mx="auto"
                    w={{smTablet: '500px', lgTablet: '100%'}}
                >
                    <AnimatedText>Expand your knowledge and skills in computer science with us</AnimatedText>
                </Box>
            </Flex>
        

        <Box
            as="figure"
            mx="auto" w="100%"
            px={{base: 0, lgDesktop: "wrapLg"}}
            height={{base: '450px', sm:'450px',tablet:'52.22vw',largeTablet:'47.5vw', mdDesktop: '45vw'}}
        >
            <motion.div
                initial={{ opacity: 0, y: 90 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  duration: .9,
                  delay: 1.2,
                }}
            >
                <Image
                    src={banner}
                    alt="hero banner"
                    style={{
                        inlineSize: '100%', objectFit: 'cover',
                        height:'clamp(350px, 53vw, 1600px)',  aspectRatio:'4/2' 
                    }}
                />
            </motion.div>
        </Box>
       
    </Box>
  )
}

export default Hero