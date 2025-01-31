import React from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

interface PhotoSlide {
  id: number;
  imageUrl: string;
  title: string;
}


const photos: PhotoSlide[] = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Nature Shot 1'
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    title: 'Nature Shot 2'
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Nature Shot 3'
  },
  {
    id: 4,
    imageUrl: 'https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    title: 'Nature Shot 4'
  },
];

const PhotographySlider: React.FC = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4} >
      <Heading mb={6} textAlign="center">Photography</Heading>
      
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        style={{
          width: '100%',
          height: '500px', 
        }}
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <Box
              w="200%"
              h="100%"
              position="relative"
              overflow="hidden"
              borderRadius="xl"
              className='slider-container'
            >
              <Image
                src={photo.imageUrl}
                alt={photo.title}
                w="100%"
                h="100%"
                transition="transform 0.3s ease"
                _hover={{
                  transform: 'scale(1.05)',
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default PhotographySlider;