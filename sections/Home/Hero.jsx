import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import banner from '../../assets/h-banner.jpg'
import ResponsiveSection from '../../components/ResponsiveSection'
import SecondaryButton from '../../components/SecondaryButton'


const Hero = () => {
  return (
    <Box>
        <ResponsiveSection>
            <Box
                pt={{base: 'calc(15vw + 120px)', sm: 'calc(10vw + 100px)',  md: 'calc(9vw + 100px)'}}
                pb={{base: 'calc(5vw + 25px)', md: 'calc(4vw + 50px)', lgDesktop:'calc(3vw + 10px)'}}
                textAlign="center"
            >
                <Heading as="h1"
                    fontSize={{base: "36px", sm: "54px", md:"75px", lg:"96px", xlDesktop: '121px'}}
                    pb={{base: 8, sm: 10}} lineHeight={{base: "100%", md: "107%"}}
                >
                    Expand your knowledge and skills with us
                </Heading>

                <Text maxW="732px" mx="auto" pb={{base: 8, sm: 16, xlDesktop:"32"}}>
                    Dive into the world of computer science and discover endless possibilities for innovation and 
                    problem-solving. Join our community and explore the world of computer science with us.
                </Text>

                {/* <Box 
                    mx="auto" w="max-content"
                >
                    <SecondaryButton path="join" text="Join the Club"/>
                </Box> */}
            </Box>
            

        </ResponsiveSection>

        <Box
            as="figure"
            mx="auto" w="100%"
            px={{base: 0, lgDesktop: "wrapLg"}}
            border="1px" borderColor="green"
            // 
        >
            <Image
                src={banner}
                alt="hero banner"
                style={{
                    inlineSize: '100%', objectFit: 'cover',
                    height:'100%', aspectRatio:'3/2'
                }}
            />
        </Box>
    </Box>
  )
}

export default Hero