import { Button, Container, Group, IconButton, Separator, Text } from '@chakra-ui/react';
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface RightProps {
    details: string,
    price: string
}

const Right: React.FC<RightProps> = ({ details, price }) => {
    return (
        <Container flex="1" py={5} px={4} display="flex" flexDirection="column" justifyContent="space-around" h="full">
            <Container p="0" display="flex" justifyContent="space-between" color="fg.muted">
                <Text fontSize="xs">DETAILS</Text>
                <Text dangerouslySetInnerHTML={{ __html: details }} fontSize="xl" lineHeight="moderate" color="gray.300" p={0} ml={20} />
            </Container>
            <Separator borderColor="gray.500" />
            <Container mt={5} display="flex" justifyContent="space-between" alignItems="center">
                <Text fontSize="xs" color="fg.muted">{price}</Text>
                <Group gap={0}>
                    <Button variant="surface" borderColor="gray.500" rounded="full" px={7}>
                        Register Now
                    </Button>
                    <IconButton rounded="full">
                        <ArrowRight />
                    </IconButton>
                </Group>
            </Container>
        </Container>
    );
};

export default Right;
