import React from 'react';
import { Helmet } from 'react-helmet';
import { CoreTeamMembers } from '@/data/data';
import { Container, Box, Image, Text, SimpleGrid, Link, Heading, Em } from '@chakra-ui/react';

const OurTeamPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Our Team - PixElation Society</title>
                <meta name="description" content="Meet the talented and passionate members of PixElation, the Photography and Videography Society of Atma Ram Sanatan Dharma College, Delhi University." />
                <meta name="author" content="PixElation Society" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Our Team - PixElation Society" />
                <meta property="og:description" content="Meet the talented and passionate members of PixElation, the Photography and Videography Society of Atma Ram Sanatan Dharma College, Delhi University." />
                <meta property="og:image" content="https://pixelation.live/logo.avif" />
                <meta property="og:url" content="https://pixelation.live/our-team" />
                <meta name="twitter:title" content="Our Team - PixElation Society" />
                <meta name="twitter:description" content="Meet the talented and passionate members of PixElation, the Photography and Videography Society of Atma Ram Sanatan Dharma College, Delhi University." />
                <meta name="twitter:image" content="https://pixelation.live/logo.avif" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <Container className='section2' flexDirection={"column"}>
                <Heading size="4xl" mb={10}>
                    Our <Em>Team</Em>
                </Heading>
                <SimpleGrid columns={[2, 3, 4]} gap={4}>
                    {CoreTeamMembers.map((member, index) => (
                        <Box key={index} position="relative" width="100%" height="300px">
                            <Image
                                src={member.avatar}
                                alt={member.name}
                                h="300px"
                                width="full"
                                rounded="md"
                            />
                            <Box position="absolute" bottom="1" left="50%" transform="translateX(-50%)" bg="rgba(0, 0, 0, 0.3)" color="white" width="95%" p={2} backdropFilter={"blur(4px)"} textAlign="center" rounded="lg">
                                <Text fontWeight="bold">{member.name}</Text>
                                <Text>{member.role}</Text>
                                <Link
                                    href={`https://www.instagram.com/${member.username}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit ${member.name}'s Instagram profile`}
                                >
                                    <Text>@{member.username}</Text>
                                </Link>
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </>
    );
};

export default OurTeamPage;
