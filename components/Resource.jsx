import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Resource = ({resource, index}) => {

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
          key={resource.attributes.Type ? resource.attributes.Type : "empty"}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 * (index + 1), delay: .1 * index }}
          style={{height: "100%"}}
      >
        <Box
          border="1px" borderColor="colorDark"
          borderRadius="10px" p={{base: 5, md: 10}}
          height="100%"
        >
          <Flex justify="space-between" gap={{base: 12, smTablet: 0, md: 8, mdDesktop: 0}}>
            <Box
                border="1px" px={6} py={2}
                borderColor="colorDark" borderRadius="100px"
            >
                {resource.attributes.Type || "Programming"}
            </Box>
            <Link   
                href={resource.attributes.Url || '/resources'}
                target="_blank"
                rel='noreferrer'
            >
                <Box 
                    border="1px" px={4} py={{base: 3, lgDesktop: 2}}
                    borderColor="colorDark" borderRadius="100%"
                    transition="all 300ms ease"
                    _hover={{
                      bg: "colorBlue",
                      borderColor: "colorBlue",
                      color: "textLight"
                    }}
                >
                    <ArrowForwardIcon transform="rotate(-45deg)"/>
                </Box>
            </Link>
            
          </Flex>
          
          <Flex  mt={{base: '5rem', md:'7.5rem', lgDesktop:'wrap2Md'}} direction="column">
              <Text mb={3} fontWeight="500 !important">{resource.attributes.Author || ""}</Text>
              <Heading fontWeight="400 !important">{resource.attributes.Title || "Coming Soon: Resource on ai, web dev, design etc"}</Heading>
          </Flex>
        </Box>
      </motion.div>
    </AnimatePresence>

  )
}

export default Resource