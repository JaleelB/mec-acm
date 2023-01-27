import { Box } from '@chakra-ui/react'
import React from 'react'

const Resource = (props) => {
  return (
    <Box as="li" key={props.filter}
        cursor="pointer"
        color={props.filter === props.selectedTab ? "colorBlue" : "inherit"}
        fontWeight={props.filter === props.selectedTab ? "700" : "inherit"}
        onClick={() => props.updateSelectedTags(filter)}
        _hover={{
            color: "colorBlue"
        }}
    >
        
        {props.filter}
        
    </Box>
  )
}

export default Resource