import { Box, Container, Heading, Text, Flex, Image } from '@chakra-ui/react';
import tasveer1 from '../../../../assets/tasveer1.png';
import tasveer2 from '../../../../assets/tasveer2.jpg';
import tasveer3 from '../../../../assets/tasveer3.jpg';

const TasveerSection = () => {
  const yearlyData = [
    {
      year: '2023-24',
      image: tasveer1,
      width: { base: "100%", md: "45%", lg: "500px" },
      height: { base: "250px", md: "350px", lg: "400px" }
    },
    {
      year: '2022-23',
      image: tasveer2,
      width: { base: "100%", md: "35%", lg: "425px" },
      height: { base: "250px", md: "350px", lg: "400px" }
    },
    {
      year: '2017-22',
      image: tasveer3,
      width: { base: "100%", md: "20%", lg: "300px" },
      height: { base: "250px", md: "350px", lg: "400px" }
    },
  ];

  return (
    <Box 
      bg="black" 
      width="100%"
      px={{ base: 1, sm: 2, md: 3, lg: 0 }} 
    >
      <Container 
        maxW={{ base: "100%", lg: "container.lg" }}
        mx="auto"
        py={{ base: 4, md: 6, lg: 8 }} 
      >
        <Box 
          width="100%"
          maxW={{ base: "99%", sm: "98%", md: "99%", lg: "container.lg" }} 
          mx="auto"
        >
          <Box mb={{ base: 3, md: 4, lg: 6 }}> 
            <Heading
              as="h1"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight="bold"
              color="white"
              mb={{ base: 3, md: 4, lg: 6 }} 
              fontStyle="italic"
            >
              Tasveer
            </Heading>
            <Text 
              color="whiteAlpha.900" 
              fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} 
              lineHeight="tall" 
              textAlign="justify"
            >
              Tasveer is our annual celebration of photography and videography—a vibrant journey where
              creativity knows no bounds. Each year, we host a range of exciting competitions that draw
              participants from universities far and wide. It's not just a contest; it's a dynamic
              exchange of ideas and skills, where we learn from each other and grow together.
              Experience art in its purest form as diverse talents come together to reflect the beauty
              of photography and videography in truly captivating ways.
            </Text>
          </Box>

          <Flex 
            direction={{ base: "column", md: "row" }}
            gap={{ base: 3, md: 2, lg: 3 }} 
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "flex-start" }}
            wrap={{ base: "wrap", md: "nowrap" }}
            mx="auto"
            width="100%"
          >
            {yearlyData.map((item) => (
              <Box
                key={item.year}
                position="relative"
                overflow="hidden"
                borderRadius="lg" 
                transition="transform 0.3s ease"
                _hover={{ transform: 'scale(1.02)' }}
                width={item.width}
                height={item.height}
                flexShrink={0}
                mx={{ base: "auto", md: 0 }}
              >
                <Image
                  src={item.image}
                  alt={`Tasveer ${item.year}`}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  loading="lazy"
                />
                <Box
                  position="absolute"
                  top={1}
                  right={1}
                  bg="blackAlpha.700"
                  color="white"
                  px={2}
                  py={0.5}
                  borderRadius="md"
                  fontSize={{ base: "xs", md: "sm" }}
                >
                  {item.year}
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default TasveerSection;