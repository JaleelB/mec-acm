import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { BodyParagraph, KnowMoreCTA, ResponsiveSection, SectionHeader, Subtitle } from '../../components'
import events from '../../assets/eventw-card.jpg'
import challenges from '../../assets/challenges-card.jpg'

const Principles = () => {

    const principles = [
        {name: 'Community', description: 'Our welcoming community is here to help you ! You’ll be surrounded by like minded people who can help take you from zero to hero.'},
        {name: 'Networking', description: 'Connect with people from all walks of life and grow your network with peers, and even some of the brightest people in the industry.'},
        {name: 'Professional Development', description: 'There’s no better way to impress an employer than to show you’re willing to get involved, work hard and gain skills outside the classroom.'},
    ]

    return (
        <ResponsiveSection>
        <SectionHeader>our guiding principles</SectionHeader>
            <Box>
                <Subtitle>
                    We combine the freedom of personality and the synergy of a club, 
                    striving to bring the best to and out of our members
                </Subtitle> 
            </Box>
            <Box my={{base: '3rem', lgTablet: '4rem', mdDesktop: '5rem'}}>
                <BodyParagraph>
                    We  value collaboration and inclusivity, and strive to create a welcoming and supportive environment where all 
                    members can learn and grow together. Our club is committed to staying up-to-date with the latest developments in 
                    computer science and technology, balancing individual expression and collaborative effort,, and actively seeking out 
                    opportunities to learn from experts and professionals in the field.We believe that by following these guiding principles, 
                    we can provide our members with a valuable and enriching experience that will help them succeed in their studies and careers.
                </BodyParagraph>
            </Box>
            <Box py={{base: '3rem', lgTablet: '4rem', mdDesktop: '5rem'}}>
                {
                    principles.map((principle, index) =>{ 
                        return (
                            <Flex key={principle}
                                direction={{base: "column", md: "row"}}
                                justify={{base: "normal", md: "space-between"}}
                                borderTop="1px" borderBottom={index === principles.length - 1 && '1px'} borderColor="lightGrey" 
                                py={{base:'1.5rem', smTablet: '2rem', mdDesktop: '3rem'}}
                            >
                                <Box>
                                    <Text>Guidline 0{index + 1}</Text>
                                    <Heading
                                        as="h4" mt=".5rem"
                                        fontSize={{base: "36px", lgDesktop:"min(2.35vw, 50px)"}}
                                        fontWeight="300"
                                    >
                                        {principle.name}
                                    </Heading>
                                </Box>
                                <Box 
                                    w={{base: '100%', md: '50%', lgTablet: '60%', lg:'65%'}}
                                    maxW="1000px" mt={{base: '1rem'}}
                                >
                                    <Text>
                                        {principle.description}
                                    </Text>
                                </Box>
                            </Flex>
                        )
                    })
                }
            </Box>

            <KnowMoreCTA
                text1="team"
                text2="resources" 
                url1="team"
                url2="resources"
                image1={events} 
                image2={challenges}
            />
        </ResponsiveSection>
    )
}

export default Principles
