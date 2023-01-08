import React from 'react'
import { AspectRatio, Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import banner from '../../assets/h-banner.jpg'
import SecondaryButton from '../../components/SecondaryButton'
import { Title } from '../../components'


const Hero = () => {
  return (
    <Box as="section">
            <Box
                pt={{base: 'calc(15vw + 120px)', sm: 'calc(10vw + 100px)',  md: 'calc(9vw + 100px)'}}
                pb={{base: 'calc(5vw + 25px)', md: 'calc(4vw + 50px)', lgDesktop:'calc(3vw + 10px)'}}
                px={{base: 'wrapSm', lgTablet:'wrap2Md', lgDesktop:'wrap2Lg', xlDesktop: 'wrap2XXLg'}}
                textAlign="center"
            >
                <Title>Expand your knowledge and skills with us</Title>

                <Text maxW="732px" mx="auto" py={{base: 8, sm: 16, xlDesktop:"32"}}>
                    Dive into the world of computer science and discover endless possibilities for innovation and 
                    problem-solving. Join our community and explore the world of computer science with us.
                </Text>

                {/* <Box 
                    mx="auto" w="max-content"
                >
                    <SecondaryButton path="join" text="Join the Club"/>
                </Box> */}
            </Box>
        

        <Box
            as="figure"
            mx="auto" w="100%"
            px={{base: 0, lgDesktop: "wrapLg"}}
            height={{base: '450px', sm:'450px',tablet:'52.22vw',largeTablet:'47.5vw', mdDesktop: '45vw'}}
        >
            <Image
                src={banner}
                alt="hero banner"
                style={{
                    inlineSize: '100%', objectFit: 'cover',
                    height:'clamp(350px, 53vw, 1600px)',  aspectRatio:'4/2' 
                }}
            />
        </Box>
    </Box>
  )
}

export default Hero