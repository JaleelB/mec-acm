import React, { useCallback, useEffect } from 'react';
import { Box, Button, Flex ,Grid,Stack, Text, useDisclosure, useTheme } from '@chakra-ui/react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import useScrollDirection from '../hooks/useScrollDirection';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Dropdown, HoverTransformText, LinkItem, Logo } from '../components';
import { motion } from 'framer-motion';



const Nav = () => {

    const { isOpen, onToggle } = useDisclosure()
    const navLinks = [
        'Team', 'Events', 'Resources', 'FAQs', 'Contact'
    ];
    const scroll = useScrollDirection();
    const router = useRouter();

    useEffect(() => {
        isOpen
          ? (document.body.style.overflow = 'hidden')
          : (document.body.style.overflow = 'auto');
    }, [isOpen]);
    


    const showHeader = useCallback( (node) => {
        if(node){
            if(scroll.y > 150 && scroll.y - scroll.lastY > 0){
                node.style.transform = 'translateY(-115%)';
                node.style.transition='transform 500ms ease';
            }
            else{
                node.style.transform = 'translateY(0%)';
            }
        }
        

    }, [scroll.y, scroll.lastY])  

    console.log(useTheme())

    return (
        <Box 
            as="header" ref={showHeader} 
            width="100vw" zIndex="1000"
            mx="auto" position="fixed"
            fontSize={{base: 'sm', lg: '1.4256410256410258vw', lgDesktop:'bodySm', xlDesktop:'bodyMd', xxlDesktop:'calc(21px, .5vw, bodyLg)'}}                                                                              
        >
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  delay: 1.2,
                }}
            >
                <Flex 
                    height="100%"
                    align="center" justify="space-between"
                    alignSelf="center" mx="auto"
                    py="min(4.906vw,50px)"
                    // px={{base: 'wrapSm', lgTablet:'wrap2Md', lgDesktop:'wrap2Lg', xlDesktop: 'wrap2XXLg'}}
                    px={{base: 'wrapSm', lgTablet:'wrap2Md'}}
                >
                    <Logo/>
                    
                    <Flex 
                        alignItems={"center"} gap={8} 
                        className='nav-right-align' 
                    >
                        <Stack as="nav"
                            direction="row" spacing={8}
                            bg="rgba(227, 229, 227, 0.75)"
                            backdropFilter="auto" backdropBlur="8px" 
                            borderRadius="100px"
                            zIndex="1000"
                            display={{base: 'none', lgDesktop: 'flex'}}
                            py={2} px={8}
                        >

                            <Box
                                onClick={onToggle}
                                fontSize={{ base: '14px', phone:'sm', '106.25em': 'bodyMd', xlDesktop: 'bodyLg' }}
                                cursor="pointer"
                                position="relative"
                                display="inline-block"
                                _hover={{
                                    background: "colorWhite",
                                    boxShadow: "rgb(25 26 25 / 5%) 0px 0px 8px",
                                    borderRadius: "6px",
                                    fontWeight: 500
                                }}
                            >
                                <Flex direction="row" gap='1' p="0.25rem .5rem" align="center">
                                    <Text 
                                        as="div"
                                        textTransform="capitalize"
                                        alignItems="center" justifyContent="center"
                                        fontSize={{ base: 'sm', '1700px': 'bodyMd', xlDesktop: 'bodyLg' }}
                                    >
                                        Club
                                    </Text>

                                    { isOpen ?  <ChevronUpIcon  alignSelf="center" /> : <ChevronDownIcon alignSelf="center"/> }

                                </Flex> 

                                <Dropdown
                                    sublinks={[['About Us', 'about'], ['Code of Conduct', 'code-of-conduct']]}
                                    isOpen={isOpen}
                                />
                            </Box>


                            {
                                navLinks.map((link, index) => {
                                    return (
                                        <LinkItem
                                            key={`${link} ${index}`}
                                            url={`/${link.toLowerCase()}`}
                                            path={router.pathname}
                                            text={link}
                                        />
                                    )
                                })
                            }

                        </Stack>

                        <Link href='/join' className='join-cta'>
                            <Button
                                role="group"
                                py={7} px={8}
                                bg="bgDark"
                                color="textLight"
                                textTransform="capitalize"
                                fontWeight="400"
                                borderRadius="100px"
                                display={{base: 'none', lgDesktop: 'flex'}}
                                fontSize={{ base: 'sm !important', '1700px': 'bodyMd', xlDesktop: 'bodyLg' }}
                                zIndex="120"
                                _hover={{
                                    background: "colorBlue",
                                }}
                            >
                                <Flex 
                                    justify="center" direction="column"
                                    overflow="hidden" height="20px"
                                >
                                    <Text 
                                        as="div" height="100%"
                                        style={{transformStyle: "preserve-3d"}}
                                        transition="transform 300ms ease" 
                                        transform="translateY(50%)"
                                        _groupHover={{      
                                            transform: "translateY(-50%)"                                  
                                        }}
                                    >
                                        Join the club
                                    </Text>
                                    <Text 
                                        as="div" height="100%"
                                        style={{transformStyle: "preserve-3d"}}
                                        transition="transform 300ms ease" 
                                        transform="translateY(50%)"
                                        _groupHover={{
                                            transform:"translateY(-50%)"
                                        }}
                                    >
                                    let us begin
                                    </Text>
                                </Flex>
                            </Button>
                        </Link>


                        <Button
                            onClick={onToggle}
                            py={{base: 6, tablet:7}} px={{base:6, tablet:8}}
                            bg="bgDark"
                            color="textLight"
                            textTransform="uppercase"
                            borderRadius="100px"
                            fontWeight="400"
                            display={{base: 'flex', lgDesktop: 'none'}}
                            fontSize={{ base: 'sm !important', '1700px': 'bodyMd', xlDesktop: 'bodyLg' }}
                            zIndex="1200"
                            _hover={{ background: "bgDark" }}
                        >
                            <HoverTransformText text1={"menu"} text2={"close"} isOpen={isOpen}/>
                        </Button>
                    </Flex>
                </Flex>

                <Flex 
                    as="nav" className='mobile-nav'
                    zIndex="1000" w="100%" height="100vh"
                    display={{base: 'flex', lgDesktop: 'none'}}
                    boxShadow="outline" position="fixed"
                    left="0%" top="0%" bottom="0%"
                    py="100px" px="wrapLg"
                    bg="bgLight"
                    backdropFilter="auto" backdropBlur="8px"
                    fontSize={{base:'51px', sm: '4.5em', md:'5.5em', lg:'5.5em'}}
                    transition="opacity ease-in 300ms"
                    opacity={isOpen ? 1 : 0}
                    align="center" justify="center"
                    overflowY="auto"
                    pointerEvents={isOpen ? 'auto' : 'none'}
                >
                
                    <Grid 
                        templateColumns={{base:"1fr", lg:"1fr 1fr"}}
                        autoRows="max-content" gap={{base:8, sm:12, md:16, lg: 20}}
                    >
                        {
                            ['About Us', 'Code of Conduct', ...navLinks].map((link, index) => {
                                return (
                                    <Box 
                                        key={link}
                                        display="flex" alignItems="center"
                                        fontWeight="500" gap={2}
                                    >   
                                        <Text
                                            as="div"
                                            fontSize={{base:"xs", md: "md", lg:"lg"}} 
                                            transform="rotate(-90deg)"
                                            letterSpacing="2px"
                                        >
                                            0{index + 1}
                                        </Text>
                                        <Link href={`/${link.toLowerCase()}`}> {link !== 'Code of Conduct' ? link : 'Code'} </Link>
                                    </Box>                                    
                                )
                            })
                        }
                    </Grid>
                
                </Flex>
            </motion.div>
        </Box>

    )
}

export default Nav