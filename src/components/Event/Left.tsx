import { Container, Link as ChakraLink, Text, Skeleton, Image } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface LeftProps {
    name: string,
    location: string,
    date: string,
    time: string,
    agenda: string,
    image: string,
    eventmanageremail: string
}

const Left: React.FC<LeftProps> = React.memo(({ name, location, date, time, agenda, image, eventmanageremail }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const img = new window.Image();
        img.src = image;
        if (img.complete) {
            setIsLoading(false);
        } else {
            img.onload = () => setIsLoading(false);
        }
    }, [image]);

    return (
        <Container flex="1" p={0} w="full" h="full" display="flex" flexDirection="column" justifyContent="space-between">
            <Container display="flex" justifyContent="space-between" p={0} fontSize="xs" color="fg.muted">
                <ChakraLink asChild>
                    <Link to="/">HOME</Link>
                </ChakraLink>
                <ChakraLink href={`mailto:${eventmanageremail}`} target="_blank" rel="noopener noreferrer">
                    CONTACT EVENT MANAGER
                </ChakraLink>
            </Container>
            <Container p="0" mt="3">
                <Text fontSize={{ base: "4xl", md: "7xl" }} textAlign="center" lineHeight="shorter" p="0" fontWeight="black" mb="0">
                    {name}
                </Text>
                {isLoading && <Skeleton w="full" h={{ base: "150px", md: "200px" }} />}
                <Image
                    src={image}
                    alt="conference"
                    w="full"
                    h={{ base: "150px", md: "200px" }}
                    loading="lazy"
                    display={isLoading ? "none" : "block"}
                />
                <Container display="flex" justifyContent="space-between" p={0} mt={3} color="gray.300" fontSize="x-small">
                    <Text>{location}</Text>
                    <Text>{date}</Text>
                    <Text>{time}</Text>
                </Container>
            </Container>
            <Container mt="5">
                <Text fontSize="x-small" color="fg.subtle" textAlign="center" mb={2}>
                    AGENDA
                </Text>
                <Text dangerouslySetInnerHTML={{ __html: agenda }} textAlign="center" color="gray.300" fontSize="md" />
            </Container>
        </Container>
    );
});

export default Left;
