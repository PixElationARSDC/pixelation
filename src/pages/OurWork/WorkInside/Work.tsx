import { VStack, Container } from '@chakra-ui/react';
import Photography from '@/components/OurWork/WorkInside/Photography/Photography';
import Header from '@/components/OurWork/WorkInside/Header/workheader';
import TasveerSection from '@/components/OurWork/WorkInside/Tasveer/Tasveer';

const Work = () => {
  return (
    <Container maxW="container.xl" bg="black" color="white" py={8}>
      <VStack gap={12} align="stretch">
        <Header />
        <Photography />
        <TasveerSection/>
      </VStack>
    </Container>
  );
};

export default Work;