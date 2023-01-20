import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { ResponsiveSection, RoundButton, TextInput, Title } from '../components'
import { Layout } from '../layout'

const Join = () => {
  return (
    <Layout dark noFooter>
      <ResponsiveSection>
        <Box 
            className='ceiling-space'
            display={{base: 'block', lg: 'none'}}
            pt={{base: '20vw', lgTablet: '5vw', lg: 0}}
        />
        <Box>
          <Title>Hey there!</Title>
          <Title>Wanna join the club?</Title>
          <Title>You will have to fill out a form</Title>
        </Box>

        <Flex 
          direction={{base: "column", lg: "row"}}
          justify="space-between" 
          mt={{base: '5rem', lgTablet:'7.5rem', lgDesktop:'wrap2Md'}}
        >
          <Box flex=" 0 0 45%" >
            <Text w={{base: "100%", md: "75%"}}>
              You do not need prior experience to join—just a passion for learning! 
              The MEC ACM is a club dedicated to exploring the world of computer science. 
              To that extent, we are always looking for new members to embark on this journey. 
              You do not have to be an expert on anything; just bring your curiosity and enthusiasm 
              for learning!
            </Text>   
          </Box>
          <Stack flex="0 0 45%" spacing="1rem" mt={{base: '5rem', lgTablet:0}}>
              <TextInput label="What is your name?" ph="John/Jane Doe"/>
              <TextInput label="What is your preferred email to receive club emails?" ph="studentname@personal.com"/>
              <TextInput label="What is your current year in school?" ph="Freshman, Sophomore..." />
              <TextInput label="What is your major?" ph="Computer Science, Biology..."/>
          </Stack>
        </Flex>

        <Flex 
          w="100%" justify="end"
          mt={{base: '5rem', lgTablet:'7.5rem', lgDesktop:'wrap2Md'}}
        >
          <RoundButton text="submit!" state/>
        </Flex>

        <Box 
            className='floor-space'
            display={{base: 'block', lg: 'none'}}
            pt={{base: '20vw', lgTablet: '5vw', lg: 0}}
        />
        
      </ResponsiveSection>
    </Layout>
  )
}

export default Join
