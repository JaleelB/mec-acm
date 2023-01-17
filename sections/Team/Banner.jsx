import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import banner from '../../assets/h-banner.jpg'

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 90 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
          type: "easeInOut",
          duration: .9,
          delay: 2.2,
      }}
    >
      <Box
          as="section"
          px={{base: 0, lgTablet:'wrap2Md', lgDesktop:'wrap2Lg', xlDesktop: 'wrap2XXLg'}}
          // pb={{base: '27px', smTablet: '42px', lgTablet: '8vw', lgDesktop: '6.5vw', xlDesktop: '4vw'}}
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
    </motion.div>
  )
}

export default Banner