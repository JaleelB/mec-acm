import { Grid } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'


const TabContent = ({ children, selectedTab }) => {
  return (
    <AnimatePresence exitBeforeEnter>
        <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <Grid 
                templateColumns={{base: '1fr', md: "1fr 1fr", lgTablet: '1fr', lg:'1fr 1fr', xlDesktop: '1fr 1fr 1fr'}}
                gap={{base: 8, md: 2, lgTablet: 6}}  w="100%"
                mt={{base: '5rem', lgTablet:'7.5rem', lgDesktop:'wrap2Md'}}
            >
            {children}
            </Grid>
        </motion.div>
    </AnimatePresence>
  )
}

export default TabContent