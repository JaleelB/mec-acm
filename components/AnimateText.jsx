import React from "react";
import { motion, isValidMotionProp } from "framer-motion";
import { Heading, chakra, shouldForwardProp } from "@chakra-ui/react";
import Title from "./Title";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});


const AnimatedText = ({ children }) => {


  const child = {
    visible: {
      opacity: 1,
      y: 0,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
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

  return (
    <Title>
        <ChakraBox
            textAlign="center"
            variants={child} flexWrap='wrap' 
            fontSize="inherit" 
            initial="hidden"
            animate="visible"
        >
            {children}
        </ChakraBox>
    </Title>
  );
};

export default AnimatedText;