import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion';
import React from 'react'

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const child = {
    visible: {
        opacity: 1,
        y: 0,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 30,
        },
    },
    hidden: {
        opacity: 0,
        y: 20,
        clipPath: 'polygon(0 0,100% 0,100% 0,0 50%)',
        transition: {
            type: "spring",
            damping: 22,
            stiffness: 50,
        },
    },
};

const HeroAnimationWrapper = ({children}) => {
  return (
    <ChakraBox
        variants={child} 
        initial="hidden"
        animate="visible"
    >
        {children}
    </ChakraBox>
  )
}

export default HeroAnimationWrapper