// components/OurWork/Tasveer.tsx
import { Box, Text, SimpleGrid, Image } from '@chakra-ui/react';

const Tasveer = () => {
  const images = [
    { src: '/path-to-group-photo.jpg', alt: 'Group photo' },
    { src: '/path-to-boat-image.jpg', alt: 'Boat' },
    { src: '/path-to-forest-image.jpg', alt: 'Forest' },
  ];

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Tasveer
      </Text>
      <Text fontSize="sm" mb={4}>
      Tasveer is our annual celebration of photography and videography—a vibrant journey where creativity knows no bounds. Each year, we host a range of exciting competitions that draw participants from universities far and wide. It’s not just a contest; it's a dynamic exchange of ideas and skills, where we learn from each other and grow together. Experience art in its purest form as diverse talents come together to reflect the beauty of photography and videography in truly captivating ways.
      </Text>
      <SimpleGrid columns={3} gap={4}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            borderRadius="md"
            h="200px"
            objectFit="cover"
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Tasveer;