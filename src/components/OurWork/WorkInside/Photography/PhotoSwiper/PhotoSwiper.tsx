import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { photoData } from './data';
import 'swiper/swiper-bundle.css';
import { swiperStyles, slideImageStyles, swiperContainerStyles } from './style';

const PhotoSwiper: React.FC = () => {
  return (
    <Box css={swiperContainerStyles}>
      <Swiper
        modules={[FreeMode, Pagination, Autoplay]}
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        style={swiperStyles as React.CSSProperties}
      >
        {photoData.map((photo) => (
          <SwiperSlide key={photo.id}>
            <Image
              src={photo.imageUrl}
              alt={photo.alt}
              css={slideImageStyles}
              _hover={{
                transform: 'scale(1)',
                transition: 'transform 0.3s ease',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default PhotoSwiper;