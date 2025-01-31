import { Container, Link as ChakraLink, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Prose } from '../ui/prose';

interface LeftProps {
    name: string,
    location: string,
    date: string,
    time: string,
    agenda: string
}

const Left: React.FC<LeftProps> = ({ name, location, date, time, agenda }) => {
    const Html = String.raw
    const content = Html`${agenda}`

    return (
        <Container p={0} w={"full"} h={"full"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
            <Container display={'flex'} justifyContent={"space-between"} p={0} fontSize={'xs'} color={"fg.muted"}>
                <ChakraLink>
                    <Link to={"/"}>HOME</Link>
                </ChakraLink>
                <ChakraLink>
                    <Link to={"/"}>CONTACT US</Link>
                </ChakraLink>
            </Container>
            <Container p="0" mt="3">
                <Text fontSize="7xl" textAlign={"center"} lineHeight={"shorter"} p="0" fontWeight={"black"} mb="0">{name}</Text>
                <Image src="/images.jpg" alt="conference" w={"full"} h="200px" />
                <Container display={'flex'} justifyContent={"space-between"} p={0} mt={3} color={"gray.300"} fontSize={'x-small'}>
                    <Text>{location}</Text>
                    <Text>{date}</Text>
                    <Text>{time}</Text>
                </Container>
            </Container>
            <Container mt="5">
                <Text fontSize={"x-small"} color={"fg.subtle"} textAlign={"center"} mb={2}>AGENDA</Text>
                <Prose
                    dangerouslySetInnerHTML={{ __html: content }}
                    textAlign={'center'}
                    color={'gray.300'}
                    fontSize={"md"}
                />
            </Container>
        </Container>
    );
};

export default Left;