import { Grid } from '@chakra-ui/react'
import React from 'react'
import CardLink from './CardLink'

const CardLinksGrid = ({text1, text2, url1, url2, image1, image2}) => {
  return (
    <Grid
        gap={{base: 8, md: 0}} mx="auto" 
        w={{base:'95%', sm:'90%', lg:'100%'}}
        mt={{base: '5rem', lgTablet:'7.5rem', lgDesktop:'wrap2Md'}}
        templateAreas={"card1 card2"}
        templateColumns={{base: '1fr', md: "1fr 1fr"}}
    >
        <CardLink 
            rotateDirection="left" text={text1}
            zindex url={url1} image={image1} 
            positionInGrid={1} area="card1"
        />
        <CardLink 
            rotateDirection="right" text={text2}
            url={url2} image={image2}
            positionInGrid={2} area="card2"
        />
    </Grid>
  )
}

export default CardLinksGrid