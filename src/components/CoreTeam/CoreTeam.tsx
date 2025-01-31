import { Container, Em, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import 'swiper/swiper-bundle.css'

const CoreTeamMembers = [
    {
        name: 'Tejasva',
        role: 'President',
        username: '@tejasva',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBkw26qI5uRVzsiK3675lZjFpwhmIvBqY4oXeM'
    },
    {
        name: 'Vedika',
        role: 'Vice-President',
        username: '@vedika',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBtszrl3Ju8GRZoe63SQzYCOTKiwgWEVbvLy41'
    },
    {
        name: 'Mahira',
        role: 'Vice-President',
        username: '@mahira',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBqIPhN26TJQ6DPRopGCb5cIWZai3HO8F0B1gq'
    },
    {
        name: 'Tanu Shree',
        role: 'Secretary',
        username: '@tanushree',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBDhLw8wyQ1FzIRhCYdNer4knKEvM8t5xuwfHL'
    },
    {
        name: 'Jatin Kapoor',
        role: 'Joint Secretary',
        username: '@jatinkapoor',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBDKt6ZIyQ1FzIRhCYdNer4knKEvM8t5xuwfHL'
    },
    {
        name: 'Lakshay Chauhan',
        role: 'Finance Head',
        username: '@lakshaychauhan',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBTeUhjh77CMDbyJgPeNsoVGhkFcLBnirHO0Yx'
    },
    {
        name: 'Simar Bagga',
        role: 'Filmmaking Head',
        username: '@simarbagga',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBOw9J6e6WoP8n6HUlE7tN10MzbYIQLmp3Fki9'
    },
    {
        name: 'Soumadip Mondal',
        role: 'Videography Head',
        username: '@soumadip',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBwI0YULB9SK0vRIJD26mofEeUks8z4bC5yYpG'
    },
    {
        name: 'Sumit',
        role: 'Social Media Head',
        username: '@sumit',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBVhsF9jOgfopyRKOsYZ71q2dL8mtbV3XUjkN9'
    },
    {
        name: 'Arman',
        role: 'Content Head',
        username: '@arman',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIB2HNzHArRJN0EQAkqX1wV4B2zD39bOM5caYLu'
    },
    {
        name: 'Pranav Nandagiri',
        role: 'Coverage Head',
        username: '@pranavnandagiri',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBE2qFgCeohYwagUml8GryTXtvD70bijn9qPKL'
    },
    {
        name: 'Shubham Sagar',
        role: 'Digital Head',
        username: '@shubhamsagar',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBCVOqf2L4tyTIBwP4R7Y5b0Um6zSNuhcQr2VZ'
    },
    {
        name: 'Dhruv Kalra',
        role: 'Deputy Digital Head',
        username: '@dhruvkalra',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBebRlxMPb8Y1U7lH4I5FRGiAJte6rP0zCOpMn'
    },
    {
        name: 'Akansha',
        role: 'Co-PR Head',
        username: '@akansha',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBMEXKZmaY6aj9ZD1lcyvVw2PBXEoNFhCWG7iT'
    },
    {
        name: 'Abhinav Kalra',
        role: 'Co-PR Head',
        username: '@abhinavkalra',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBDI8b5hyQ1FzIRhCYdNer4knKEvM8t5xuwfHL'
    },
    {
        name: 'Prince',
        role: 'Competition Head',
        username: '@prince',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIB5aK2X2z37XFbZianxOPmIR2M4sNWyJkpoeGD'
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
            <Container display={"flex"} flexDirection={"row"} flexWrap={"wrap"} w="100%" justifyContent={"center"} gap={4} p={0} m={0}>
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
