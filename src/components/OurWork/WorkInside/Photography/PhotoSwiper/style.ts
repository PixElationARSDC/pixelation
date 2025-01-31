// src/components/PhotoSwiper/styles.ts
import { SystemStyleObject } from '@chakra-ui/react';
import { css } from '@emotion/react';

export const swiperStyles: SystemStyleObject = {
  width: '100%',
  height: '600px', // Adjust based on your needs
  '& .swiper-slide': css({
    height: '500px',
    borderRadius: '20px',
    overflow: 'hidden',
  })
};

export const slideImageStyles: SystemStyleObject = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '20px',
};

export const swiperContainerStyles: SystemStyleObject = {
  maxW: '1200px',
  mx: 'auto',
  p: 4,
  bg: 'gray.900',
  color: 'white',
};