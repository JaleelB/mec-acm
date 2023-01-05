import React from 'react'
import { Fade, Flex } from "@chakra-ui/react"
import LinkItem from "./LinkItem"
import { useRouter } from 'next/router';

const Dropdown = ({sublinks, isOpen}) => {

    const router = useRouter();
    
    return (
        <Fade 
            in={isOpen}
        >
            <Flex
                bg="rgba(253, 255, 253, 0.75)" 
                backdropFilter="auto" backdropBlur="8px"
                borderRadius="6px" p={3}
                pos="absolute" marginTop="30px"
                maxW="433px" minW="200px"
                align="start" direction="column"
                border='2px' borderColor='bgDark'
            >
                {
                    sublinks.map((sublink, index)=>{
                        return (
                            <LinkItem
                                key={index}
                                url={`${sublink[1]}`}
                                path={router.pathname}
                                text={sublink[0]}
                            />
                        )
                    })
                }
            </Flex>
            
        </Fade>
    )
}

export default Dropdown
