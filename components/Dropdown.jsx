import React from 'react'
import { Fade, Flex } from "@chakra-ui/react"
import LinkItem from "./LinkItem"
import { useRouter } from 'next/navigation';

const Dropdown = ({sublinks, isOpen}) => {

    const router = useRouter();
    
    return (
        <Fade 
            in={isOpen}
        >
            <Flex
                bg="rgba(227, 229, 227, 0.75)"
                backdropFilter="auto" backdropBlur="8px" 
                borderRadius="6px" p={3}
                pos="absolute" marginTop="30px"
                maxW="250px" width="15vw"
                align="start" direction="column"
                border='1px' borderColor='bgDark'
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
