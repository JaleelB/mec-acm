import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Flex, GridItem, Heading , keyframes} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const animation = keyframes`
    from{
        transform: translateX(0%); 	
    }

    to{
        transform: translateX(-100%); 	
    }
`

const scrollingAnimation = `${animation} linear infinite 5s`

const CardLink = ({image, text, rotateDirection, zindex, url, area}) => {
  return (
      <Link href={`/${url}`}>
        <GridItem
            role="group"
            zIndex={ zindex ? 1 : 0 }
            transform={{ base: rotateDirection === 'right' ? "rotate(10deg)" : "rotate(-10deg)"}}
            pos="relative" overflow="hidden"
            gridArea={area} placeContent="center"
        >
            <Flex justify="center" align="center">
                <Image
                    style={{
                        inlineSize: '100%', height: '100%', 
                        zIndex: '-1', aspectRatio:'1/1'
                    }}
                    // width={100}
                    // height={100}
                    alt="img"
                    src={image}
                />

                <Flex
                    color="textLight" align="center"
                    textTransform="uppercase" textAlign="center"
                    zIndex={1} pos="absolute"
                    _groupHover={{
                        background: 'colorBlue',
                    }}
                >
                    <Flex
                        overflow="hidden" wrap="nowrap"
                        width={{base:'300vw', lg:"100vw"}} pos="relative"
                    >
                        {   
                            [1,2,3].map(cardCount => {
                                return (
                                    <Box 
                                        key={cardCount}  w="100%" 
                                        _groupHover={{
                                            animation: scrollingAnimation,
                                        }}
                                        gap={1}
                                    >
                                        <Flex 
                                            w="100%" justify="center" 
                                            align="center" gap={2}
                                        >
                                            <Heading 
                                                fontWeight="500 !important" 
                                                fontSize={{base: '8vw', sm:'7vw', md:'5vw', lgTablet:'3.5vw', smDesktop:"min(2.6vw ,74px)"}}
                                                textAlign="center" 
                                                px="1.25rem" py=".1em"
                                            >
                                                {text}
                                            </Heading>
                                            <ArrowForwardIcon
                                                display="none"
                                                fontSize={{base: '10vw', md:'5vw', lgTablet:'3.5vw', smDesktop:"min(2.6vw ,74px)"}}
                                                _groupHover={{
                                                    display: 'block'
                                                }}
                                            />
                                        </Flex>
                                    
                                    </Box>
                                )
                            })
                        }

                        
                    </Flex>
                    
                </Flex>
            </Flex>
        </GridItem>
    </Link>
  )
}

export default CardLink