import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Flex, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import { HeroAnimationWrapper, ResponsiveSection, SectionHeader, Title } from '../components'
import { Layout } from '../layout'
import { motion } from "framer-motion"

const CodeofConduct = () => {
    const formsOfDiscrimination = [
        'Racist, sexist, homophobic, transphobic, ableist, or other forms of hate speech or discrimination.',
        'Personal attacks, insults, or derogatory comments.',
        'Sharing personal information about others without their consent.',
        'Threats of violence or harm.'
    ]

    return (
        <Layout>
            
            <Box 
                className='ceiling-space'
                display={{base: 'block', lg: 'none'}}
                pt={{base: '20vw', lgTablet: '5vw', lg: 0}}
            />
            <ResponsiveSection>
                
                <HeroAnimationWrapper>
                    <SectionHeader>code of conduct</SectionHeader>
                    <Title>
                        We are committed to creating a safe and inclusive community for everyone,
                        regardless of their background, experience, or identity. 
                    </Title>
                </HeroAnimationWrapper>

                <motion.div
                    initial={{ opacity: 0, y: 90 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "easeInOut",
                        duration: .9,
                        delay: 1.2,
                    }}
                >
                    <Box w="100%" h="1px" bg="lightGrey" my={{base: '3rem', lgTablet: '6rem', mdDesktop: '9rem'}}/>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 90 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "easeInOut",
                        duration: .9,
                        delay: 2.2,
                    }}
                >
                    <Flex gap={{base: '2rem', lgTablet: '2.5rem', mdDesktop: '3.5rem'}} direction="column">
                        <Text>
                            To that end, we have established this code of conduct to set clear expectations for how we expect our community members to behave. By participating in our community, 
                            you agree to abide by this code of conduct and to treat others with respect and kindness.
                        </Text>

                        <List spacing={3}>
                            <Text mb="1rem">We will not tolerate any form of discrimination, harassment, or bullying. This includes, but is not limited to:</Text>
                            {
                                formsOfDiscrimination.map(form => {
                                    return (
                                        <ListItem 
                                            key={form} 
                                            display="flex"
                                            gap=".7rem"
                                            pl={{base: '1rem', lgTablet: '2rem', mdDesktop: '3rem'}}
                                        >
                                            <ListIcon as={CheckCircleIcon} color='colorBlue' />
                                            <Text>{form}</Text>
                                        </ListItem>
                                    )
                                })
                            }
                            
                        </List>

                        <Text>
                            We encourage open and respectful communication, and expect all community members to listen to and consider the viewpoints of others. It is okay 
                            to disagree, but it is not okay to disrespect or belittle others for their opinions. We also expect all community members to respect the intellectual 
                            property of others. This includes not sharing or distributing copyrighted material without permission.
                        </Text>

                        <Text>
                            If you witness or experience any behavior that violates this code of conduct, please report it to a club administrator immediately. We take 
                            all reports seriously and will take appropriate action to address any violations. We are committed to creating a positive and welcoming environment 
                            for all members of our community. Thank you for your cooperation in helping us achieve this goal.
                        </Text>

                    </Flex>
                </motion.div>
                
                <Box 
                    className='floor-space'
                    display={{base: 'block', md: 'none'}}
                    pb={{base: '20vw', md: 0}}
                />
                
            </ResponsiveSection>
            
        </Layout>
    )
}

export default CodeofConduct