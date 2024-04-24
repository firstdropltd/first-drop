"use client"
import { Box, Button, CssBaseline, Divider, Typography } from "@mui/material"
import Image from "next/image"

export default function AboutUsPage() {
  return (
    <Box className="w-full flex flex-col">
      <CssBaseline />
      <Box
        id="hero-section"
        component="div"
        className="w-full h-[583px] xl:h-[770px] xxl:h-[600px] flex flex-col pb-4 pt-[80px] px-4 lg:mt-0 md:py-[120px] relative bg-secondary"
        sx={{
          backgroundColor: "#101828",
          backgroundImage: {
            xs: "transparent",
            sm: `url("/images/product-hero.svg")`,
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box className="w-full pt-[100px] lg:pt-20 flex flex-col sm:flex-row pl-4 lg:pl-[96px] gap-6 justify-center items-center">
          <Box className="w-full flex flex-1 flex-col justify-center items-center gap-6">
            <Typography
              variant="h1"
              className="w-full max-w-[677px] flex justify-center items-center flex-col gap-4 font-medium font-helveticaMedium text-[28px] leading-[38px] md:text-[45px]/[55px] lg:text-[48px]/[60px] xxl:text-[60px]/[57px] text-white text-center sm:tracking-[-3.76px]"
            >
              First Drop aim to be the best in the market.
              <Box
                component="span"
                className="w-full max-w-[712px] font-normal font-helvetica text-[18px]/[28px] text-[#C4C4C4] text-center tracking-[0.2px]"
              >
                Our products are produced in conformity with the Standard
                Organization of Nigeria (SON), and we are fully registered with
                National Agency for Food and Drug Administration and Control
                (NAFDAC RC. 1096978).
              </Box>
              <Box className="w-full flex-col md:flex-row flex justify-center items-center gap-4 md:gap-2 my-4">
                <Button className="w-[111.64px] gap-0 rounded-[16.5px] normal-case bg-primary text-white font-medium font-helveticaMedium text-[15px]/[24px]">
                  Contact us
                </Button>
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* SECTION TWO */}
      <Box
        component="section"
        id="our-market"
        className="w-full flex flex-col pt-[86px] lg:pt-[120px] pb-[8px] gap-[64px] px-4 xl:px-[80px] xxl:px-[96px] justify-center items-center"
      >
        <Box
          component="div"
          className="w-full max-w-[1080px] flex flex-col gap-5"
        >
          <Typography
            variant="h4"
            className="w-full font-helveticaBold font-bold text-[16px] leading-6 text-left text-primary"
          >
            Why First Drop
          </Typography>
          <Typography
            variant="h4"
            className="w-full max-w-[690px] font-helveticaMedium font-medium text-[28px] xl:text-[38px] leading-[38px] xl:leading-[48px] tracking-[-0.2px] text-left text-text-primary"
          >
            Dedicated to excellence, evolving from bottle manufacturing to
            delivering the purest, most refreshing water solutions
          </Typography>
        </Box>
        <Box className="w-full max-w-[1080px] flex flex-col lg:flex-row gap-4">
          <Box
            component="div"
            className="w-full xl:w-[270px] h-[150px] xl:h-[208px] flex flex-col gap-4"
          >
            <Typography
              variant="h4"
              className="w-full flex gap-6 text-text-primary font-medium font-helveticaMedium text-sm leading-6 tracking-[0.20000000298023224px] text-left h-[24px]"
            >
              <Divider orientation="vertical" className="border-primary" /> Our
              aim
            </Typography>
            <Typography
              variant="h2"
              className="w-full xl:w-[238.31px] text-text-light font-helveticaLight font-light text-[15px]/[24px] traking-[0.20000000298023224px] text-left pl-6"
            >
              We aim to maintain long{" "}
              <span className="text-primary font-medium font-helveticaMedium">
                term relationship
              </span>{" "}
              with our customers and as thus the need the need for our customer
              are fundamental in all our work.{" "}
            </Typography>
          </Box>
          <Box className="w-full xl:w-[270px] h-[150px] xl:h-[208px] flex flex-col gap-4">
            {" "}
            <Typography
              variant="h4"
              className="w-full flex gap-6 text-text-primary font-medium font-helveticaMedium text-sm leading-6 tracking-[0.20000000298023224px] text-left h-[24px]"
            >
              <Divider orientation="vertical" className="border-primary" />
              Our commitment
            </Typography>
            <Typography
              variant="h2"
              className="w-full xl:w-[260px] text-text-light font-helveticaLight font-light text-[15px]/[24px] traking-[0.20000000298023224px] text-left pl-6"
            >
              We are commitment to our{" "}
              <span className="text-primary font-medium font-helveticaMedium">
                customers satisfaction
              </span>{" "}
              at First Drop and will continue to produce products to the highest
              quality standards that meet specification.
            </Typography>
          </Box>
          <Box className="w-full xl:w-[270px] h-[150px] xl:h-[208px] flex flex-col gap-4">
            {" "}
            <Typography
              variant="h4"
              className="w-full flex gap-6 text-text-primary font-medium font-helveticaMedium text-sm leading-6 tracking-[0.20000000298023224px] text-left h-[24px]"
            >
              <Divider orientation="vertical" className="border-primary" /> Our
              quality policy
            </Typography>
            <Typography
              variant="h2"
              className="w-full xl:w-[230.31px] text-text-light font-helveticaLight font-light text-[15px]/[24px] traking-[0.20000000298023224px] text-left pl-6"
            >
              We have established{" "}
              <span className="text-primary font-medium font-helveticaMedium">
                quality
              </span>{" "}
              policy statement appropriate for the needs of our organization and
              customers, to a continual improvement.
            </Typography>
          </Box>
          <Box className="w-full xl:w-[270px] h-[150px] xl:h-[208px] flex flex-col gap-4">
            <Typography
              variant="h4"
              className="w-full flex gap-6 text-text-primary font-medium font-helveticaMedium text-sm leading-6 tracking-[0.20000000298023224px] text-left h-[24px]"
            >
              <Divider orientation="vertical" className="border-primary" /> Our
              environment
            </Typography>
            <Typography
              variant="h2"
              className="w-full xl:w-[220.31px] text-text-light font-helveticaLight font-light text-[15px]/[24px] traking-[0.20000000298023224px] text-left pl-6"
            >
              We take our{" "}
              <span className="text-primary font-medium font-helveticaMedium">
                environmental
              </span>{" "}
              responsibilities seriously. With our research into possible uses
              of recycled materials without compromise{" "}
            </Typography>
          </Box>
        </Box>
        <Box className="w-full max-w-[1080px] flex-col md:flex-row flex justify-start items-start gap-4 md:gap-2">
          <Button className="w-[111.64px] gap-0 rounded-[16.5px] normal-case bg-primary text-white font-medium font-helveticaMedium text-[15px]/[24px]">
            Contact us
          </Button>
        </Box>
      </Box>
      {/* SECTION THREE */}
      <Box
        component="section"
        id="our-market"
        className="w-full overflow-hidden skew-top"
      >
        <Box
          className="w-full h-[1005.54px] flex flex-col justify-center items-center py-[90px]  gap-[64px] px-4 lg:px-[80px] 2xl:px-[96px] origin-top-right -skew-y-6  bg-secondary relative "
          sx={{
            backgroundColor: "#101828",
            backgroundImage: {
              xs: "transparent",
              sm: `linear-gradient(0deg, rgba(0,0,0, 0.7), rgba(16,24,40, 1)),url("/images/factory-man.png")`,
            },
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            component="div"
            className="w-full max-w-[1440px] flex flex-col skew-y-6 gap-5 bg-transparent"
          >
            <Box
              component="div"
              className="w-full flex flex-col lg:flex-row gap-5 bg-transparent"
            >
              <Box component="div" className="w-full flex flex-col gap-5">
                <Typography
                  variant="h4"
                  className="w-full font-helveticaMedium font-medium text-[17px] leading-[28px] text-left text-primary tracking-[0.20000000298023224px]"
                >
                  First Drops
                </Typography>
                <Typography
                  variant="h4"
                  className="w-full max-w-[564px] font-helveticaMedium font-medium text-[36px] leading-[48px] tracking-[-0.20000000298023224px] text-left text-white"
                >
                  Transforming PET Manufacturing and Refreshing Water
                </Typography>
                <Typography
                  variant="h4"
                  className="w-full max-w-[406.4px] font-helveticaLight font-light text-[18px] leading-[28px] tracking-[0.20000000298023224px] text-left text-[#ADBDCC]"
                >
                  At First Drops, we bring innovation and sustainability to the
                  forefront of our craft. With decades of experience in PET
                  manufacturing and delivering pure, refreshing water solutions,
                  our passion drives us to{" "}
                  <span className="text-primary font-helveticaMedium font-medium">
                    excel in every aspect of our business.
                  </span>
                </Typography>
              </Box>
            </Box>
            <Box className="w-full overflow-hidden skew-bottom mt-6">
              <Box component="div" className="w-full -skew-y-6 bg-transparant">
                <Box
                  component="div"
                  className="w-full skew-y-6  bg-transparant"
                >
                  <Box className="w-full max-w-[1080px] flex flex-col lg:flex-row lg:gap-4">
                    <Box
                      component="div"
                      className="w-full xl:w-[270px] h-[120px] flex flex-col gap-4"
                    >
                      <Typography
                        variant="h4"
                        className="w-full flex gap-6 text-white font-medium font-helveticaMedium text-[24px] leading-8 tracking-[0.10000000149011612px] text-left h-[24px]"
                      >
                        <Divider
                          orientation="vertical"
                          className="border-primary"
                        />{" "}
                        10 years+
                      </Typography>
                      <Typography
                        variant="h2"
                        className="w-full xl:w-[238.31px] text-[#ADBDCC] font-helveticaLight font-light text-[15px]/[24px] traking-[0.20000000298023224px] text-left pl-6"
                      >
                        We have cultivated a legacy of trust and reliability.
                      </Typography>
                    </Box>
                    <Box className="w-full xl:w-[270px] h-[120px] flex flex-col gap-4">
                      <Typography
                        variant="h4"
                        className="w-full flex gap-6 text-white font-medium font-helveticaMedium text-[22px] leading-8 tracking-[0.10000000149011612px] text-left h-[24px]"
                      >
                        <Divider
                          orientation="vertical"
                          className="border-primary"
                        />{" "}
                        35+
                      </Typography>
                      <Typography
                        variant="h2"
                        className="w-full xl:w-[238.31px] text-[#ADBDCC] font-helveticaLight font-light text-[15px]/[24px] traking-[0.20000000298023224px] text-left pl-6"
                      >
                        Precision-crafted PET bottles from a diverse range.
                      </Typography>
                    </Box>
                    <Box className="w-full xl:w-[270px] h-[120px] flex flex-col gap-4">
                      <Typography
                        variant="h4"
                        className="w-full flex gap-6 text-white font-medium font-helveticaMedium text-[22px] leading-8 tracking-[0.10000000149011612px] text-left h-[24px]"
                      >
                        <Divider
                          orientation="vertical"
                          className="border-primary"
                        />{" "}
                        122+
                      </Typography>
                      <Typography
                        variant="h2"
                        className="w-full xl:w-[238.31px] text-[#ADBDCC] font-helveticaLight font-light text-[15px]/[24px] traking-[0.20000000298023224px] text-left pl-6"
                      >
                        Dedicated employees behind our success.
                      </Typography>
                    </Box>
                    <Box className="w-full xl:w-[270px] h-[120px] flex flex-col gap-4">
                      <Typography
                        variant="h4"
                        className="w-full flex gap-6 text-white font-medium font-helveticaMedium text-[24px] leading-8 tracking-[0.10000000149011612px] text-left h-[24px]"
                      >
                        <Divider
                          orientation="vertical"
                          className="border-primary"
                        />{" "}
                        1000+
                      </Typography>
                      <Typography
                        variant="h2"
                        className="w-full xl:w-[238.31px] text-[#ADBDCC] font-helveticaLight font-light text-[15px]/[24px] traking-[0.20000000298023224px] text-left pl-6"
                      >
                        Unique PET bottles manufactured for customers.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
