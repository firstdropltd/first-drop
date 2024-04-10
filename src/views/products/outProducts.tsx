"use client"
import { SearchIcon } from "@/components/SVGs"
import { Colors } from "@/components/Theme/colors"
import { Fonts } from "@/components/Theme/font"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import {
  Divider,
  Grid,
  Pagination,
  PaginationItem,
  Typography,
  styled,
} from "@mui/material"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"
import Image from "next/image"
import * as React from "react"

const products = [
  {
    description: `1 Oz Brown Glass Boston Round 
Bottle With 20-400 Neck Finish`,
    src: "/images/orange-pink-jar.jpeg",
    name: "orange-pink jars",
  },
  {
    description: `1 Oz Brown Glass Boston Round 
Bottle With 20-400 Neck Finish`,
    src: "/images/white-plastic-botttle.jpeg",
    name: "white bottle",
  },
  {
    description: `1 Oz Brown Glass Boston Round 
Bottle With 20-400 Neck Finish`,
    src: "/images/linzhome-bottle.jpeg",
    name: "linzhome",
  },
  {
    description: `1 Oz Brown Glass Boston Round 
Bottle With 20-400 Neck Finish`,
    src: "/images/yellow-red-bottles.jpeg",
    name: "orange-pink jars",
  },
  {
    description: `1 Oz Brown Glass Boston Round 
Bottle With 20-400 Neck Finish`,
    src: "/images/purple-bottle.jpeg",
    name: "purple bottle jars",
  },
  {
    description: `1 Oz Brown Glass Boston Round 
Bottle With 20-400 Neck Finish`,
    src: "/images/white-square-bottles.jpeg",
    name: "square bottles",
  },
  {
    description: `1 Oz Brown Glass Boston Round 
Bottle With 20-400 Neck Finish`,
    src: "/images/red-capped-sample-bottle.jpeg",
    name: "sample bottles",
  },
  {
    description: `1 Oz Brown Glass Boston Round 
Bottle With 20-400 Neck Finish`,
    src: "/images/pink-strawed-cup.jpeg",
    name: "pink bottle with straw",
  },
  {
    description: `1 Oz Brown Glass Boston Round 
Bottle With 20-400 Neck Finish`,
    src: "/images/pink-lined-jar.jpeg",
    name: "pink jars",
  },
  {
    description: `1 Oz Brown Glass Boston Round 
Bottle With 20-400 Neck Finish`,
    src: "/images/three-blue-ash-purple.jpeg",
    name: "pink jars",
  },
  {
    description: `1 Oz Brown Glass Boston Round 
Bottle With 20-400 Neck Finish`,
    src: "/images/trianglewhite-triangle-lid-jar.jpeg",
    name: "pink jars",
  },
  {
    description: `1 Oz Brown Glass Boston Round 
Bottle With 20-400 Neck Finish`,
    src: "/images/green-spray-bottle.jpeg",
    name: "pink jars",
  },
]
interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const StyledTabs = styled(Tabs)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  backgroundColor: "#FFF",
  padding: 6,
  gap: 8,
  "& .MuiTabs-indicator": {
    display: "none",
  },
})
const StyledTab = styled((props: any) => <Tab disableRipple {...props} />)(
  () => ({
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textTransform: "capitalize",
    cursor: "pointer",
    height: 44,
    padding: "10px 14px",
    gap: 8,
    font: `normal normal 600 normal 16px/24px ${Fonts.primarySemibold}`,
    "&.Mui-selected": {
      borderLeft: `2px solid ${Colors.primary}`,
      padding: "10px 14px",
      boxShadow: "none",
    },
    "&.Mui-focusVisible": {
      backgroundColor: Colors.white,
    },
  })
)

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box component="div" className="w-full">
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  }
}

export default function OurProductsTab() {
  const [value, setValue] = React.useState(0)
  const [search, setSearch] = React.useState("")
  const [page, setPage] = React.useState(1)
  const pageSize = 12
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentPageData = products?.slice(startIndex, endIndex)

  const handlePageChange = (_: any, value: number) => {
    setPage(value)
  }

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue)
  }
  const handleSearchChange = (event: any) => {
    setSearch(event.target.value)
  }
  return (
    <Box className="w-full max-w-[1440px] h-full flex flex-col lg:flex-row gap-[32px] xl:gap-[67px]">
      <Box className="w-full sm:w-[280px] flex flex-col gap-[24px]">
        <Box className="w-full relative px-[14px] py-[10px]">
          <input
            placeholder="Search for products"
            value={search}
            onChange={handleSearchChange}
            className="w-full h-[44px] outline-none py-[10px] px-[14px] flex gap-2 rounded-lg border border-solid border-[#D0D5DD] focus:border-primary pl-10 font-inter font-normal text-sm leading-6 text-left text-text-primary placeholder:text-[#667085]"
            style={{
              boxShadow: "0px 1px 2px 0px #1018280D",
            }}
          />
          <Box className="absolute top-[24px] left-[20px]">
            <SearchIcon />
          </Box>
        </Box>
        <Typography className="flex font-semibold font-interSemibold text-sm text-primary text-left px-[14px] py-[2px]">
          Product categories
        </Typography>
        <StyledTabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
        >
          <StyledTab label="Plastic Bottle" {...a11yProps(0)} />
          <StyledTab label="Water" {...a11yProps(1)} />
          <StyledTab label="PET Perform" {...a11yProps(2)} />
          <StyledTab label="Plastic Tubes" {...a11yProps(3)} />
          <StyledTab label="Plastic Boxes" {...a11yProps(4)} />
          <StyledTab label="Plastic Cups" {...a11yProps(5)} />
          <StyledTab label="Request Model" {...a11yProps(6)} />
        </StyledTabs>
      </Box>
      <Box className="w-full">
        <TabPanel value={value} index={0}>
          <Grid container spacing={6}>
            {currentPageData?.map((product, i) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  key={`product - ${i}`}
                  className="w-full flex flex-col gap-2"
                >
                  <Image
                    src={product.src}
                    className="w-[343px] sm:w-[255px] h-full sm:h-[241px] rounded-[10px]"
                    width={261}
                    height={241}
                    alt={product.name}
                  />
                  <Box
                    className="w-[255px] py-[4px] pr-[10px] pl-[4px] flex justify-between items-center gap-[6px] border border-solid rounded-[10px] border-[#D0D5DD]"
                    sx={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
                  >
                    <Box className="w-[106px] md:w-[106px] px-[6px] py-[2px] flex justify-start items-center border border-solid rounded-[6px] border-primary gap-[6px] bg-primary">
                      <Typography
                        variant="caption"
                        className="font-interMedium font-medium text-xs leading-[18px] text-white text-center"
                      >
                        Get best price
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      className="font-interMedium font-medium text-[12px]/[18px] text-[#344054] text-center"
                    >
                      MOQ: 10000 pcs
                    </Typography>
                  </Box>
                  <Typography className="font-inter font-normal text-[16px]/[24px] text-[#475467] text-left">
                    {product.description}
                  </Typography>
                </Grid>
              )
            })}
            <Grid item xs={12} sx={{ my: 2 }}>
              <Divider className="border-[#EAECF0]" />
            </Grid>
            <Grid item xs={12}>
              <Box className="w-full flex justify-center items-center">
                <Pagination
                  className="font-interMedium font-medium text-center text-sm text-[#475467]"
                  count={Math.ceil(products.length / pageSize)}
                  page={page}
                  boundaryCount={3}
                  siblingCount={0}
                  color="primary"
                  onChange={handlePageChange}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                    />
                  )}
                />
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={6}>
            {currentPageData?.map((product, i) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  key={`product - ${i}`}
                  className="w-full flex flex-col gap-2"
                >
                  <Image
                    src={product.src}
                    className="w-[255px] h-[241px] rounded-[10px]"
                    width={261}
                    height={241}
                    alt={product.name}
                  />
                  <Box
                    className="w-[255px] py-[4px] pr-[10px] pl-[4px] flex justify-between items-center gap-[6px] border border-solid rounded-[10px] border-[#D0D5DD]"
                    sx={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
                  >
                    <Box className="w-[106px] md:w-[106px] px-[6px] py-[2px] flex justify-start items-center border border-solid rounded-[6px] border-primary gap-[6px] bg-primary">
                      <Typography
                        variant="caption"
                        className="font-interMedium font-medium text-xs leading-[18px] text-white text-center"
                      >
                        Get best price
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      className="font-interMedium font-medium text-[12px]/[18px] text-[#344054] text-center"
                    >
                      MOQ: 10000 pcs
                    </Typography>
                  </Box>
                  <Typography className="font-inter font-normal text-[16px]/[24px] text-[#475467] text-left">
                    {product.description}
                  </Typography>
                </Grid>
              )
            })}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Box className="w-full flex justify-center items-center">
                <Pagination
                  className="font-interMedium font-medium text-center text-sm text-[#475467]"
                  count={Math.ceil(products.length / pageSize)}
                  page={page}
                  boundaryCount={3}
                  siblingCount={0}
                  color="primary"
                  onChange={handlePageChange}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                    />
                  )}
                />
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container spacing={6}>
            {currentPageData?.map((product, i) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  key={`product - ${i}`}
                  className="w-full flex flex-col gap-2"
                >
                  <Image
                    src={product.src}
                    className="w-[255px] h-[241px] rounded-[10px]"
                    width={261}
                    height={241}
                    alt={product.name}
                  />
                  <Box
                    className="w-[255px] py-[4px] pr-[10px] pl-[4px] flex justify-between items-center gap-[6px] border border-solid rounded-[10px] border-[#D0D5DD]"
                    sx={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
                  >
                    <Box className="w-[106px] md:w-[106px] px-[6px] py-[2px] flex justify-start items-center border border-solid rounded-[6px] border-primary gap-[6px] bg-primary">
                      <Typography
                        variant="caption"
                        className="font-interMedium font-medium text-xs leading-[18px] text-white text-center"
                      >
                        Get best price
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      className="font-interMedium font-medium text-[12px]/[18px] text-[#344054] text-center"
                    >
                      MOQ: 10000 pcs
                    </Typography>
                  </Box>
                  <Typography className="font-inter font-normal text-[16px]/[24px] text-[#475467] text-left">
                    {product.description}
                  </Typography>
                </Grid>
              )
            })}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Box className="w-full flex justify-center items-center">
                <Pagination
                  className="font-interMedium font-medium text-center text-sm text-[#475467]"
                  count={Math.ceil(products.length / pageSize)}
                  page={page}
                  boundaryCount={3}
                  siblingCount={0}
                  color="primary"
                  onChange={handlePageChange}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                    />
                  )}
                />
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grid container spacing={6}>
            {currentPageData?.map((product, i) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  key={`product - ${i}`}
                  className="w-full flex flex-col gap-2"
                >
                  <Image
                    src={product.src}
                    className="w-[255px] h-[241px] rounded-[10px]"
                    width={261}
                    height={241}
                    alt={product.name}
                  />
                  <Box
                    className="w-[255px] py-[4px] pr-[10px] pl-[4px] flex justify-between items-center gap-[6px] border border-solid rounded-[10px] border-[#D0D5DD]"
                    sx={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
                  >
                    <Box className="w-[106px] md:w-[106px] px-[6px] py-[2px] flex justify-start items-center border border-solid rounded-[6px] border-primary gap-[6px] bg-primary">
                      <Typography
                        variant="caption"
                        className="font-interMedium font-medium text-xs leading-[18px] text-white text-center"
                      >
                        Get best price
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      className="font-interMedium font-medium text-[12px]/[18px] text-[#344054] text-center"
                    >
                      MOQ: 10000 pcs
                    </Typography>
                  </Box>
                  <Typography className="font-inter font-normal text-[16px]/[24px] text-[#475467] text-left">
                    {product.description}
                  </Typography>
                </Grid>
              )
            })}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Box className="w-full flex justify-center items-center">
                <Pagination
                  className="font-interMedium font-medium text-center text-sm text-[#475467]"
                  count={Math.ceil(products.length / pageSize)}
                  page={page}
                  boundaryCount={3}
                  siblingCount={0}
                  color="primary"
                  onChange={handlePageChange}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                    />
                  )}
                />
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Grid container spacing={6}>
            {currentPageData?.map((product, i) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  key={`product - ${i}`}
                  className="w-full flex flex-col gap-2"
                >
                  <Image
                    src={product.src}
                    className="w-[255px] h-[241px] rounded-[10px]"
                    width={261}
                    height={241}
                    alt={product.name}
                  />
                  <Box
                    className="w-[255px] py-[4px] pr-[10px] pl-[4px] flex justify-between items-center gap-[6px] border border-solid rounded-[10px] border-[#D0D5DD]"
                    sx={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
                  >
                    <Box className="w-[106px] md:w-[106px] px-[6px] py-[2px] flex justify-start items-center border border-solid rounded-[6px] border-primary gap-[6px] bg-primary">
                      <Typography
                        variant="caption"
                        className="font-interMedium font-medium text-xs leading-[18px] text-white text-center"
                      >
                        Get best price
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      className="font-interMedium font-medium text-[12px]/[18px] text-[#344054] text-center"
                    >
                      MOQ: 10000 pcs
                    </Typography>
                  </Box>
                  <Typography className="font-inter font-normal text-[16px]/[24px] text-[#475467] text-left">
                    {product.description}
                  </Typography>
                </Grid>
              )
            })}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Box className="w-full flex justify-center items-center">
                <Pagination
                  className="font-interMedium font-medium text-center text-sm text-[#475467]"
                  count={Math.ceil(products.length / pageSize)}
                  page={page}
                  boundaryCount={3}
                  siblingCount={0}
                  color="primary"
                  onChange={handlePageChange}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                    />
                  )}
                />
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Grid container spacing={6}>
            {currentPageData?.map((product, i) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  key={`product - ${i}`}
                  className="w-full flex flex-col gap-2"
                >
                  <Image
                    src={product.src}
                    className="w-[255px] h-[241px] rounded-[10px]"
                    width={261}
                    height={241}
                    alt={product.name}
                  />
                  <Box
                    className="w-[255px] py-[4px] pr-[10px] pl-[4px] flex justify-between items-center gap-[6px] border border-solid rounded-[10px] border-[#D0D5DD]"
                    sx={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
                  >
                    <Box className="w-[106px] md:w-[106px] px-[6px] py-[2px] flex justify-start items-center border border-solid rounded-[6px] border-primary gap-[6px] bg-primary">
                      <Typography
                        variant="caption"
                        className="font-interMedium font-medium text-xs leading-[18px] text-white text-center"
                      >
                        Get best price
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      className="font-interMedium font-medium text-[12px]/[18px] text-[#344054] text-center"
                    >
                      MOQ: 10000 pcs
                    </Typography>
                  </Box>
                  <Typography className="font-inter font-normal text-[16px]/[24px] text-[#475467] text-left">
                    {product.description}
                  </Typography>
                </Grid>
              )
            })}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Box className="w-full flex justify-center items-center">
                <Pagination
                  className="font-interMedium font-medium text-center text-sm text-[#475467]"
                  count={Math.ceil(products.length / pageSize)}
                  page={page}
                  boundaryCount={3}
                  siblingCount={0}
                  color="primary"
                  onChange={handlePageChange}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                    />
                  )}
                />
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Grid container spacing={6}>
            {currentPageData?.map((product, i) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  key={`product - ${i}`}
                  className="w-full flex flex-col gap-2"
                >
                  <Image
                    src={product.src}
                    className="w-[255px] h-[241px] rounded-[10px]"
                    width={261}
                    height={241}
                    alt={product.name}
                  />
                  <Box
                    className="w-[255px] py-[4px] pr-[10px] pl-[4px] flex justify-between items-center gap-[6px] border border-solid rounded-[10px] border-[#D0D5DD]"
                    sx={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
                  >
                    <Box className="w-[106px] md:w-[106px] px-[6px] py-[2px] flex justify-start items-center border border-solid rounded-[6px] border-primary gap-[6px] bg-primary">
                      <Typography
                        variant="caption"
                        className="font-interMedium font-medium text-xs leading-[18px] text-white text-center"
                      >
                        Get best price
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      className="font-interMedium font-medium text-[12px]/[18px] text-[#344054] text-center"
                    >
                      MOQ: 10000 pcs
                    </Typography>
                  </Box>
                  <Typography className="font-inter font-normal text-[16px]/[24px] text-[#475467] text-left">
                    {product.description}
                  </Typography>
                </Grid>
              )
            })}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Box className="w-full flex justify-center items-center">
                <Pagination
                  className="font-interMedium font-medium text-center text-sm text-[#475467]"
                  count={Math.ceil(products.length / pageSize)}
                  page={page}
                  boundaryCount={3}
                  siblingCount={0}
                  color="primary"
                  onChange={handlePageChange}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                    />
                  )}
                />
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Box>
  )
}
