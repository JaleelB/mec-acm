import { 
  Box, Flex, Stack, Text,
  FormControl, Button, useToast, Heading
} from '@chakra-ui/react'

import { motion } from 'framer-motion'
import React, { useState, useRef } from 'react'
import { HeroAnimationWrapper, ResponsiveSection, TextInput, Title } from '../components'
import { Layout } from '../layout'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { WarningTwoIcon } from '@chakra-ui/icons'
import { CheckIcon } from '@chakra-ui/icons'



const RoundButton = (props) => {

  return (
    <Button
        isLoading={props.isSubmitting} 
        role="group" type='submit'
        width="clamp(144px, 12vw, 270px)" height="clamp(144px, 12vw, 270px)"
        bg={props.state ? "colorBlue" : "bgDark"} color="textLight"
        textTransform="capitalize" fontWeight="400"
        transition="transform ease-in 300ms"
        justify="center" align="center"
        borderRadius="100%"
        _hover={{
            backgroundColor: 'colorBlue',
            transform: 'scale(1.1)'
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
              display="flex" justifyContent="center" alignItems="center"
              _groupHover={{      
                transform: "translateY(-100%)"                                  
              }}
            >
              {props.text}
            </Text>
            <Text 
              as="div" height="100%"
              style={{transformStyle: "preserve-3d"}}
              transition="transform 300ms ease" 
              transform="translateY(50%)"
              _groupHover={{
                transform:"translateY(-100%)"
              }}
            >
              {props.text}
            </Text>
        </Flex>
    </Button>
  )
}


const Join = () => {

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const toast = useToast();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const yearRef = useRef(null);
  const majorRef = useRef(null);
  const [error, setError] = useState(false);

  const addMember = async() => {

    const date = new Date()
        
    const member = {
        name: nameRef.current,
        email: emailRef.current,
        year: yearRef.current,
        major: majorRef.current,
        date: `${date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
    };

    try{
        const response = await axios.post('/api/signup', {
          ...member
        })

        if(response.data.success){
            const timer = setTimeout(() => {
              toast({
                position: 'top-right',
                duration: 15000,
                isClosable: true,
                render: () => (
                  <Flex 
                    color='white' gap={6}  
                    py={2} px={6} bg='green.500'
                    borderRadius="8px"
                  >
                    <CheckIcon ml={0.5} mt={4} fontSize="1.3rem"/>
                    <Flex direction="column">
                      <Text as="h4" fontWeight="700" fontSize="20px">Sign up successful</Text>
                      <Text mt="-3" fontSize="18px">Welcome to the club</Text>
                    </Flex>
                    
                  </Flex>
                ),
              })
            })
            return () => clearTimeout(timer);
        }
    }
    catch(e){
      setError(e.message || 'Something went wrong with signing up');
      toast({
        position: 'top-right',
        duration: 15000,
        isClosable: true,
        render: () => (
          <Flex 
            color='white' gap={6}  
            py={2} px={6} bg='red.500'
            borderRadius="8px"
          >
            <WarningTwoIcon ml={0.5} mt={4} fontSize="1.3rem"/>
            <Flex direction="column">
              <Text as="h4" fontWeight="700" fontSize="20px">Error</Text>
              <Text mt="-3" fontSize="16px">{eror}</Text>
            </Flex>
            
          </Flex>
        ),
      })
    }

};

  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        addMember()
        resolve()
      }, 2000)
    })
  }


  return (  

    <Layout dark noFooter>
      <ResponsiveSection>
        <Box 
            className='ceiling-space'
            display={{base: 'block', lg: 'none'}}
            pt={{base: '20vw', lgTablet: '5vw', lg: 0}}
        />
        <HeroAnimationWrapper>
          <Title>Hey there!</Title>
          <Title>Wanna join the club?</Title>
          <Title>You will have to fill out a form</Title>
        </HeroAnimationWrapper>

        <Flex 
          direction={{base: "column", lg: "row"}}
          justify="space-between" 
          mt={{base: '5rem', lgTablet:'7.5rem', lgDesktop:'wrap2Md'}}
        >
          <Box flex=" 0 0 45%" >
            <motion.div
              initial={{ opacity: 0, y: 90 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                  type: "easeInOut",
                  duration: .9,
                  delay: 1.2,
              }}
            >
              <Text w={{base: "100%", md: "75%"}}>
                You do not need prior experience to join—just a passion for learning! 
                The MEC ACM is a club dedicated to exploring the world of computer science. 
                To that extent, we are always looking for new members to embark on this journey. 
                You do not have to be an expert on anything; just bring your curiosity and enthusiasm 
                for learning!
              </Text>   
            </motion.div>
          </Box>

          <motion.div
              initial={{ opacity: 0, y: 90 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                  type: "easeInOut",
                  duration: .9,
                  delay: 1.2,
              }}
          >
            <Stack 
              as="form" 
              flex="0 0 45%" 
              spacing="1rem" 
              mt={{base: '5rem', lgTablet:0}}
              onSubmit={handleSubmit(onSubmit)}
            >
                <FormControl isInvalid={error}>
                  <TextInput 
                    label="What is your full name?" ph="John/Jane Doe" id="name" 
                    inputRef={nameRef} errors={errors}  register={register}
                  />
                  <TextInput
                     label="What is your preferred email to receive club emails?" ph="studentname@personal.com" 
                     id="email" inputRef={emailRef} errors={errors}  register={register}
                    />
                  <TextInput 
                    label="What is your current year in school?" ph="Freshman, Sophomore..." 
                    id="year" inputRef={yearRef} errors={errors} register={register}
                  />
                  <TextInput 
                    label="What is your major?" ph="Computer Science, Biology..." 
                    id="major" inputRef={majorRef} errors={errors}  register={register}
                  />
                </FormControl>

                <Flex 
                  w="100%" justify="end"
                  pt={{base: '5rem', lgTablet:'7.5rem', lgDesktop:'wrap2Md'}}
                >
                  <RoundButton 
                    text="submit!" 
                    state 
                    isSubmitting={isSubmitting}
                  />
                </Flex>
            </Stack>
          </motion.div>
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
