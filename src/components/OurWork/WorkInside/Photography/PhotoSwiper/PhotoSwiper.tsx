import { Box, Container, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '/slider1.jpg';
import slider2 from '/slider2.jpg';
import slider3 from '/slider3.jpg';
import slider4 from '/slider4.jpg';
import './PhotoSwiper.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const images = [
    {
      src: slider1,
      alt: 'slider1 Image'
    },
    {
      src: slider2,
      alt: 'Architecture Image'
    },
    {
      src: slider3,
      alt: 'Portrait Image'
    },
    {
      src: slider4,
      alt: 'Sunset Image'
    }
  ];

  return (
    <Box bg="black" py={3}>
      <Container maxW="container.xl" px={{ base: 2, md: 4 }}>
        <Box
          css={{
            '.slick-slide': {
              padding: '0 6px',
            },
            '.slick-list': {
              margin: '0 -6px',
            },
            '.slick-track': {
              display: 'flex',
              gap: '3px',
            },
            '.slick-dots': {
              bottom: '-20px',
            },
            '.slick-dots li button:before': {
              color: 'white',
            },
            '.slick-dots li.slick-active button:before': {
              color: 'white',
            }
          }}
        >
          <Slider {...settings}>
            {images.map((image, index) => (
              <Box
                key={index}
                position="relative"
                height={{ base: "400px", md: "500px" }}
                overflow="hidden"
                borderRadius="2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  transition="transform 0.3s ease"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default ImageSlider;