import { Button, Container, Group, IconButton, Separator, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface RightProps {
    details: string,
    price: string,
    registrationurl: string
}

const Right: React.FC<RightProps> = React.memo(({ details, price, registrationurl }) => {
    return (
        <Container flex="1" py={[3, 5]} px={[2, 4]} display="flex" flexDirection="column" justifyContent="space-around" h="full">
            <Container p="0" display="flex" justifyContent="space-between" color="fg.muted">
                <Text fontSize={["xs", "sm"]}>DETAILS</Text>
                <Text dangerouslySetInnerHTML={{ __html: details }} fontSize={["md", "xl"]} lineHeight="moderate" color="gray.300" p={0} ml={[10, 20]} />
            </Container>
            <Separator borderColor="gray.500" my={10} />
            <Container mt={[3, 5]} display="flex" justifyContent="space-between" alignItems="center">
                <Text fontSize={["xs", "sm"]} color="fg.muted">{price}</Text>
                <Link href={registrationurl} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }} aria-label="Register Now">
                    <Group gap={0}>
                        <Button variant="surface" borderColor="gray.500" rounded="full" px={[5, 7]} aria-label="Register Now">
                            Register Now
                        </Button>
                        <IconButton rounded="full" aria-label="Register Now">
                            <ArrowRight />
                        </IconButton>
                    </Group>
                </Link>
            </Container>
        </Container>
    );
});

export default Right;
