// src/components/AboutUs/TeamImage.tsx
import { Box, Image } from '@chakra-ui/react';

const TeamImage = () => {
  return (
    <Box mb={12}>
      <Image
        src="https://images.pexels.com/photos/30336520/pexels-photo-30336520/free-photo-of-group-gathering-in-traditional-moroccan-interior.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="PixElation Team"
        borderRadius="lg"
        width="90%"
      />
    </Box>
  );
};

export default TeamImage;