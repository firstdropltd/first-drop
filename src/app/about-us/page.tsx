"use client"
import { Box, Button, CssBaseline, Divider, Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import { CountUp } from "use-count-up"

export default function AboutUsPage() {
  const router = useRouter()
  return (
    <Box className="w-full flex flex-col" data-aos="fade-down">
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
              className="w-full max-w-[582px] flex justify-center items-center flex-col gap-4 font-medium font-helveticaMedium text-[28px] leading-[38px] md:text-[45px]/[55px] lg:text-[48px]/[57px] xl:text-[60px]/[57px] text-white text-center sm:tracking-[-3.76px]"
            >
              First Drop aim to be the best in the market.
            </Typography>
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
              <Button
                className="w-[111.64px] gap-0 rounded-[16.5px] normal-case bg-primary text-white font-medium font-helveticaMedium text-[15px]/[24px] hover:scale-[1.02]"
                onClick={() => router.push("/contact")}
              >
                Contact us
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* SECTION TWO */}
      <Box
        component="section"
        id="our-market"
        className="w-full flex flex-col pt-[86px] lg:pt-[120px] pb-[8px] gap-[64px] px-4 xl:px-[80px] xxl:px-[96px] justify-center items-center"
        data-aos="fade-up"
      >
        <Box
          component="div"
          className="w-full max-w-[1243px] flex flex-col gap-5"
        >
          <Typography
            variant="h4"
            className="w-full font-helveticaBold font-bold text-[16px] leading-6 text-left text-primary"
          >
            Our Commitment
          </Typography>
          <Typography
            variant="h4"
            className="w-full max-w-[690.06px] font-helveticaMedium font-medium text-[28px] xl:text-[38px] leading-[38px] xl:leading-[48px] tracking-[-0.2px] text-left text-text-primary"
          >
            Dedicated to excellence, evolving from bottle manufacturing to
            delivering the purest, most refreshing water solutions
          </Typography>
        </Box>
        <Box className="w-full max-w-[1243px] flex flex-col lg:flex-row gap-4 xxl:gap-8 justify-between">
          <Box
            component="div"
            className="w-full xl:w-[246.31px]  h-[150px] xl:h-[208px] flex flex-col gap-4"
          >
            <Typography
              variant="h4"
              className="w-full flex gap-4 text-text-primary font-medium font-helveticaMedium text-sm leading-6 tracking-[0.20000000298023224px] text-left h-[24px]"
            >
              <Divider
                orientation="vertical"
                className="border-primary border-[1.11px]"
              />{" "}
              Our aim
            </Typography>
            <Typography
              variant="h2"
              className="w-full text-text-light font-helveticaLight font-light text-[15px]/[24px] traking-[0.20000000298023224px] text-left pl-6"
            >
              We aim to maintain long term relationships with our customers and
              as thus the needs of our customers are fundamental in all work
              that we undertake.
            </Typography>
          </Box>
          <Box className="w-full xl:w-[292px]  h-[150px] xl:h-[208px] flex flex-col gap-4">
            <Typography
              variant="h4"
              className="w-full flex gap-6 text-text-primary font-medium font-helveticaMedium text-sm leading-6 tracking-[0.20000000298023224px] text-left h-[24px]"
            >
              <Divider
                orientation="vertical"
                className="border-primary border-[1.11px]"
              />
              Our commitment
            </Typography>
            <Typography
              variant="h2"
              className="w-full text-text-light font-helveticaLight font-light text-[15px]/[24px] traking-[0.20000000298023224px] text-left pl-6"
            >
              We are committed to Customer satisfaction at First Drops Nig Ltd
              and will continue to produce products of the highest quality
              standards that meet specifications. We are committed to prompt and
              efficient delivery of services.
            </Typography>
          </Box>
          <Box className="w-full xl:w-[279px]  h-[150px] xl:h-[208px] flex flex-col gap-4">
            {" "}
            <Typography
              variant="h4"
              className="w-full flex gap-6 text-text-primary font-medium font-helveticaMedium text-sm leading-6 tracking-[0.20000000298023224px] text-left h-[24px]"
            >
              <Divider
                orientation="vertical"
                className="border-primary border-[1.11px]"
              />{" "}
              Our quality policy
            </Typography>
            <Typography
              variant="h2"
              className="w-full text-text-light font-helveticaLight font-light text-[15px]/[24px] traking-[0.20000000298023224px] text-left pl-6"
            >
              The company has an established Quality policy statement
              appropriate for the needs of the organization and its customers,
              which includes our commitment to continual improvement and
              enhancing customer satisfaction.
            </Typography>
          </Box>
          <Box className="w-full xl:w-[313px] h-[150px] xl:h-[208px] flex flex-col gap-4">
            <Typography
              variant="h4"
              className="w-full flex gap-6 text-text-primary font-medium font-helveticaMedium text-sm leading-6 tracking-[0.20000000298023224px] text-left h-[24px]"
            >
              <Divider
                orientation="vertical"
                className="border-primary border-[1.11px]"
              />{" "}
              Our environment
            </Typography>
            <Typography
              variant="h2"
              className="w-full text-text-light font-helveticaLight font-light text-[15px]/[24px] traking-[0.20000000298023224px] text-left pl-6"
            >
              First Drops Nig Ltd takes its environmental responsibilities
              seriously. This reflects on our research into the possible uses of
              recycled materials without compromising standard together with our
              program of minimizing production waste.
            </Typography>
          </Box>
        </Box>
        <Box className="w-full max-w-[1243px] flex-col md:flex-row flex justify-start items-start gap-4 md:gap-2 mt-[-40px]">
          <Button
            className="w-[111.64px] gap-0 rounded-[16.5px] normal-case bg-primary text-white font-medium font-helveticaMedium text-[15px]/[24px] hover:scale-[1.02]"
            onClick={() => router.push("/contact")}
          >
            Contact us
          </Button>
        </Box>
      </Box>
      {/* SECTION THREE */}
      <Box
        component="section"
        id="our-market"
        className="w-full overflow-hidden skew-top"
        data-aos="fade-up"
      >
        <Box
          className="w-full h-full md:h-[1005.54px] flex flex-col justify-center items-center py-[90px]  gap-[64px] px-4 lg:px-[80px] 2xl:px-[96px] origin-top-right -skew-y-6  bg-secondary relative "
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
                  Product Range
                </Typography>
                <Box className="w-full flex flex-col md:flex-row gap-8">
                  <Box
                    component="div"
                    className="w-full max-w-[650px] flex flex-col gap-4"
                  >
                    <Typography className="w-full max-w-[280px] font-helveticaLight font-light text-[18px]/[28px] tracking-[-0.20000000298023224px] text-left text-white uppercase">
                      Plastic and PET Production
                    </Typography>
                    <Box component="ul" className="m-0 ml-4 p-0">
                      <Box
                        component="li"
                        className="w-full font-helveticaLight font-light text-[18px]/[28px] tracking-[-0.20000000298023224px] text-left text-white normal-case"
                      >
                        PREFORMS - Various sizes
                      </Box>
                      <Box
                        component="li"
                        className="w-full font-helveticaLight font-light text-[18px]/[28px] tracking-[-0.20000000298023224px] text-left text-white normal-case"
                      >
                         HD/LDPE/PP Plastic containers - Generic and customized
                      </Box>
                      <Box
                        component="li"
                        className="w-full font-helveticaLight font-light text-[18px]/[28px] tracking-[-0.20000000298023224px] text-left text-white normal-case"
                      >
                        CAP/CLOSURES - Generic and customized
                      </Box>
                      <Box
                        component="li"
                        className="w-full font-helveticaLight font-light text-[18px]/[28px] tracking-[-0.20000000298023224px] text-left text-white normal-case"
                      >
                         Branding of bottles, client’s materials for ceremonies
                        and events
                      </Box>
                      <Box
                        component="li"
                        className="w-full font-helveticaLight font-light text-[18px]/[28px] tracking-[-0.20000000298023224px] text-left text-white normal-case"
                      >
                         Recycling of bottles and bags
                      </Box>
                      <Box
                        component="li"
                        className="w-full font-helveticaLight font-light text-[18px]/[28px] tracking-[-0.20000000298023224px] text-left text-white normal-case"
                      >
                        Printing of nylon films (pure water) Rasing and cutting
                        of nylon materials
                      </Box>
                      <Box
                        component="li"
                        className="w-full font-helveticaLight font-light text-[18px]/[28px] tracking-[-0.20000000298023224px] text-left text-white normal-case"
                      >
                        Preform (moulding) production with client’s materials
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    className="w-full max-w-[361px] flex flex-col gap-4"
                  >
                    <Typography className="w-full max-w-[280px] font-helveticaLight font-light text-[18px]/[28px] tracking-[-0.20000000298023224px] text-left text-white uppercase">
                      Water Products
                    </Typography>
                    <Typography className="w-full font-helveticaLight font-light text-[18px]/[28px] tracking-[-0.20000000298023224px] text-left text-white normal-case">
                      All our products can be customized to suit specific
                      requirements; these are part of our journey right from the
                      idea stage to execution.
                    </Typography>
                  </Box>
                </Box>
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
                      className="w-full h-[100px] xl:w-[270px] md:h-[120px] flex flex-col gap-1 md:gap-4"
                    >
                      <Typography
                        variant="h4"
                        className="w-full flex  gap-4 md:gap-6 text-white font-medium font-helveticaMedium text-[24px] leading-8 tracking-[0.10000000149011612px] text-left h-[24px]"
                      >
                        <Divider
                          orientation="vertical"
                          className="border-primary border-[1.1px]"
                        />{" "}
                        <CountUp
                          isCounting
                          end={11}
                          duration={3.2}
                          easing="linear"
                        />{" "}
                        years+
                      </Typography>
                      <Typography
                        variant="h2"
                        className="w-[238.31px] text-[#ADBDCC] font-helveticaLight font-light text-[15px]/[24px] traking-[0.20000000298023224px] text-left pl-6"
                      >
                        We have cultivated a legacy of trust and reliability.
                      </Typography>
                    </Box>
                    <Box
                      component="div"
                      className="w-full h-[100px] xl:w-[270px] md:h-[120px] flex flex-col gap-1 md:gap-4"
                    >
                      <Typography
                        variant="h4"
                        className="w-full flex  gap-4 md:gap-6 text-white font-medium font-helveticaMedium text-[24px] leading-8 tracking-[0.10000000149011612px] text-left h-[24px]"
                      >
                        <Divider
                          orientation="vertical"
                          className="border-primary border-[1.1px]"
                        />{" "}
                        <CountUp
                          isCounting
                          end={35}
                          duration={3.2}
                          easing="linear"
                        />
                        +
                      </Typography>
                      <Typography
                        variant="h2"
                        className="w-[238.31px] text-[#ADBDCC] font-helveticaLight font-light text-[15px]/[24px] traking-[0.20000000298023224px] text-left pl-6"
                      >
                        Precision-crafted PET bottles from a diverse range.
                      </Typography>
                    </Box>
                    <Box
                      component="div"
                      className="w-full h-[100px] xl:w-[270px] md:h-[120px] flex flex-col gap-1 md:gap-4"
                    >
                      <Typography
                        variant="h4"
                        className="w-full flex  gap-4 md:gap-6 text-white font-medium font-helveticaMedium text-[24px] leading-8 tracking-[0.10000000149011612px] text-left h-[24px]"
                      >
                        <Divider
                          orientation="vertical"
                          className="border-primary border-[1.1px]"
                        />{" "}
                        <CountUp
                          isCounting
                          end={122}
                          duration={3.2}
                          easing="linear"
                        />
                        +
                      </Typography>
                      <Typography
                        variant="h2"
                        className="w-[238.31px] text-[#ADBDCC] font-helveticaLight font-light text-[15px]/[24px] traking-[0.20000000298023224px] text-left pl-6"
                      >
                        Dedicated employees behind our success.
                      </Typography>
                    </Box>
                    <Box
                      component="div"
                      className="w-full h-[100px] xl:w-[270px] md:h-[120px] flex flex-col gap-1 md:gap-4"
                    >
                      <Typography
                        variant="h4"
                        className="w-full flex  gap-4 md:gap-6 text-white font-medium font-helveticaMedium text-[24px] leading-8 tracking-[0.10000000149011612px] text-left h-[24px]"
                      >
                        <Divider
                          orientation="vertical"
                          className="border-primary border-[1.1px]"
                        />{" "}
                        <CountUp
                          isCounting
                          end={1000}
                          duration={3.2}
                          easing="linear"
                        />
                        +
                      </Typography>
                      <Typography
                        variant="h2"
                        className="w-[238.31px] text-[#ADBDCC] font-helveticaLight font-light text-[15px]/[24px] traking-[0.20000000298023224px] text-left pl-6"
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
