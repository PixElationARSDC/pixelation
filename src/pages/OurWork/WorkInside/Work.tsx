import { VStack, Container } from '@chakra-ui/react';
import Photography from '@/components/OurWork/WorkInside/Photography/Photography';

const Work = () => {
  return (
    <Container maxW="container.xl" bg="black" color="white" py={8}>
      <VStack gap={12} align="stretch">
        <Photography />
      </VStack>
    </Container>
  );
};

export default Work;