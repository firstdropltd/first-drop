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
import { motion, useAnimation, useInView } from "framer-motion"
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
  { name: "Blog", link: "/blog" },
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
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [openNest, setOpenNest] = React.useState("")
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const today = new Date()
  const year = today.getFullYear()

  React.useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)
  const handlePopoverOpen = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }
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
      }}
    >
      <Toolbar
        sx={{ minHeight: `50px !important`, padding: `16px !important` }}
      >
        <Link underline="none" href="/">
          <Image src="/images/logo.svg" width={80} height={80} alt="logo" />
        </Link>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            position: "absolute",
            top: 20,
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
          <StyledList className="w-full flex flex-col" disablePadding>
            {menu?.map((item, index) => {
              let itemName = updateKey(item.name.toLowerCase())
              const selected = pathname.startsWith(`/${itemName}`)
              return (
                <Box component="div" key={index + 1}>
                  <Button
                    key={index}
                    onClick={() => handleClick(item, index)}
                    className={
                      selected
                        ? "w-full font-helveticaMedium font-medium text-sm leading-6 trackking-[0.20000000298023224px] text-center text-primary capitalize"
                        : "w-full font-helveticaMedium font-medium text-sm leading-6 trackking-[0.20000000298023224px] text-center text-secondary capitalize"
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
    <div className="w-full overflow-hidden relative" ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => (mobileOpen ? 1 : theme.zIndex.drawer + 1) }}
          className="w-full h-[68px] bg-[#FFF] shadow-none px-2 md:px-[96px]"
        >
          <Toolbar className="w-full justify-between">
            <Link underline="none" href="/" className="hidden md:flex">
              <Image
                src="/images/logo.svg"
                width={100}
                height={65}
                alt="logo"
              />
            </Link>
            <Link underline="none" href="/" className="flex md:hidden">
              <Image src="/images/logo.svg" width={80} height={65} alt="logo" />
            </Link>
            <StyledList disablePadding className="hidden md:flex">
              {menu?.map((item, index) => {
                let itemName = updateKey(item.name.toLowerCase())
                const selected = pathname.startsWith(`/${itemName}`)
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
                width: 30,
                height: 30,
                borderRadius: 1,
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
        <Box className="w-full grow flex shrink-0 bg-[#F6F9FC] pt-[56px] px-[32px] pr-[55.8px] flex-wrap gap-2 justify-center items-center">
          <Box className="w-full max-w-[1280px] flex gap-4 md:gap-8">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3} md={2} className="mr-8">
                <Box className="w-full max-w-[219.52px] flex flex-col flex-1 gap-4">
                  <Link underline="none" href="/">
                    <Image
                      src="/images/logo.svg"
                      width={100}
                      height={80}
                      alt="logo"
                    />
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
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
                  <Link
                    underline="hover"
                    href="/blog"
                    className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                  >
                    Blog
                  </Link>{" "}
                </Box>
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
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
              <Grid item xs={6} sm={3} md={2}>
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
              <Grid item xs={6} sm={3} md={2}>
                <Box className="w-full md:w-[180xp] flex flex-col gap-[14px] items-start">
                  <Typography
                    variant="h4"
                    className="font-helveticaMedium font-medium text-sm/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                  >
                    Contact
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                  >
                    +234 816 526 3668
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className="font-helveticaLight font-light text-[15px]/[24px] tracking-[0.20000000298023224px] text-left text-text-primary"
                  >
                    +234 813 553 5616
                  </Typography>
                  <Link
                    underline="hover"
                    href="mailto:hello@firstdropsng@gmail.com"
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
          <Box className="w-full flex items-center justify-center gap-4 pt-[40px] pb-[20px] px-0">
            <Typography
              variant="h4"
              className="font-light font-helveticaLight text-[15px]/[24px] text-center trecking-[0.20000000298023224px]"
            >
              © {year} First Drops Nig. Limited. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </div>
  )
}
