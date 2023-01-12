import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import banner from '../../assets/h-banner.jpg'

const Banner = () => {
  return (
    <Box 
        as="section"
        pl={{base: 0, lgTablet:'wrap2Md', lgDesktop:'wrap2Lg', xlDesktop: 'wrap2XXLg'}}
        py={{base: '55px', smTablet: '115px', lgTablet: '16.5vw', lgDesktop: '15vw'}}
    >
      <Image
            src={banner}
            alt="hero banner"
            style={{
                inlineSize: '100%', objectFit: 'cover',
                height:'clamp(230px, 45vw, 900px)'
            }}
        />
    </Box>
  )
}

export default Banner