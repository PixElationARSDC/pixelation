import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './Slider.css';

const Slider: React.FC = () => {
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
      alt: "Nature Image 1"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Nature Image 2"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
      alt: "Nature Image 3"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
      alt: "Nature Image 4"
    }
  ];

  return (
    <div>
    <h1 className='photo-header'>Photography</h1>
    <Box className="slider-container">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Box className="slide-box">
              <Image
                src={image.url}
                alt={image.alt}
                className="slide-image"
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
    </div>
  );
};

export default Slider;