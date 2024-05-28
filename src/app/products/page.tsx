"use client"
import OurProductsTab from "@/views/products/outProducts"
import { Box, CssBaseline, Typography } from "@mui/material"

export default function ProductPage() {
  return (
    <Box className="w-full flex flex-col" data-aos="fade-down">
      <CssBaseline />
      <Box
        id="products-hero-section"
        component="div"
        className="w-full h-[340px] xl:h-[482px] flex flex-col px-2 lg:px-4 py-8 md:py-[120px] relative bg-secondary mt-14 md:mt-1"
      >
        <Box className="w-full pt-10 lg:pt-20 flex flex-col justify-center items-center gap-6 xl:gap-20">
          <Box className="w-full flex flex-col justify-center items-center gap-2">
            <Typography
              variant="h4"
              className="w-full font-interSemibold font-semibold text-[16px] leading-6 text-left text-primary pt-2 flex justify-center items-center"
            >
              Product Categories
            </Typography>
            <Typography
              variant="h1"
              className="w-full flex justify-center items-center flex-col font-bold font-helveticaBold text-[36px]/[60px] md:text-[50px]/[60px] xxl:text-[40px]/[60px] text-white text-center tracking-[0.2px]"
            >
              Find the perfect products you need
              <Box
                component="span"
                className="w-full font-normal font-helvetica text-[18px]/[28px] text-[#C4C4C4] text-center"
              >
                Explore our wide selection of product category to meet all your
                needs.
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        id="product-section"
        component="div"
        className="w-full flex flex-col justify-center items-center px-2 lg:px-4 py-4 md:py-[40px]"
      >
        <OurProductsTab />
      </Box>
    </Box>
  )
}
