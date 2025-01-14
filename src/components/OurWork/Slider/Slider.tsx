import { Image } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import './Slider.css'

const Slider: React.FC = () => {
  const slides = [
    'https://picsum.photos/id/10/600/400',
    'https://picsum.photos/id/11/600/400',
    'https://picsum.photos/id/12/600/400',
    'https://picsum.photos/id/13/600/400',
    'https://picsum.photos/id/14/600/400',
    'https://picsum.photos/id/15/600/400',
    'https://picsum.photos/id/16/600/400',
    'https://picsum.photos/id/17/600/400',
    'https://picsum.photos/id/18/600/400',
    'https://picsum.photos/id/19/600/400',
  ]

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={15}
      slidesPerView={3}
      autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
      speed={1000}
      loop={true}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} style={{ position: 'relative' }}>
          <Image src={slide} alt={`Slide ${index + 1}`} h='300px' width={'full'} rounded={'lg'} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
