import React, { memo, Suspense, lazy } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import './Slider.css'
import { Skeleton } from '@chakra-ui/react'

const Image = lazy(() => import('@chakra-ui/react').then(module => ({ default: module.Image })))

const slides = [
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiqNUoBRStleU7R6HXWi9dPkLwb1QSsIzCmyrvT",
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiqPMXpOw92Wzp0sn8LgHEleQ6u7YJmfUXT9ARr",
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiq8k86td5mUP9MYpSBJtDEuNfh5k2bewlAIvxn",
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiqjkY7mUq7lBCwoRX5LrMImTanvK3kpN0iDVuH",
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiqseTqIkLbEqQ9NDeHkIUXZF8py6JvLAn0hS2a",
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiqMS9pKaQUfiqyGL7XpEaVAh94rHguYDCx6Ink",
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiqHkpS7uyOmiaIl2zBvrZJy5XFxMVn1UhWkqtY",
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiqu4qTDty0y7PiTHskoIFrxUd5vbRgWXDwl8n2",
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiqxVuxgE9W2qEF7lTIkW0tsznKRiJULVDjc3dN",
  "https://1sh6in86sy.ufs.sh/f/MZxlz3TQUfiqSkA4MRhrziP6YaghbsDl0F39o2AnMkyx5uQW"
];

const Slider: React.FC = memo(() => {
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
          <Suspense fallback={<Skeleton height="300px" width="full" rounded="lg" />}>
            <Image src={slide} alt={`Slide ${index + 1}`} h='300px' width={'full'} rounded={'lg'} loading="lazy" />
          </Suspense>
        </SwiperSlide>
      ))}
    </Swiper>
  )
})

export default Slider