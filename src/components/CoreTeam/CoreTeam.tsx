import { Container, Heading, Image, Text, Skeleton, Link, Group, Button, IconButton } from '@chakra-ui/react';
import React, { memo, Suspense } from 'react';
import 'swiper/swiper-bundle.css';
import Marquee from 'react-fast-marquee';
import { CoreTeamMembers } from '@/data/data';
import { Link as RRDLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Member {
    name: string;
    role: string;
    username: string;
    avatar: string;
}

const CoreTeamMember = memo(({ member }: { member: Member }) => (
    <Container p={4} w={"300px"} display={"flex"} flexDirection={"column"} alignItems={"center"} bg={"bg.muted"} mx={2} rounded={"md"}>
        <Image src={member.avatar} alt={member.name} rounded={"full"} h="90px" mb={4} loading="lazy" />
        <Container textAlign="center">
            <Heading size="lg">{member.name}</Heading>
            <Heading size="md" color={"fg.muted"}>{member.role}</Heading>
            <Link href={`https://www.instagram.com/${member.username}`} target="_blank" rel="noopener noreferrer" aria-label={`Instagram profile of ${member.username}`}>
                <Heading size={"sm"} color={"fg.muted"}>
                    @{member.username}
                </Heading>
            </Link>
        </Container>
    </Container>
));

const CoreTeam: React.FC = memo(() => {
    return (
        <Container p={0} spaceY={14} display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} w="100%" id="coreteam" >
            <Heading size={'4xl'}>
                Core <em>Team</em>
            </Heading>
            <Text fontSize={'xl'} color={"fg.muted"} w={{ base: "100%", md: "60%" }}>
                Meet the dedicated members of PixElation, the creative club at Delhi University, who are striving to make a difference through innovation and teamwork.
            </Text>
            <Group gap={0}>
                <RRDLink to="/our-team" aria-label="View All Team Members">
                    <Button variant={'outline'} rounded='full' px={10} aria-label="View All">
                        View All
                    </Button>
                    <IconButton rounded='full' aria-label="View All">
                        <ArrowRight />
                    </IconButton>
                </RRDLink>
            </Group>
            <Marquee pauseOnHover speed={100} gradient={true} gradientColor="black" gradientWidth="100px">
                {CoreTeamMembers.map((member, index) => (
                    <Suspense fallback={<Skeleton height="200px" width="100%" />} key={index}>
                        <CoreTeamMember member={member} />
                    </Suspense>
                ))}
            </Marquee>
        </Container>
    );
});

export default CoreTeam;
