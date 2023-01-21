import { 
  Box, Flex, Stack, Text,
  FormControl, Button, useToast
} from '@chakra-ui/react'

import { motion } from 'framer-motion'
import React, { useState, useRef } from 'react'
import { HeroAnimationWrapper, ResponsiveSection, TextInput, Title } from '../components'
import { Layout } from '../layout'
import { useForm } from 'react-hook-form'


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
        onClick={props.handleEmptyFields}
        // onClick={() => {
      
        //   if()
        //     toast({
        //       title: 'Empty Inputs',
        //       description: `Fill out all inputs to continue`,
        //       status: `error`,
        //       duration: 5000,
        //       isClosable: true,
        //       position: 'top-right',
        //     })
        // }}
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

  const addMember = async(e) => {
        
    const member = {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        year: yearRef.current?.value,
        major: majorRef.current?.value,
        date: `${date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
    };

    try{
        const response = await axios.post('/api/signup', {
          ...member
        })

        if(response.data.success){
            const timer = setTimeout(() => setSuccess(true), 2000);
            return () => clearTimeout(timer);
        }
    }
    catch(e){
        setErrorMessage(e.message || 'Something went wrong with signing up');
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

  const handleEmptyFields = () => {
    if(!nameRef.current?.value || !emailRef.current?.value || !majorRef.current?.value || !yearRef.current?.value){
      toast({
        title: 'Empty Inputs',
        description: "Fill out all input fields.",
        status: 'error',
        isClosable: false,
        duration: 10000,
        position: 'top-right',
        containerStyle: {
          fontSize: "clamp(16px, 1.2vw, 20px)"
        },
      })
    }
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
                    label="What is your name?" ph="John/Jane Doe" id="name" 
                    ref={nameRef} errors={errors}  register={register}
                  />
                  <TextInput
                     label="What is your preferred email to receive club emails?" ph="studentname@personal.com" 
                     id="email" ref={emailRef} errors={errors}  register={register}
                    />
                  <TextInput 
                    label="What is your current year in school?" ph="Freshman, Sophomore..." 
                    id="year" ref={yearRef} errors={errors} register={register}
                  />
                  <TextInput 
                    label="What is your major?" ph="Computer Science, Biology..." 
                    id="major" ref={majorRef} errors={errors}  register={register}
                  />
                </FormControl>

                <Flex 
                  w="100%" justify="end"
                  pt={{base: '5rem', lgTablet:'7.5rem', lgDesktop:'wrap2Md'}}
                >
                  <RoundButton 
                    text="submit!" 
                    state 
                    handleEmptyFields={handleEmptyFields}
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
