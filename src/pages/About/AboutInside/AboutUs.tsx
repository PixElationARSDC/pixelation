import { Helmet } from 'react-helmet';
import { Container, SimpleGrid, GridItem, Box } from '@chakra-ui/react';
import Header from '@/components/Aboutus/AboutUsInside/Header/Header';
import Description from '@/components/Aboutus/AboutUsInside/Description/Description';
import NavigationButtons from '@/components/Aboutus/AboutUsInside/NavigationButton/NavigationButton';
import Motto from '@/components/Aboutus/AboutUsInside/Motto/Motto';
import Mission from '@/components/Aboutus/AboutUsInside/Mission/Mission';
import TeamImage from '@/components/Aboutus/AboutUsInside/TeamImage/TeamImage';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - PixElation Society</title>
        <meta name="description" content="PixElation is the Photography and Videography Society of Atma Ram Sanatan Dharma College, Delhi University, providing photography education, workshops, and competitions since 2017." />
        <meta name="author" content="PixElation Society" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us - PixElation Society" />
        <meta property="og:description" content="PixElation is the Photography and Videography Society of Atma Ram Sanatan Dharma College, Delhi University, providing photography education, workshops, and competitions since 2017." />
        <meta property="og:image" content="https://pixelation.live/logo.avif" />
        <meta property="og:url" content="https://pixelation.live/about-us" />
        <meta name="twitter:title" content="About Us - PixElation Society" />
        <meta name="twitter:description" content="PixElation is the Photography and Videography Society of Atma Ram Sanatan Dharma College, Delhi University, providing photography education, workshops, and competitions since 2017." />
        <meta name="twitter:image" content="https://pixelation.live/logo.avif" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Container className="section2" flexDir={"column"}>
        <Header />
        <Description />

        <SimpleGrid columns={{ base: 1, md: 2 }} mt={10} gap={10}>
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
    </>
  );
};

export default AboutUs;
