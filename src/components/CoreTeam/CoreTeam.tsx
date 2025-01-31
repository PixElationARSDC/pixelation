import { Container, Em, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import 'swiper/swiper-bundle.css'

const CoreTeamMembers = [
    {
        name: 'John Doe',
        role: 'CEO',
        username: '@johndoe',
        avatar: 'https://i.pravatar.cc/?img=3',
    },
    {
        name: 'Jane Doe',
        role: 'CTO',
        username: '@janedoe',
        avatar: 'https://i.pravatar.cc/?img=4',
    },
    {
        name: 'John Smith',
        role: 'COO',
        username: '@johnsmith',
        avatar: 'https://i.pravatar.cc/?img=5',
    },
    {
        name: 'Jane Smith',
        role: 'CFO',
        username: '@janesmith',
        avatar: 'https://i.pravatar.cc/?img=6',
    },
    {
        name: 'John Doe',
        role: 'CEO',
        username: '@johndoe',
        avatar: 'https://i.pravatar.cc/?img=3',
    },
    {
        name: 'Jane Doe',
        role: 'CTO',
        username: '@janedoe',
        avatar: 'https://i.pravatar.cc/?img=4',
    },
    {
        name: 'John Smith',
        role: 'COO',
        username: '@johnsmith',
        avatar: 'https://i.pravatar.cc/?img=5',
    },
    {
        name: 'Jane Smith',
        role: 'CFO',
        username: '@janesmith',
        avatar: 'https://i.pravatar.cc/?img=6',
    }
];

const CoreTeam: React.FC = () => {
    return (
        <Container p={0} spaceY={14} display={"flex"} flexDirection={"column"} justifyContent={"space-around"} w="100%" id="coreteam">
            <Heading size={'4xl'}>
                Core <Em>Team</Em>
            </Heading>

            <Text fontSize={'xl'} color={"fg.muted"} w={{base: "100%", md: "50%"}}>
                Meet the dedicated members of Pixelation, the creative club at Delhi University, who are striving to make a difference through innovation and teamwork.
            </Text>
            <Container display={"flex"} flexDirection={"row"} flexWrap={"wrap"} w="100%" justifyContent={"start"} gap={4} p={0} m={0}>
                {CoreTeamMembers.map((member, index) => (
                    <Container key={index} p={4} w={"fit"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} bg={"bg.muted"} m={0}>
                        <Image src={member.avatar} alt={member.name} rounded={"full"} h="90px" />
                        <Container>
                            <Heading size="lg">{member.name}</Heading>
                            <Heading size="md" color={"fg.muted"}>{member.role}</Heading>
                            <Heading size={"sm"} color={"fg.muted"}>{member.username}</Heading>
                        </Container>
                    </Container>
                ))}
            </Container>

        </Container>
    );
};

export default CoreTeam;