import { VStack, Container } from '@chakra-ui/react';
import Header from '@/components/OurWork/WorkInside/Header/workheader';
import TasveerSection from '@/components/OurWork/WorkInside/Tasveer/tasveer';
// import AnnualMagazine from '@/components/OurWork/WorkInside/Annual/Annual';
import PhotoSlider from '@/components/OurWork/WorkInside/Photography/Slider/Slider';
import ImageSlider from '@/components/OurWork/WorkInside/Photography/PhotoSwiper/PhotoSwiper';

const Work = () => {
  return (
    <Container maxW="container.xl" bg="black" color="white" p={16}>
      <VStack align="stretch" gapY={12}>
        <Header />
        <PhotoSlider />
        <ImageSlider />
        <TasveerSection />
        {/* <AnnualMagazine /> */}
      </VStack>
    </Container>
  );
};

export default Work;