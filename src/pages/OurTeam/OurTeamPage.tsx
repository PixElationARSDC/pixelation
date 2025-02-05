import React from 'react';
import { CoreTeamMembers } from '@/data/data';
import { Container, Box, Image, Text, SimpleGrid, Link, Heading, Em } from '@chakra-ui/react';

const OurTeamPage: React.FC = () => {
    return (
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
                            <Link href={`https://www.instagram.com/${member.username}`} target="_blank" rel="noopener noreferrer">
                                <Text>@{member.username}</Text>
                            </Link>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default OurTeamPage;