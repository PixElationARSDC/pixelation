import { Container, SimpleGrid, GridItem, Box } from '@chakra-ui/react';
import Header from '@/components/Aboutus/AboutUsInside/Header/Header';
import Description from '@/components/Aboutus/AboutUsInside/Description/Description';
import NavigationButtons from '@/components/Aboutus/AboutUsInside/NavigationButton/NavigationButton';
import Motto from '@/components/Aboutus/AboutUsInside/Motto/Motto';
import Mission from '@/components/Aboutus/AboutUsInside/Mission/Mission';
import TeamImage from '@/components/Aboutus/AboutUsInside/TeamImage/TeamImage';
import './AboutUs.css'

const AboutUs = () => {
  return (
    <Container className="section2" flexDir={"column"}>
      <Header/>
      <Description />

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mt={8}>
        {/* Left Section */}
        <GridItem>
          <Box p={0}>
            <NavigationButtons />
            <Motto />
            <Mission />
          </Box>
        </GridItem>

        {/* Right Section */}
        <GridItem>
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <TeamImage />
          </Box>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};

export default AboutUs;
