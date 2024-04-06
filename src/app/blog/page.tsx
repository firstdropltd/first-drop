"use client"
import OurBlogs from "@/views/Blog/page"
import { Box, CssBaseline, Typography } from "@mui/material"

export default function ProductPage() {
  return (
    <Box className="w-full flex flex-col relative">
      <CssBaseline />
      <Box
        id="hero-section"
        component="div"
        className="w-full h-[250px] xl:h-[482px] flex flex-col px-2 lg:px-4 py-4 md:py-[120px] relative bg-secondary mt-14 md:mt-1"
      >
        <Box className="w-full pt-10 lg:pt-20 flex flex-col justify-center items-center gap-6 xl:gap-20">
          <Box className="w-full flex flex-col justify-center items-center gap-2">
            <Typography
              variant="h4"
              className="w-full font-interSemibold font-semibold text-[16px] leading-6 text-left text-primary flex justify-center items-center"
            >
              Our blog
            </Typography>
            <Typography
              variant="h1"
              className="w-full flex justify-center items-center flex-col font-bold font-helveticaBold text-[28px]/[40px] md:text-[50px]/[60px] lg:text-[50px]/[65px] xxl:text-[65px]/[79px] text-white text-left tracking-[0.2px]"
            >
              Stories and interviews at First Drops
              <Box
                component="span"
                className="w-full max-w-[768px] font-normal font-helvetica text-[18px]/[28px] text-[#C4C4C4] text-center"
              >
                Discover a Cascade of Insights: Stay Updated with the Latest
                Stories and Exclusive Interviews at First Drops Blog
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        id="blog-section"
        component="div"
        className="relative top-[-80px] w-full flex flex-col justify-center items-center px-2 lg:px-4 py-4 md:py-[40px]"
      >
        <OurBlogs />
      </Box>
    </Box>
  )
}
