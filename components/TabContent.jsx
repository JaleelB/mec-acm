import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const TabContent = ({ categories, getSelectedCategories }) => {
  return (
    <Grid 
        templateColumns={{base: '1fr', md: "1fr 1fr", lgTablet: '1fr', lg:'1fr 1fr', xlDesktop: '1fr 1fr 1fr'}}
        gap={{base: 8, md: 2, lgTablet: 6}}  w="100%"
        mt={{base: '5rem', lgTablet:'7.5rem', lgDesktop:'wrap2Md'}}
    >
        {
            categories.map((category, index) => {
                return (
                        <GridItem
                        key={category.id || index}
                        border="1px" borderColor="colorDark"
                        borderRadius="10px" p={{base: 5, md: 10}}
                    >
                        <Flex justify="space-between" gap={{base: 12, smTablet: 0, md: 8, mdDesktop: 0}}>
                            <Box
                                border="1px" px={6} py={2}
                                borderColor="colorDark" borderRadius="100px"
                            >
                                {category.attributes.Type || "Programming"}
                            </Box>
                            <Link    
                                href={category.attributes.Url || '/resources'}
                                target="_blank"
                                rel='noreferrer'
                            >
                                <Box 
                                    border="1px" px={4} py={{base: 3, lgDesktop: 2}}
                                    borderColor="colorDark" borderRadius="100%"
                                >
                                    <ArrowForwardIcon transform="rotate(-45deg)"/>
                                </Box>
                            </Link>
                            
                        </Flex>
                        
                        <Flex  mt={{base: '5rem', md:'7.5rem', lgDesktop:'wrap2Md'}} direction="column">
                            <Text mb={3} fontWeight="500 !important">{category.attributes.Author || ""}</Text>
                            <Heading fontWeight="400 !important">{category.attributes.Title || "Coming Soon: Resource on ai, web dev, design etc"}</Heading>
                        </Flex>

                    </GridItem>
                )
            })
            
        }
        
    </Grid>
  )
}

export default TabContent