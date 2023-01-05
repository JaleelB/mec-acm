import { LinkBox } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const LinkItem = ({url, path, text}) => {

    const active = path === url
    
    return (
        <LinkBox
            p="0.25rem .5rem" 
            bg={active ? "colorWhite" : "transparent"}
            boxShadow={`active ? "rgb(25 26 25 / 5%) 0px 0px 8px" : 'none'`}
            textTransform="uppercase"
            _hover={{
                background: "colorWhite",
                boxShadow: "rgb(25 26 25 / 5%) 0px 0px 8px",
                borderRadius: "6px",
                transition: 'cubic-bezier(0.4, 0, 1, 1)',
            }}
        >
            <Link href={url}>
                {text}
            </Link>
    
        </LinkBox>
    )
}

export default LinkItem