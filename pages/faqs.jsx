import Link from 'next/link'
import React from 'react'
import { HeroAnimationWrapper, ResponsiveSection, SectionHeader, Title } from '../components'
import { Layout } from '../layout'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box, 
    Text
  } from '@chakra-ui/react'
  import { motion } from "framer-motion"

const FAQs = () => {

    const faqs = [
        {
            q: 'Who can join the Computer Science Club?', 
            a: 'Anyone with an interest in computer science is welcome to join the club. You do not need to be a computer science major to participate in club activities.'
        },
        {
            q: 'What is the purpose of the Computer Science Club?', 
            a: 'The purpose of the Computer Science Club is to provide a community for students to explore their interests in computer science, learn new skills, and network with industry professionals.'
        },
        {
            q: 'What kinds of events does the Computer Science Club host?', 
            a: 'The Computer Science Club hosts a variety of events including study groups, programming tutorials, guest lectures, and networking events. Check out our events calendar for more information.'
        },
        {
            q: 'How can I get involved with the Computer Science Club?', 
            a: 'To get involved with the Computer Science Club, you can attend events, join a study group, or join the club as a member. Membership benefits include access to exclusive resources and opportunities.'
        },
        {
            q: 'How do I contact the Computer Science Club?', 
            a: 'You can contact the Computer Science Club through our website or by reaching out to one of our leadership team members. Our contact information can be found on our website.'
        },
        {
            q: 'How do I join the Computer Science Club?', 
            a: 'Membership is open to all students who have an interest in computer science. Simply fill out the membership form on our website and pay the annual membership fee.'
        },
        {
            q: 'Is there a membership fee?', 
            a: 'Yes, the per term membership fee is $10. This fee helps cover the cost of hosting events and providing resources to our members.'
        },
        {
            q: 'Are there any requirements for becoming a member?', 
            a: 'No, membership is open to all students who have an interest in computer science. Whether you are just starting to learn about computer science or you are an experienced programmer, you are welcome to join our club.'
        }
    ]


    return (
        <Layout>
            <ResponsiveSection>
                <Box 
                    className='ceiling-space'
                    display={{base: 'block', lg: 'none'}}
                    pt={{base: '20vw', lgTablet: '5vw', mdDesktop: '2vw'}}
                />

                <HeroAnimationWrapper>
                    <SectionHeader>FAQs</SectionHeader>
                    <Title>
                        <div>Find answers to </div>
                        <div>your questions here</div>
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
                    <Text
                        my={{base: '2rem', lgTablet: '3.5rem', mdDesktop: '4.5rem', xlDesktop: '6rem'}}
                        maxW="650px"  ml="auto" w={{sm: '90', md: '50%', lgTablet: '60%', lg: '40%'}}
                    >
                        This is the place where you can find the most common questions quickly answered, 
                        if for some reason your question is not here, feel free to <Link href="/contact">contact us</Link>
                    </Text>
                </motion.div>

                <Accordion 
                    allowToggle 
                    pt={{base: '2rem', lgTablet: '3.5rem', mdDesktop: '4.5rem', xlDesktop: '6rem'}}
                >
                    {
                        faqs.map((faq, index) => {
                            return (
                                <AccordionItem key={[faq, index]} >
                                    <AccordionButton py={{base: 4, lg: 8}}>
                                        <Box flex='1'fontSize="clamp(16px, 1.2vw, 25px)" textAlign='left'>{faq.q}</Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel py={8}>{faq.a}</AccordionPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </ResponsiveSection>
        </Layout>
    )
}

export default FAQs