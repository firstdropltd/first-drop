"use client"
import { CloseIcon, MenuIcon } from "@/components/SVGs"
import { Colors } from "@/components/Theme/colors"
import { Fonts } from "@/components/Theme/font"
import {
  Box,
  Button,
  CssBaseline,
  Drawer,
  Grid,
  IconButton,
  Link,
  List,
  Toolbar,
  Typography,
  styled,
} from "@mui/material"
import AppBar from "@mui/material/AppBar"
import AOS from "aos"
import "aos/dist/aos.css"
import type { Metadata } from "next"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import React from "react"
import "./globals.css"

function updateKey(str: string) {
  if (typeof str !== "string") return ""
  const regex = / /g
  const newStr = str.toLowerCase()
  const update = newStr.replace(regex, "-")
  return update
}
const menu = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/about-us" },
  { name: "Products", link: "/products" },
  // { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
]
export const StyledList = styled(List)({
  display: "flex",
  cursor: "pointer",
  gap: 4,
  "& .MuiListItemButton-root": {
    width: "100%",
    backgroundColor: `transparent !important`,
    color: "#F0F2F5",
    font: `normal normal 400 normal 14px/20.3px ${Fonts.primary}`,
    display: "inline-flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    cursor: "pointer",
    borderRadius: 8,
    padding: "8px 12px",
    "&:focused": {
      backgroundColor: `transparent`,
      color: Colors.primary,
    },
    "&:hover": {
      backgroundColor: `transparent`,
      color: Colors.primary,
    },
  },
  "& .Mui-selected": {
    width: "100%",
    backgroundColor: `${Colors.primary} !important`,
    color: "#F0F2F5 !important",
    "&:focused": {
      backgroundColor: `${Colors.primary} !important`,
      color: "#F0F2F5 !important",
    },
    "&:hover": {
      backgroundColor: `${Colors.primary} !important`,
      color: "#F0F2F5",
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
})
export const metadata: Metadata = {
  title: "First drop",
  description: "First drop nigeria limited",
}

export default function HomePageLayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const router = useRouter()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const today = new Date()
  const year = today.getFullYear()

  React.useEffect(() => {
    AOS.init({
      duration: 1100,
      once: false,
    })
  }, [])
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  const handleClick = (item: { name: string; link: string }, index: number) => {
    router.push(item.link)
    setMobileOpen(false)
  }
  const drawer = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        paddingTop: 16,
      }}
    >
      <Toolbar sx={{ minHeight: `50px !important` }}>
        <Link underline="none" href="/">
          <Image
            src="/images/logo.svg"
            width={50}
            height={50}
            alt="logo"
            loading="lazy"
          />
        </Link>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            position: "absolute",
            top: 0,
            right: 16,
            left: "auto",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Box
        component="div"
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "100%",
            height: { xs: "100%", md: "45vh" },
            overflowX: "hidden",
            overflowY: "auto",
            px: 2,
            "&::-webkit-scrollbar": {
              width: "0.1px !important",
              height: "0.1px !important",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `#FE5002 !important`,
              borderRadius: "30px !important",
              boxShadow: `inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),inset -2px -2px 2px rgba(0, 0, 0, 0.25) !important`,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: `#D9D9D9 !important`,
            },
          }}
        >
          <StyledList
            className="w-full flex flex-col justify-start items-start"
            disablePadding
          >
            {menu?.map((item, index) => {
              let itemName = updateKey(item.name.toLowerCase())
              // const selected = pathname.startsWith(`/${itemName}`)
              const selected =
                pathname.startsWith(`/${itemName}`) ||
                (pathname === "/" && item.name.toLowerCase() === "home")
              return (
                <Box component="div" key={index + 1}>
                  <Button
                    key={index}
                    onClick={() => handleClick(item, index)}
                    className={
                      selected
                        ? "w-full font-helveticaMedium font-medium text-sm leading-6 trackking-[0.20000000298023224px] text-left text-primary capitalize flex justify-start items-start"
                        : "w-full font-helveticaMedium font-medium text-sm leading-6 trackking-[0.20000000298023224px] text-left text-secondary capitalize flex justify-start items-start"
                    }
                  >
                    {item.name}
                  </Button>
                </Box>
              )
            })}
          </StyledList>
        </Box>
      </Box>
    </div>
  )
  return (
    <div className="w-full overflow-hidden relative">
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => (mobileOpen ? 1 : theme.zIndex.drawer + 1) }}
        className="w-full h-[68px] bg-[#FFF] shadow-none px-2 md:px-[40px] xxl:px-[96px]"
      >
        <Toolbar className="w-full justify-between pt-1">
          <Link underline="none" href="/" className="hidden md:flex">
            <Image
              src="/images/logo.svg"
              width={100}
              height={65}
              alt="logo"
              loading="lazy"
            />
          </Link>
          <Link underline="none" href="/" className="flex md:hidden">
            <Image
              src="/images/logo.svg"
              width={50}
              height={50}
              alt="logo"
              loading="lazy"
            />
          </Link>
          <StyledList disablePadding className="hidden md:flex">
            {menu?.map((item, index) => {
              let itemName = updateKey(item.name.toLowerCase())
              const selected =
                pathname.startsWith(`/${itemName}`) ||
                (pathname === "/" && item.name.toLowerCase() === "home")

              return (
                <Button
                  key={index}
                  onClick={() => handleClick(item, index)}
                  className={
                    selected
                      ? "w-[100px] font-helveticaMedium font-medium text-sm leading-6 trackking-[0.20000000298023224px] text-center text-primary capitalize"
                      : "w-[100px] font-helveticaMedium font-medium text-sm leading-6 trackking-[0.20000000298023224px] text-center text-secondary capitalize"
                  }
                >
                  {item.name}
                </Button>
              )
            })}
          </StyledList>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none" },
              background: Colors.white,
              color: Colors.text,
              "&:hover": {
                background: Colors.white,
                color: Colors.text,
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box className="hidden lg:flex" />
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: "100%", flexShrink: { md: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "flex", md: "none" },
            "& .MuiDrawer-paper": {
              backgroundColor: "#FFF",
              boxSizing: "border-box",
              width: "100%",
              "&::-webkit-scrollbar": {
                width: "0.1px !important",
                height: "0.1px !important",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `${Colors.primary} !important`,
                borderRadius: "30px !important",
                boxShadow: `inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),inset -2px -2px 2px rgba(0, 0, 0, 0.25) !important`,
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: `#D9D9D9 !important`,
              },
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" className="w-full grow">
        <CssBaseline />
        {children}
      </Box>
      <Box
        className="w-full grow flex shrink-0 bg-[#F6F9FC] pt-[0px] md:pt-[56px] px-[28px] flex-wrap gap-2 justify-center items-center"
        data-aos="fade-up"
      >
        <Box className="w-full items-center justify-center gap-4 pt-[40px] pb-[20px] px-0 flex md:hidden">
          <Typography
            variant="h4"
            className="font-light font-helveticaLight text-[15px]/[24px] text-center trecking-[0.20000000298023224px]"
          >
            © {year} First Drop Nig. Limited. All rights reserved.
          </Typography>
        </Box>
        <Box className="hidden w-full max-w-[1064px] md:flex gap-4 md:gap-8 pt-[56px]">
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Box className="w-full md:w-[180xp] flex flex-col gap-[14px] items-start">
                <Typography
                  variant="h4"
                  className="font-helveticaMedium font-medium text-sm/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Company
                </Typography>
                <Link
                  underline="hover"
                  href="/about-us"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  About us
                </Link>
                {/* <Link
                  underline="hover"
                  href="/blog"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Blog
                </Link>{" "} */}
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box className="w-full md:w-[180xp] flex flex-col gap-[14px] items-start">
                <Typography
                  variant="h4"
                  className="font-helveticaMedium font-medium text-sm/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Products
                </Typography>
                <Link
                  underline="hover"
                  href="/products"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Plastic Bottles
                </Link>
                <Link
                  underline="hover"
                  href="/products"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  PET Perform
                </Link>{" "}
                <Link
                  underline="hover"
                  href="/products"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Water
                </Link>
                <Link
                  underline="hover"
                  href="/products"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Plastic Jar
                </Link>
                <Link
                  underline="hover"
                  href="/products"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Plastic Cups
                </Link>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box className="w-full md:w-[180xp] flex flex-col gap-[14px] items-start">
                <Typography
                  variant="h4"
                  className="font-helveticaMedium font-medium text-sm/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Social
                </Typography>
                <Link
                  underline="none"
                  href="https://www.instagram.com/firstdropsng/"
                  target="_blank"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Instagram
                </Link>
                <Link
                  underline="none"
                  href="https://www.facebook.com/firstdropsng/"
                  target="_blank"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Facebook
                </Link>
                <Link
                  underline="none"
                  href="https://twitter.com/firstdropsng"
                  target="_blank"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Twitter
                </Link>
                <Link
                  underline="none"
                  href="https://www.tiktok.com/firstdropsng/"
                  target="_blank"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Tiktok
                </Link>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box className="w-full md:w-[180xp] flex flex-col gap-[14px] items-start">
                <Typography
                  variant="h4"
                  className="font-helveticaMedium font-medium text-sm/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Contact
                </Typography>
                <Link
                  href="tel: +2348033497101"
                  underline="hover"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  +2348033497101
                </Link>
                <Link
                  href="tel: +2347038287302"
                  underline="hover"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  +2347038287302
                </Link>
                <Link
                  underline="hover"
                  href="mailto:firstdropsng@gmail.com"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  firstdropsng@gmail.com
                </Link>
                <Typography
                  variant="subtitle1"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Plot no 85, Sector - center F, Karmo, FCT-Abuja.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box className="w-full flex md:hidden">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box className="w-full md:w-[180xp] flex flex-col gap-[14px] items-start">
                <Typography
                  variant="h4"
                  className="font-helveticaMedium font-medium text-sm/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Products
                </Typography>
                <Link
                  underline="hover"
                  href="/products"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Plastic Bottles
                </Link>
                <Link
                  underline="hover"
                  href="/products"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  PET Perform
                </Link>{" "}
                <Link
                  underline="hover"
                  href="/products"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Water
                </Link>
                <Link
                  underline="hover"
                  href="/products"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Plastic Jar
                </Link>
                <Link
                  underline="hover"
                  href="/products"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Plastic Cups
                </Link>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className="w-full md:w-[180xp] flex flex-col gap-[14px] items-start">
                <Typography
                  variant="h4"
                  className="font-helveticaMedium font-medium text-sm/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Company
                </Typography>
                <Link
                  underline="hover"
                  href="/about-us"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  About us
                </Link>
                {/* <Link
                  underline="hover"
                  href="/blog"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Blog
                </Link>{" "} */}
              </Box>
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={6} className="relative top-[-90px]">
              <Box className="w-full md:w-[180xp] flex flex-col gap-[14px] items-start">
                <Typography
                  variant="h4"
                  className="font-helveticaMedium font-medium text-sm/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Social
                </Typography>
                <Link
                  underline="none"
                  href="https://www.instagram.com/firstdropsng/"
                  target="_blank"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Instagram
                </Link>
                <Link
                  underline="none"
                  href="https://www.facebook.com/firstdropsng/"
                  target="_blank"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Facebook
                </Link>
                <Link
                  underline="none"
                  href="https://twitter.com/firstdropsng"
                  target="_blank"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Twitter
                </Link>
                <Link
                  underline="none"
                  href="https://www.tiktok.com/firstdropsng/"
                  target="_blank"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Tiktok
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} className="relative top-[-180px]">
              <Box className="w-full md:w-[180xp] flex flex-col gap-[14px] items-start">
                <Typography
                  variant="h4"
                  className="font-helveticaMedium font-medium text-sm/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Contact
                </Typography>
                <Link
                  href="tel: +234 8033497101"
                  underline="hover"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  +234 8033497101
                </Link>
                <Link
                  href="tel: +234 7038287302"
                  underline="hover"
                  className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  +234 7038287302
                </Link>
                <Link
                  underline="hover"
                  href="mailto:firstdropsng@gmail.com"
                  className="w-full font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  firstdropsng@gmail.com
                </Link>
                <Typography
                  variant="subtitle1"
                  className="w-full font-helveticaLight font-light text-[14.5px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                >
                  Plot no 85, Sector - center F, Karmo, FCT-Abuja.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className="w-full items-center justify-center gap-4 pt-[40px] pb-[20px] px-0 hidden md:flex">
          <Typography
            variant="h4"
            className="font-light font-helveticaLight text-[15px]/[24px] text-center trecking-[0.20000000298023224px]"
          >
            © {year} First Drop Nig. Limited. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </div>
  )
}
