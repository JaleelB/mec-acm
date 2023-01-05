import React, { useCallback } from 'react';
import { Box, Button, Flex ,Stack, Text, useDisclosure, useTheme } from '@chakra-ui/react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import useScrollDirection from '../hooks/useScrollDirection';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Dropdown, LinkItem } from '../components';



const Nav = () => {

    const { isOpen, onToggle } = useDisclosure()
    const navLinks = [
        'Team', 'Events', 'Resources', 'FAQs', 'Contact'
    ];
    const scroll = useScrollDirection();
    const router = useRouter();
    


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

    // console.log(useTheme())

    return (
        <Box 
            as="header" ref={showHeader} 
            display="flex" alignItems={"center"}
            justifyContent="center" height="100" 
            width="100vw"  
            mx="auto" position="fixed"
        >
            <Flex 
                as="nav" 
                width="90%" maxWidth="2000px" height="100%"
                align="center" justify="space-between"
                alignSelf="center" 
            >

                <Link href='/' className='logo'>
                    <Button
                        role="group"
                        py={7} px={6}
                        bg="rgba(227, 229, 227, 0.75)"
                        backdropFilter="auto" backdropBlur="8px"
                        display="flex" alignContent="center" justifyContent="center"
                        color="textDark"
                        borderRadius="100px"
                        textTransform="uppercase"
                        fontSize={{ base: 'sm', '1700px': 'bodyMd', xlDesktop: 'bodyLg' }}
                        _hover={{
                            background: "colorBlue",
                            color: "textLight"
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
                                mec.acm
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
                                cs club
                            </Text>
                        </Flex>
                    </Button>
                </Link>

                
                <Flex alignItems={"center"} gap={8}>
                    <Stack 
                        direction="row" spacing={8}
                        bg="rgba(227, 229, 227, 0.75)"
                        backdropFilter="auto" backdropBlur="8px" 
                        borderRadius="100px"
                        display={{base: 'none', lgDesktop: 'flex'}}
                        py={3} px={8}
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
                                transition: 'cubic-bezier(0.4, 0, 1, 1)',
                                fontWeight: 500
                            }}
                        >
                            <Flex direction="row" gap='1' p="0.25rem .5rem" align="center">
                                <Text 
                                    textTransform="uppercase"
                                    alignItems="center" justifyContent="center"
                                    fontSize={{ base: 'sm', '1700px': 'bodyMd', xlDesktop: 'bodyLg' }}
                                >
                                    Club
                                </Text>

                                { isOpen ?  <ChevronUpIcon  alignSelf="center" /> : <ChevronDownIcon nalignSelf="center"/> }

                            </Flex> 

                            <Dropdown
                                sublinks={[['About Us', 'about-us'], ['Code of Conduct', 'code-of-conduct']]}
                                isOpen={isOpen}
                            />
                        </Box>


                        {
                            navLinks.map((link, index) => {
                                return (
                                    <LinkItem
                                        key={index}
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
                            py={7} px={8}
                            bg="bgDark"
                            color="textLight"
                            textTransform="uppercase"
                            borderRadius="100px"
                            display={{base: 'none', lgDesktop: 'flex'}}
                            fontSize={{ base: 'sm', '1700px': 'bodyMd', xlDesktop: 'bodyLg' }}
                            _hover={{
                                background: "colorBlue"
                            }}
                        >
                            Join the club
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Nav