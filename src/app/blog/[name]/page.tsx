"use client"
import { Box, CssBaseline, Typography } from "@mui/material"
import Image from "next/image"

const blog = {
  id: 7,
  title: "How collaboration makes us better designers",
  author: "Natali Craig",
  date: "14 Jan 2024",
  src: "/images/uiux-woman.jpeg",
  description: `How do you create compelling presentations that wow your colleagues and impress your managers? Find out with our in-depth guide on UX presentations.`,
}
export default function ProductPage() {
  return (
    <Box className="w-full flex flex-col relative pb-[96px]">
      <CssBaseline />
      <Box
        id="hero-section"
        component="div"
        className="w-full flex flex-col px-2 lg:px-4 py-4 md:py-[120px] relative bg-white mt-14 md:mt-1 gap-12"
      >
        <Box className="w-full pt-10 lg:pt-20 flex flex-col justify-center items-center gap-6 xl:gap-20">
          <Box className="w-full max-w-[1216px] flex flex-col justify-center items-center gap-2">
            <Typography
              variant="h4"
              className="w-full font-interSemibold font-semibold text-[16px] leading-6 text-left text-primary flex justify-center items-center"
            >
              Published {blog?.date}
            </Typography>
            <Typography
              variant="h1"
              className="w-full flex justify-center items-center flex-col font-bold font-helveticaBold text-[28px]/[40px] md:text-[50px]/[60px] lg:text-[48px]/[60px] xxl:text-[42px]/[58px] text-[#101828] text-left tracking-[0.2px]"
            >
              {blog?.title}
              <Box
                component="span"
                className="w-full max-w-[768px] font-normal font-helvetica text-[18px]/[28px] text-[#475467] text-center"
              >
                {blog?.description}
              </Box>
            </Typography>
          </Box>
        </Box>
        <Box className="w-full flex flex-col justify-center items-center">
          <Box className="w-full max-w-[1216px] flex flex-col justify-center items-center gap-2">
            <Image
              src={blog?.src}
              className="w-full h-[640px] rounded-[10px]"
              width={384}
              height={240}
              alt={blog.title}
            />
          </Box>
        </Box>
      </Box>
      <Box className="w-full flex flex-col justify-center items-center">
        <Box className="w-full max-w-[768px] flex flex-col justify-center items-center gap-10">
          <Box className="w-full flex flex-col gap-1">
            <Typography
              variant="h2"
              className="w-full flex justify-start items-start font-semibold font-interSemibold text-[30px]/[38px] text-[#101828] text-left"
            >
              Introduction
            </Typography>
            <Box className="w-full flex flex-col gap-3">
              <Box
                component="p"
                className="w-full flex justify-start items-start font-normal font-inter flex-col gap-4 text-[18px]/[28px] text-[#101828] text-left"
              >
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                suspendisse morbi eleifend faucibus eget vestibulum felis.
                Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                Mauris posuere vulputate arcu amet, vitae nisi, tellus
                tincidunt. At feugiat sapien varius id.
                <Box component="span">
                  Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                  volutpat mollis at volutpat lectus velit, sed auctor.
                  Porttitor fames arcu quis fusce augue enim. Quis at habitant
                  diam at. Suscipit tristique risus, at donec. In turpis vel et
                  quam imperdiet. Ipsum molestie aliquet sodales id est ac
                  volutpat.
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="w-full flex flex-col justify-center items-center">
            <Box className="w-full max-w-[1216px] flex flex-col justify-center items-center gap-2">
              <Image
                src="/images/woman-shaking-man.jpeg"
                className="w-full h-[480px] rounded-[10px]"
                width={343}
                height={240}
                alt={blog.title}
              />
            </Box>
          </Box>
          <Box className="w-full flex flex-col pt-4">
            <Typography
              variant="h2"
              className="w-full flex justify-start items-start font-semibold font-interSemibold text-2xl text-[#101828] text-left mb-[-5px]"
            >
              Software and tools
            </Typography>
            <Box
              component="p"
              className="w-full flex justify-start items-start font-normal font-inter flex-col gap-4 text-[18px]/[28px] text-[#101828] text-left"
            >
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
              posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
