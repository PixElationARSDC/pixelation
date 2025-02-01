import { Image } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import './Slider.css'

const Slider: React.FC = () => {
  const slides = [
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiqIroFYLJNUtJLwMNhrRFHeBSKGfE0gvVsim54",
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiq4yxNluFw42nWEea1k5KJxb0B6Cz3VGPhUNTA",
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiq8k86td5mUP9MYpSBJtDEuNfh5k2bewlAIvxn",
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiqjkY7mUq7lBCwoRX5LrMImTanvK3kpN0iDVuH",
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiqseTqIkLbEqQ9NDeHkIUXZF8py6JvLAn0hS2a",
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiqMS9pKaQUfiqyGL7XpEaVAh94rHguYDCx6Ink",
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiqHkpS7uyOmiaIl2zBvrZJy5XFxMVn1UhWkqtY",
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiqu4qTDty0y7PiTHskoIFrxUd5vbRgWXDwl8n2",
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiqxVuxgE9W2qEF7lTIkW0tsznKRiJULVDjc3dN",
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiqSkA4MRhrziP6YaghbsDl0F39o2AnMkyx5uQW"
];


  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={15}
      slidesPerView={3}
      autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
      speed={1000}
      loop={true}
      className='myswiper'
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
