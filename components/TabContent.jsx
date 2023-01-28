import { Grid } from '@chakra-ui/react'
import React from 'react'

const TabContent = ({ children }) => {

    return (
        
        <Grid 
            templateColumns={{base: '1fr', md: "1fr 1fr", lgTablet: '1fr', lg:'1fr 1fr', xlDesktop: '1fr 1fr 1fr'}}
            autoRows="1fr"
            gap={{base: 8, md: 2, lgTablet: 6}}  w="100%"
            mt={{base: '5rem', lgTablet:'7.5rem', lgDesktop:'wrap2Md'}}
        > 
            {children}
        </Grid>
               
    )
}

export default TabContent