import { Box } from "@mui/material"
import Image from "next/image"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function HomePageImageSlides() {
  return (
    <Box className="w-full">
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
            slidesPerView: 3.1,
            spaceBetween: 0,
          },
          1560: {
            slidesPerView: 3.2,
            spaceBetween: 0,
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
              name: "otedola opening water bottle",
              imgSrc: "/images/otedola-image1.jpeg",
            },
            {
              name: "otedola pouring water",
              imgSrc: "/images/otedola-image2.jpeg",
            },
            {
              name: "otedola closing water bottle",
              imgSrc: "/images/otedola-image3.jpeg",
            },
            {
              name: "otedola holding water bottle",
              imgSrc: "/images/otedola-image4.jpeg",
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
                className="w-full h-[352px] sm:w-[260px] sm:h-[250px] lg:w-[339px] lg:h-[308px] xxl:w-[429px] xxl:h-[388px] rounded-lg aspect-square"
                src={item.imgSrc}
                width={389}
                height={358}
                alt={item.name}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>
    </Box>
  )
}
