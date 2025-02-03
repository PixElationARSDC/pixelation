import { Container, Em, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import 'swiper/swiper-bundle.css'

const CoreTeamMembers = [
    
      {
        name: 'Tejasva Singh',
        role: 'President',
        username: '@tejasva.singh',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBe6ykgmPb8Y1U7lH4I5FRGiAJte6rP0zCOpMn'
    },
    {
        name: 'Mahira Zabeen',
        role: 'Vice-President',
        username: '@selenephomahi',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBTAlXJW77CMDbyJgPeNsoVGhkFcLBnirHO0Yx'
    },
  
    {
        name: 'Vedika Jaiswal',
        role: 'Vice-President',
        username: '@vedika_jaiswal_',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBeLKjf7Pb8Y1U7lH4I5FRGiAJte6rP0zCOpMn'
    },
    {
        name: 'Tanu Shree',
        role: 'Secretary',
        username: '@_tanushree02_',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBkfyJim5uRVzsiK3675lZjFpwhmIvBqY4oXeM'
    },
    {
        name: 'Jatin Kapoor',
        role: 'Joint Secretary',
        username: '@jatin.k17',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBPmj8Z1djIQ91pUb0LwrJWRnh63NEkgiKCVzO'
    },
    {
        name: 'Lakshay Chauhan',
        role: 'Finance Head',
        username: '@lakshayychauhann',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIByQQY1vsMcQmTjirvFS08H7oNICkRYGaKdMsO'
    },
    {
        name: 'Simar Bagga',
        role: 'Filmmaking Head',
        username: '@simar_bagga619',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBb63rKg262em1rTZjEpSIYzqvOXG08ohUkuly'
    },
    {
        name: 'Soumadip Mondal',
        role: 'Videography Head',
        username: '@soomdip',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBKl7eC7XAMeSycfGmxpCwiNPHuQjWbql7YIT1'
    },
    {
        name: 'Sumit',
        role: 'Social Media Head',
        username: '@sumitshakya1219',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBSpY94jAwh1el6v9dyNKiE4kCuXGRUgZn0JAQ'
    },
    {
        name: 'Arman Aryan',
        role: 'Content Head',
        username: '@arman.aryan12',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBhW9zTobVEDrUzSbcesPdjkvhy1WZBtpMIHx3'
    },
    {
        name: 'Pranav Nandagiri',
        role: 'Coverage Head',
        username: '@pranav__004',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBEOEOXMeohYwagUml8GryTXtvD70bijn9qPKL'
    },
    {
        name: 'Shubham Sagar',
        role: 'Digital Head',
        username: '@shubhamsagarrr',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIByNiniMcQmTjirvFS08H7oNICkRYGaKdMsOub'
    },
    {
        name: 'Dhruv Kalra',
        role: 'Deputy Digital Head',
        username: '@__dhruvkalra__',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBfjwfouZVKYhnowOuPdX7H3AB8MbItRDqeQcz'
    },
    {
        name: 'Akansha',
        role: 'Co-PR Head',
        username: '@its.me.hi._.ak',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBIGO8Y2N8l0wio7yBvG2xnXOrh3asJQgedVRk'
    },
    {
        name: 'Abhinav Kalra',
        role: 'Co-PR Head',
        username: '@abhinavkalra.17',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIB6UoSNRphMqYmB8lHUoOJe3fETVtruwx2G4Kd'
    },
    {
        name: 'Prince',
        role: 'Competition Head',
        username: '@the_prince.of',
        avatar: 'https://4x46tcrofa.ufs.sh/f/CDGCKB4tyTIBpM59WdEDhTaKimnR16YMOQj3482rsZukGzUX'
    }
];

const CoreTeam: React.FC = () => {
    return (
        <Container p={0} spaceY={14} display={"flex"} flexDirection={"column"} justifyContent={"space-around"} w="100%" id="coreteam">
            <Heading size={'4xl'}>
                Core <Em>Team</Em>
            </Heading>

            <Text fontSize={'xl'} color={"fg.muted"} w={{base: "100%", md: "50%"}}>
                Meet the dedicated members of PixElation, the creative club at Delhi University, who are striving to make a difference through innovation and teamwork.
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
