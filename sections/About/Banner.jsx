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
          pl={{base: 0, lgTablet:'wrap2Md', lgDesktop:'wrap2Lg', xlDesktop: 'wrap2XXLg'}}
      >
        
        <Image
              src={banner}
              alt="hero banner"
              style={{
                  inlineSize: '100%', objectFit: 'cover',
                  height:'clamp(230px, 45vw, 1300px)'
              }}
          />
      </Box>
    </motion.div>
  )
}

export default Banner
