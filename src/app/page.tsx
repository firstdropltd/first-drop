"use client"
import { AngleForward } from "@/components/SVGs"
import OurMarketTab from "@/views/AboutUs/outMarketTab"
import ProductsSlides from "@/views/AboutUs/productswiper"
import HomePageImageSlides from "@/views/Home"
import { Box, Button, CssBaseline, Divider, Typography } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()
  return (
    <Box className="w-full flex flex-col">
      <CssBaseline />
      <Box
        id="hero-section"
        component="div"
        className="w-full h-[824px] md:h-[900px] xl:h-[1000px] flex flex-col px-4 lg:px-4 py-4 md:py-[100px] relative bg-secondary mt-14 md:mt-1"
        data-aos="fade-down"
      >
        <Box className="w-full flex flex-col justify-start items-start lg:justify-center lg:items-center gap-6 px-2">
          <Box
            className="w-[340px] mt-16 py-[4px] pr-[10px] pl-[4px] lg:p-[2px] flex justify-start items-center gap-[6px] border border-solid rounded-full lg:rounded-[10px] border-[#D0D5DD]"
            sx={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
            data-aos="fade-left"
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
              className="w-full flex justify-center items-center flex-col gap-4 max-w-[861px] font-bold font-helveticaBold text-[34px]/[44px] md:text-[48px]/[50px] text-white text-center tracking-[0.20000000298023224px]"
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
            <Box
              className="w-full flex-col md:flex-row flex justify-center items-center gap-6 md:gap-2 my-4"
              data-aos="fade-down"
            >
              <Button
                className="w-full h-[48px] md:h-[33px] md:w-[111.64px] gap-0 rounded-[16.5px] normal-case bg-primary text-white font-medium font-helveticaMedium text-[15px]/[24px] px-[16px] py-[12px] tracking-[0.20000000298023224px] hover:scale-[1.02]"
                onClick={() => router.push("/contact")}
              >
                Contact us
              </Button>
              <Button
                className="w-full h-[48px] md:h-[33px] md:w-[151.64px] rounded-[16.5px] bg-white gap-0 normal-case md:bg-transparent text-[#344054] md:text-white font-medium font-helveticaMedium text-[14px]/[24px] tracking-[0.2px] px-[16px] py-[12px] hover:scale-[1.02]"
                endIcon={<AngleForward />}
                onClick={() => router.push("/products")}
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
              maxWidth: { xs: 1100, xl: 1216 },
              height: "100%",
              maxHeight: 564,
              p: { xs: "0 16px 0 16px", sm: "0 96px 0 96px", md: 0 },
              background: "transparent",
            }}
          >
            <div className="relative md:h-[0px] cursor-pointer pb-[58.51%] pt-[0px]">
              <iframe
                className="absolute inset-0 w-full h-[250px] md:h-full rounded-[15px] border-none m-0 md:p-0 aspect-video"
                src={`https://www.youtube.com/embed/ZrYTLqVvlcc?autoplay=0&color=white&fs=0&rel=0`}
                title="first drop nigeria limited"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </Box>
        </Box>
      </Box>
      {/* SECTION TWO */}
      <section
        id="our-market"
        className="w-full relative flex flex-col pt-[186px] lg:pt-[280px] xl:pt-[500px] xxl:pt-[580px] gap-[64px] px-4 lg:px-[75px] xxl:px-[128px] pb-[-250px]"
        data-aos="fade-up"
      >
        <div className="w-full max-w-[1440px] flex flex-col gap-5 px-2">
          <h4 className="w-full font-helveticaBold font-bold text-[16px] leading-6 text-left text-primary">
            Our Company
          </h4>
          <h4 className="w-full max-w-[746px] font-helveticaBold font-bold text-[30px]/[38px] md:text-[36px] md:leading-[44px] tracking-[0.20000000298023224px] text-left text-text-primary">
            First Drops Nigeria Limited is registered under the laws of the
            company and allied matters Decree 1990 with company registration no.
            RC. 1096978
          </h4>
          <h4 className="w-full max-w-[730px] font-helveticaLight font-light text-[18px]/[30px] tracking-[0.20000000298023224px] text-left text-[#475467]">
            First Drops Nigeria Limited is an indigenous company owned by a
            Nigerian. Since its registration in 2013, it has been in the
            business of table water and plastic product production.
          </h4>
        </div>
        <OurMarketTab />
        <div className="w-full flex flex-col gap-8 md:gap-12 mt-[186px] lg:mt-[280px] xl:mt-[84px] xxl:mt-[96px] -mb-[120px] xl:-mb-[200px] shadow-[0px_0px_0px_1px_#0000000D,0px_40px_32px_0px_#00000005,0px_22px_18px_0px_#0000000A] pl-[20px] xl:pl-[40px] pt-[40px] pb-[140px] xl:pt-[80px] xl:pb-[240px]">
          <div className="w-full flex flex-col gap-1">
            <div className="max-w-[564px] h-[44px] md:h-[54px] flex items-center gap-[34px]">
              <Divider
                orientation="vertical"
                className="border-primary border-[3px] h-full"
              />{" "}
              <h4 className="w-full h-full font-helveticaBold font-bold text-[20px]/[22px] sm:text-[23px]/[22px] text-left text-text-primary">
                First Drops&apos;s bottled water:
                <span className="block">Proudly Nigerian.</span>
              </h4>
            </div>
            <h4 className="w-full max-w-[428px] font-helveticaLight font-light text-[18px] leading-[30px] tracking-[0.20000000298023224px] text-[#475467] text-left">
              We’re honored to be the bottled water that keeps our nation&apos;s
              leaders, like Billionaire, foremost, entrepreneur and investor Mr.
              Femi Otedola hydrated.
            </h4>
          </div>
          <HomePageImageSlides />
        </div>
      </section>
      {/* SECTION THREE */}
      <Box
        component="section"
        id="our-market"
        className="w-full overflow-hidden skew-top"
        data-aos="fade-up"
      >
        <div className="w-full flex flex-col justify-center items-center pt-[90px] md:pt-[196px] pb-[76px] lg:pb-[140px] gap-[64px] px-4 md:px-[80px] xxl:px-[96px] origin-top-right -skew-y-6  bg-secondary relative">
          <Box
            component="div"
            className="w-full max-w-[1440px] flex flex-col skew-y-6 gap-5 bg-secondary px-2"
          >
            <Box className="w-full flex-col lg:flex-row flex justify-between relative gap-16">
              <Box
                className="w-full md:w-1/2 max-w-[610px] flex flex-col gap-8"
                data-aos="fade-right"
              >
                <Typography
                  variant="h4"
                  className="w-full font-helveticaBold font-bold text-[16px] leading-6 text-left text-primary"
                >
                  Our products
                </Typography>
                <Typography
                  variant="h4"
                  className="w-full max-w-[680px] font-interSemibold font-semibold text-[36px]/[44px] xxl:text-[40px]/[48px] tracking-[-0.02em] text-left text-white"
                >
                  There&apos;s a portable size product for every moment in your
                  day.
                </Typography>
                <Typography
                  variant="h4"
                  className="w-full max-w-[536px] font-helveticaLight font-light text-[18px]/[28px] text-left text-white"
                >
                  From portable on-the-go sizes that effortlessly fit in your
                  bag to exclusive designer bottles crafted to elevate any
                  occasion.
                </Typography>
                <Box className="w-full  flex flex-col md:flex-row gap-2 md:gap-12">
                  <Box component="div">
                    <Typography className="w-full max-w-[230px] font-helveticaLight font-light  xl:text-[18px]/[28px] text-left text-[#ADBDCC] tracking-[0.20000000298023224px]">
                      1. 20 Litres Dispenser water
                    </Typography>
                    <Typography className="w-full max-w-[230px] font-helveticaLight font-light text-[18px]/[28px] text-left text-[#ADBDCC] tracking-[0.20000000298023224px]">
                      2. 10 Litres Dispenser water
                    </Typography>{" "}
                    <Typography className="w-full max-w-[230px] font-helveticaLight font-light text-[18px]/[28px] text-left text-[#ADBDCC] tracking-[0.20000000298023224px]">
                      3. 75cl Bottle water
                    </Typography>{" "}
                    <Typography className="w-full max-w-[230px] font-helveticaLight font-light text-[18px]/[28px] text-left text-[#ADBDCC] tracking-[0.20000000298023224px]">
                      4. 50cl Bottle water
                    </Typography>
                    <Typography className="w-full max-w-[230px] font-helveticaLight font-light text-[18px]/[28px] text-left text-[#ADBDCC] tracking-[0.20000000298023224px]">
                      5. Plastic Spoons
                    </Typography>
                    <Typography className="w-full max-w-[230px] font-helveticaLight font-light text-[18px]/[28px] text-left text-[#ADBDCC] tracking-[0.20000000298023224px]">
                      6. Plastic fork
                    </Typography>
                  </Box>
                  <Box component="div">
                    <Typography className="w-full max-w-[256px] font-helveticaLight font-light text-[18px]/[28px] text-left text-[#ADBDCC] tracking-[0.20000000298023224px]">
                      7. Plastic plates (party packs)
                    </Typography>
                    <Typography className="w-full max-w-[230px] font-helveticaLight font-light text-[18px]/[28px] text-left text-[#ADBDCC] tracking-[0.20000000298023224px]">
                      8. 4 Litres gallons
                    </Typography>{" "}
                    <Typography className="w-full max-w-[230px] font-helveticaLight font-light text-[18px]/[28px] text-left text-[#ADBDCC] tracking-[0.20000000298023224px]">
                      9. 25 Litres gallons
                    </Typography>{" "}
                    <Typography className="w-full max-w-[230px] font-helveticaLight font-light text-[18px]/[28px] text-left text-[#ADBDCC] tracking-[0.20000000298023224px]">
                      10. Santana Nylon
                    </Typography>
                    <Typography className="w-full max-w-[230px] font-helveticaLight font-light text-[18px]/[28px] text-left text-[#ADBDCC] tracking-[0.20000000298023224px]">
                      11. Foundation Nylon
                    </Typography>
                    <Typography className="w-full max-w-[230px] font-helveticaLight font-light text-[18px]/[28px] text-left text-[#ADBDCC] tracking-[0.20000000298023224px]">
                      12. Shopping bags, etc
                    </Typography>
                  </Box>
                </Box>
                <Button
                  className="w-[141.64px] gap-0 rounded-[16.5px] normal-case bg-primary text-white font-medium font-helveticaMedium text-[15px]/[24px] tracking-[0.2px] my-4 hover:scale-[1.02]"
                  endIcon={<AngleForward />}
                  onClick={() => router.push("/products")}
                >
                  View products
                </Button>
              </Box>
              <Box
                className="w-full md:w-1/2  flex xxl:ml-[140px]"
                data-aos="fade-left"
              >
                <Image
                  className="w-full h-full hidden lg:flex sm:w-[280px] sm:h-[280px] lg:w-[400px] lg:h-[320px] xl:w-[442px] xl:h-[408px] xxl:w-[504px] xxl:h-[458px] rounded-[10px] md:mt-6 lg:ml-12  xxl:ml-16"
                  src="/images/water-bottle.jpeg"
                  width={504}
                  height={458}
                  alt="plastic bottle"
                  loading="lazy"
                />
              </Box>
            </Box>

            {/* //Other part */}
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
              className="w-full max-w-[768px] mt-8 md:mt-20 flex flex-col gap-5"
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
                className="w-[182.64px] gap-0 rounded-[16.5px] normal-case bg-primary text-white font-medium font-helveticaMedium text-[15px]/[24px] tracking-[0.2px] mt-8 hover:scale-[1.02]"
                endIcon={<AngleForward />}
                onClick={() => router.push("/contact")}
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
