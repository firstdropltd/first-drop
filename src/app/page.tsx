"use client"
import { AngleForward } from "@/components/SVGs"
import OurMarketTab from "@/views/AboutUs/outMarketTab"
import ProductsSlides from "@/views/AboutUs/productswiper"
import { Box, Button, CssBaseline, Divider, Typography } from "@mui/material"
import Image from "next/image"

export default function HomePage() {
  return (
    <Box className="w-full flex flex-col">
      <CssBaseline />
      <Box
        id="hero-section"
        component="div"
        className="w-full h-[824px] md:h-[900px] xl:h-[1000px] flex flex-col px-4 lg:px-4 py-4 md:py-[100px] relative bg-secondary mt-14 md:mt-1"
      >
        <Box className="w-full flex flex-col justify-start items-start lg:justify-center lg:items-center gap-6 px-2">
          <Box
            className="w-[340px] mt-16 py-[4px] pr-[10px] pl-[4px] lg:p-[2px] flex justify-start items-center gap-[6px] border border-solid rounded-full lg:rounded-[10px] border-[#D0D5DD]"
            sx={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
          >
            <Box className="w-[197px]  h-[20px] lg:h-[30px] md:w-[185px] px-[6px] py-[2px] flex justify-start items-center border border-solid rounded-full lg:rounded-[6px] border-primary gap-[6px]">
              <Box
                component="span"
                className="text-[6px] text-primary border-[3px] border-[#FE500229]"
                sx={{ boxShadow: "0px 1px 2px 0px #1018280D;" }}
              >
                &#x25CF;
              </Box>
              <Typography
                variant="caption"
                className="font-interMedium font-medium text-sm text-[#C4C4C4] text-center"
              >
                In business since 2013
              </Typography>
            </Box>
            <Typography
              variant="caption"
              className="w-[157px] font-interMedium font-medium text-sm text-[#C4C4C4] text-center"
            >
              ...serving excellence
            </Typography>
          </Box>
          <Box className="w-full flex flex-col justify-center items-center gap-6">
            <Typography
              variant="h2"
              className="w-full flex justify-center items-center flex-col gap-4 max-w-[861px] font-bold font-helveticaBold text-[36px]/[44px] md:text-[48px]/[50px] text-white text-center tracking-[0.20000000298023224px]"
            >
              From precision-crafted PET bottles to the purest, most refreshing
              water
              <Box
                component="span"
                className="w-full max-w-[608px] font-normal font-helvetica text-[18px]/[30px] text-[#C4C4C4] text-center"
              >
                We&apos;ve been dedicated to excellence, evolving from bottle
                manufacturing to the purest most refreshing water with a legacy
                of nearly a decade
              </Box>
            </Typography>
            <Box className="w-full flex-col md:flex-row flex justify-center items-center gap-4 md:gap-2 my-4">
              <Button className="w-full h-[48px] md:h-[33px] md:w-[111.64px] gap-0 rounded-[16.5px] normal-case bg-primary text-white font-medium font-helveticaMedium text-[15px]/[24px] px-[16px] py-[12px] tracking-[0.20000000298023224px]">
                Contact us
              </Button>
              <Button
                className="w-full h-[48px] md:h-[33px] md:w-[151.64px] rounded-[16.5px] bg-white gap-0 normal-case md:bg-transparent text-[#344054] md:text-white font-medium font-helveticaMedium text-[14px]/[24px] tracking-[0.2px] px-[16px] py-[12px]"
                endIcon={<AngleForward />}
              >
                View products
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: { xs: 690, sm: 600, md: 560 },
              width: "100%",
              maxWidth: 1280,
              p: { xs: "0 16px 0 16px", sm: "0 96px 0 96px" },
              background: "transparent",
            }}
          >
            <div className="relative  md:h-[0px] cursor-pointer pb-[58.51%] pt-[0px]">
              <iframe
                className="absolute inset-0 w-full h-[250px]  md:h-full rounded-2xl border-none m-0 md:p-0 aspect-video"
                src={`https://www.youtube.com/embed/ZrYTLqVvlcc?autoplay=0&color=white&fs=0&rel=0`}
                title="Wall street sense"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </Box>
        </Box>
      </Box>
      {/* SECTION TWO */}
      <Box
        component="section"
        id="our-market"
        className="w-full flex flex-col pt-[186px] lg:pt-[280px] xl:pt-[380px] pb-[8px] gap-[64px] px-4 lg:px-[75px] xxl:px-[120px]"
      >
        <Box
          component="div"
          className="w-full max-w-[1440px] flex flex-col gap-5 px-2"
        >
          <Typography
            variant="h4"
            className="w-full font-helveticaBold font-bold text-[16px] leading-6 text-left text-primary"
          >
            Our market
          </Typography>
          <Typography
            variant="h4"
            className="w-full max-w-[702px] font-helveticaBold font-bold text-[30px] leading-[38px] md:text-[36px] md:leading-[44px] tracking-[0.20000000298023224px] text-left text-text-primary"
          >
            Explore Our PET Bottle Range: Crafting Innovation and Sustainability
          </Typography>
          <Typography
            variant="h4"
            className="w-full font-helveticaLight font-light text-[18px] leading-[30px] tracking-[0.20000000298023224px] text-left text-[#475467]"
          >
            We serves a large variety of markets within the plastics industry.
          </Typography>
        </Box>
        <Box className="w-full flex">
          <OurMarketTab />
        </Box>
      </Box>
      {/* SECTION THREE */}
      <Box
        component="section"
        id="our-market"
        className="w-full overflow-hidden skew-top"
      >
        <div className="w-full flex flex-col justify-center items-center pt-[90px] md:pt-[196px] pb-[76px] lg:pb-[140px] gap-[64px] px-4 md:px-[80px] xxl:px-[96px] origin-top-right -skew-y-6  bg-secondary relative">
          <Box
            component="div"
            className="w-full max-w-[1440px] flex flex-col skew-y-6 gap-5 bg-secondary px-2"
          >
            <Box
              component="div"
              className="w-full flex flex-col lg:flex-row gap-5 bg-secondary"
            >
              <Box component="div" className="w-full flex flex-col gap-5">
                <Typography
                  variant="h4"
                  className="w-full font-helveticaBold font-bold text-[16px] leading-6 text-left text-primary"
                >
                  Our products
                </Typography>
                <Typography
                  variant="h4"
                  className="w-full max-w-[680px] font-interSemibold font-semibold text-[36px] leading-[44px] tracking-[0.20000000298023224px] text-left text-white"
                >
                  There&apos;s a portable size product for every moment in your
                  day.
                </Typography>
                <Typography
                  variant="h4"
                  className="w-full max-w-[432.68px] font-helveticaLight font-light text-[18px] leading-[30px] tracking-[0.20000000298023224px] text-left text-[#ADBDCC]"
                >
                  From portable on-the-go sizes that effortlessly fit in your
                  bag to exclusive designer bottles crafted to elevate any
                  occasion.
                </Typography>
                <Button
                  className="w-[141.64px] gap-0 rounded-[16.5px] normal-case bg-primary text-white font-medium font-helveticaMedium text-[15px]/[24px] tracking-[0.2px] my-4"
                  endIcon={<AngleForward />}
                >
                  View products
                </Button>
              </Box>
              <Image
                className="w-full h-full hidden lg:flex sm:w-[280px] sm:h-[280px] lg:w-[400px] lg:h-[320px] xl:w-[500px] xl:h-[345px] xxl:w-[540px] xxl:h-[345px] rounded-lg"
                src="/images/pouring-water.jpeg"
                width={280}
                height={280}
                alt="plastic bottle"
              />
            </Box>
            <Box className="w-full overflow-hidden skew-bottom mt-6">
              <Box component="div" className="w-full -skew-y-6 bg-transparant">
                <Box
                  component="div"
                  className="w-full skew-y-6  bg-transparant"
                >
                  <ProductsSlides />
                </Box>
              </Box>
            </Box>
            <Divider className="border-border mt-8 md:hidden" />
            <Box
              component="div"
              className="w-full max-w-[768px] mt-8 flex flex-col gap-5"
            >
              <Typography
                variant="h4"
                className="w-full max-w-[461.53px] font-interSemibold font-semibold lg:font-helveticaMedium lg:font-medium text-[23px] leading-8 tracking-[0.1px] text-left text-white"
              >
                Have a specific product in mind?
              </Typography>
              <Typography
                variant="h4"
                className="w-full max-w-[482.68px] font-inter font-normal lg:font-helveticaLight lg:font-light text-[18px] leading-[28px] tracking-[0.20000000298023224px] text-left text-white"
              >
                Curious to see where the magic happens? Schedule an appointment
                to tour our state-of-the-art factory and witness firsthand the
                craftsmanship behind our products.
              </Typography>
              <Button
                className="w-[182.64px] gap-0 rounded-[16.5px] normal-case bg-primary text-white font-medium font-helveticaMedium text-[15px]/[24px] tracking-[0.2px] mt-8"
                endIcon={<AngleForward />}
              >
                Book appointment
              </Button>
            </Box>
          </Box>
        </div>
      </Box>
    </Box>
  )
}
