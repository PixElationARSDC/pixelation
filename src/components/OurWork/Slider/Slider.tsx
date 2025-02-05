import React, { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./Slider.css";
import { Image, Skeleton, Box } from "@chakra-ui/react";
import { slides } from "@/data/data";

const Slider: React.FC = memo(() => {
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    Array(slides.length).fill(false)
  );

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={15}
      slidesPerView={"auto"}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      speed={1500}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} style={{ position: "relative" }}>
          <Box position="relative" width="full" height="300px">
            {!loadedImages[index] && (
              <Skeleton height="300px" width="full" rounded="lg" position="absolute" />
            )}
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              h="300px"
              width="full"
              rounded="lg"
              loading="lazy"
              onLoad={() => handleImageLoad(index)}
              style={{ visibility: loadedImages[index] ? "visible" : "hidden" }}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

export default Slider;
