import { Box } from '@chakra-ui/react'
import React from 'react'
import CardLinksGrid from './CardLinksGrid'
import Subtitle from './Subtitle'

const KnowMoreCTA = (props) => {
  return (
    <Box mt={{base: '5rem', lgTablet:'7.5rem', lgDesktop:'wrap2Md'}}>
        <Subtitle>Want to know more <br/>about us?</Subtitle>
        <CardLinksGrid
            text1={props.text1}
            text2={props.text2}
            url1={props.url1}
            url2={props.url2}
            image1={props.image1}
            image2={props.image2}
        />
    </Box>
  )
}

export default KnowMoreCTA