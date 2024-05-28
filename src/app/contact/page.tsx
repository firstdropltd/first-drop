"use client"
import {
  CallIcon,
  ChatIcon,
  LocationIcon,
  SupportIcon,
} from "@/components/SVGs"
import { Box, CssBaseline, Link, Typography } from "@mui/material"

export default function ProductPage() {
  return (
    <Box className="w-full flex flex-col" data-aos="fade-down">
      <CssBaseline />
      <Box
        id="contact-hero-section"
        component="div"
        className="w-full h-[1400px] xl:h-[914px] flex flex-col px-1 lg:px-4 py-4 md:py-[120px] relative bg-secondary mt-14 md:mt-1"
      >
        <Box className="w-full pt-10 lg:pt-20 flex flex-col justify-center items-center gap-8 xl:gap-20">
          <Box className="w-full flex flex-col justify-center items-center gap-2">
            <Typography
              variant="h4"
              className="w-full font-interSemibold font-semibold text-[16px] leading-6 text-left text-primary flex justify-center items-center"
            >
              Contact us
            </Typography>
            <Typography
              variant="h1"
              className="w-full flex justify-center items-center flex-col font-bold font-helveticaBold text-[36px]/[40px] md:text-[50px]/[60px] lg:text-[50px]/[65px] xxl:text-[65px]/[79px] text-white text-center tracking-[0.2px]"
            >
              We&apos;d love to hear from you
              <Box
                component="span"
                className="w-full font-normal font-helvetica text-[18px]/[28px] text-[#C4C4C4] text-center"
              >
                Our friendly team is always here to chat.
              </Box>
            </Typography>
          </Box>
          <Box className="w-full px-4  flex flex-col justify-center items-center lg:flex-row gap-4">
            <Box
              component="div"
              className="w-full xl:w-[268px] h-full xl:h-[290px] flex flex-col gap-16 bg-[#F9FAFB] p-6 hover:scale-[1.01]"
            >
              <SupportIcon />
              <Box className="w-full max-w-[238px] flex flex-col gap-[20px]">
                <Typography
                  variant="h2"
                  className="w-full text-dark font-helveticaBold font-bold text-[20px]/[30px] text-left flex flex-col gap-1"
                >
                  Chat to sales
                  <Box
                    component="span"
                    className="w-full text-[#475467] font-helvetica font-normal text-[16px]/[24px] text-left"
                  >
                    Speak to our friendly team.
                  </Box>
                </Typography>

                <Link
                  underline="hover"
                  href="mailto:firstdropsng@gmail.com"
                  className="w-full text-primary font-helveticaBold font-bold text-[16px]/[24px] text-left"
                >
                  firstdropsng@gmail.com
                </Link>
              </Box>
            </Box>
            <Box
              component="div"
              className="w-full xl:w-[268px] h-full xl:h-[290px] flex flex-col gap-16 bg-[#F9FAFB] p-6 hover:scale-[1.01]"
            >
              <ChatIcon />
              <Box className="w-full max-w-[238px] flex flex-col gap-[20px]">
                <Typography
                  variant="h2"
                  className="w-full text-dark font-helveticaBold font-bold text-[20px]/[30px] text-left flex flex-col gap-1"
                >
                  Chat to support
                  <Box
                    component="span"
                    className="w-full text-[#475467] font-helvetica font-normal text-[16px]/[24px] text-left"
                  >
                    We’re here to help.
                  </Box>
                </Typography>

                <Link
                  underline="hover"
                  href="mailto:firstdropsng@gmail.com"
                  className="w-full text-primary font-helveticaBold font-bold text-[16px]/[24px] text-left"
                >
                  firstdropsng@gmail.com
                </Link>
              </Box>
            </Box>
            <Box
              component="div"
              className="w-full xl:w-[268px] h-full xl:h-[290px] flex flex-col gap-16 bg-[#F9FAFB] p-6 hover:scale-[1.01]"
            >
              <LocationIcon />
              <Box className="w-full max-w-[238px] flex flex-col gap-[20px] justify-start items-start">
                <Typography
                  variant="h2"
                  className="w-full text-dark font-helveticaBold font-bold text-[20px]/[30px] text-left flex flex-col gap-1"
                >
                  Visit us
                  <Box
                    component="span"
                    className="w-full text-[#475467] font-helvetica font-normal text-[16px]/[24px] text-left"
                  >
                    Visit our office HQ.
                  </Box>
                </Typography>

                <Typography
                  variant="subtitle1"
                  className="w-full text-primary font-helveticaBold font-bold text-[16px]/[24px] text-left"
                >
                  Plot no 85, Sector - center F, Karmo, FCT-Abuja.
                </Typography>
              </Box>
            </Box>
            <Box
              component="div"
              className="w-full xl:w-[268px] h-full xl:h-[290px] flex flex-col gap-16 bg-[#F9FAFB] p-6 hover:scale-[1.01]"
            >
              <CallIcon />
              <Box className="w-full lg:w-[238px] flex flex-col gap-[20px]">
                <Typography
                  variant="h2"
                  className="w-full text-dark font-helveticaBold font-bold text-[20px]/[30px] text-left flex flex-col gap-1"
                >
                  Call us
                  <Box
                    component="span"
                    className="w-full text-[#475467] font-helvetica font-normal text-[16px]/[24px] text-left"
                  >
                    Mon-Fri from 8am to 5pm.
                  </Box>
                </Typography>
                <Box className="w-full flex justify-between items-start">
                  <Link
                    href="tel: +234 8033497101"
                    underline="hover"
                    className="w-[180px] text-primary font-helveticaBold font-bold text-[16px]/[24px] text-left flex flex-col gap-1"
                  >
                    +234 8033497101
                  </Link>
                  <Link
                    href="tel: +234 7038287302"
                    underline="hover"
                    className="w-[180px] text-primary font-helveticaBold font-bold text-[16px]/[24px] text-left flex flex-col gap-1"
                  >
                    +234 7038287302
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
