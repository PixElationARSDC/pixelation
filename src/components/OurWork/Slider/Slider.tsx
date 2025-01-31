import { Image } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import './Slider.css'

const Slider: React.FC = () => {
  const slides = [
  "https://rhs25qyoh1.ufs.sh/f/0ymxA19g3Q7l8F5Q2hMZWnBoDKpXQvSwACf5aMGkcOYJh1u9",
  "https://rhs25qyoh1.ufs.sh/f/0ymxA19g3Q7l7kEBKdmyHpeIKFQziBkcD2Ydr80sR19fn3xU",
  "https://rhs25qyoh1.ufs.sh/f/0ymxA19g3Q7lmIX5MANjawZJ3I5rtu0T2fRSAlenFMv4b7xh",
  "https://rhs25qyoh1.ufs.sh/f/0ymxA19g3Q7ljPvFR4taw0ZMbDpg7CnAQPRiUxtHerOzW6mG",
  "https://rhs25qyoh1.ufs.sh/f/0ymxA19g3Q7lcqdh2TB1rGY7WuNxCBgf0DyeUZAtTSLshlQJ",
  "https://rhs25qyoh1.ufs.sh/f/0ymxA19g3Q7lKMdw9aG5lB14CFgbUadNHcxAv9hRZMnTe7Pz",
  "https://rhs25qyoh1.ufs.sh/f/0ymxA19g3Q7l4wL4m9CJvWGgL8OY30y7S962Qu1npEXfoCdk",
  "https://rhs25qyoh1.ufs.sh/f/0ymxA19g3Q7lBltfduSrS4GdHeQb8tzElna3IKvFUfTxZWOs",
  "https://rhs25qyoh1.ufs.sh/f/0ymxA19g3Q7l4ooAtbCJvWGgL8OY30y7S962Qu1npEXfoCdk",
  "https://rhs25qyoh1.ufs.sh/f/0ymxA19g3Q7lhWUUkO3CpijG1WVLYowE6Jarz2uO4fZIhxSR"
]


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
