import { Box } from "@mui/material"
import Image from "next/image"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function ProductsSlides() {
  return (
    <Box className="relative w-full mt-4">
      <Swiper
        slidesPerView={1.1}
        spaceBetween={25}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
        modules={[Autoplay]}
      >
        <Box className="swiper-wrapper">
          {[
            {
              name: "blue plastic bottle",
              imgSrc: "/images/blue-bottle-water.jpeg",
            },
            {
              name: "dispenser plastic bottle",
              imgSrc: "/images/dispenser.jpeg",
            },
            {
              name: "green plastic bottle",
              imgSrc: "/images/green-spray-bottle.jpeg",
            },
          ].map((item, index) => (
            <SwiperSlide
              key={index}
              className="w-full h-full relative"
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                margin: 0,
              }}
            >
              <Image
                className="w-full h-[472px] sm:w-[260px] sm:h-[250px] lg:w-[350px] lg:h-[380px] xxl:w-[460.27px] xxl:h-[300px] rounded-lg"
                src={item.imgSrc}
                width={300}
                height={250}
                alt={item.name}
              />
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>
    </Box>
  )
}
