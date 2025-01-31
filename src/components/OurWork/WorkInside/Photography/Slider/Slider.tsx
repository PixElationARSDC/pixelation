import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Box,
  Image,
  Container,
  Heading,
  VStack,
} from '@chakra-ui/react';
import './Slider.css';
import slider1 from '/slider1.jpg';
import slider2 from '/slider2.jpg';
import slider3 from '/slider3.jpg';

interface SlideItem {
  id: number;
  image: string;
}

const PhotoSlider: React.FC = () => {
  const slides: SlideItem[] = [
    {
      id: 1,
      image: slider1
    },
    {
      id: 2,
      image: slider2
    },
    {
      id: 3,
      image: slider3
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    className: 'photo-slider',
    dotsClass: 'custom-dots',
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  };

  return (
    <Container maxW="container.xl" py={2} className="slider-container">
      <VStack gap={4} align="start" width="100%">
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
          color="white"
          mb={4}
          className="photography-heading"
        >
          Photography
        </Heading>
        <Box className="slider-wrapper" width="100%">
          <Slider {...settings}>
            {slides.map((slide) => (
              <Box key={slide.id} className="slide-item">
                <Box
                  className="slide-content"
                  position="relative"
                  borderRadius="xl"
                  overflow="hidden"
                >
                  <Image
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </VStack>
    </Container>
  );
};

export default PhotoSlider;