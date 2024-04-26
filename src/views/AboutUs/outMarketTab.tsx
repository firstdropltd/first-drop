"use client"
import { ArrowForward } from "@/components/SVGs"
import { Colors } from "@/components/Theme/colors"
import { Fonts } from "@/components/Theme/font"
import { styled, useMediaQuery, useTheme } from "@mui/material"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"
import Image from "next/image"
import * as React from "react"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    display: "none",
  },
})
const StyledTab = styled((props: any) => <Tab disableRipple {...props} />)(
  () => ({
    width: "100%",
    maxWidth: 640,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textTransform: "capitalize",
    cursor: "pointer",
    gap: "20px",
    font: `normal normal 300 normal 18px/28px ${Fonts.secondaryLight}`,
    "&.Mui-selected": {
      borderLeft: `4px solid ${Colors.primary}`,
      padding: "16px 0 24px 20px",
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
      {...other}
    >
      {value === index && (
        <Box component="div" className="w-full relative mt-6 lg:mt-0">
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

export default function OurMarketTab() {
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box className="w-full max-W-[1280px] h-full lg:h-[640px] flex-col lg:flex-row flex justify-between relative">
      <StyledTabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{
          display: "inline-flex",
          justifyContent: "center",
          marginTop: { lg: "40px" },
        }}
      >
        <StyledTab
          label={
            <Box component="div" className="w-full flex flex-col gap-[16px]">
              <Box
                component="span"
                className="w-full font-helveticaBold font-bold text-[20px]/[30px] text-left text-text-primary"
              >
                Standard PET Bottles
              </Box>
              <Box
                component="span"
                className="w-full max-w-[350px] font-helveticaThin font-light text-[18px]/[28px] text-left text-text-primary tracking-[-0.002em]"
              >
                Our classic range of PET bottles caters to a wide array of
                industries and applications.
              </Box>
              <Box className="w-[200px] flex gap-1 justify-start items-center">
                <Box
                  className={`flex justify-start gap-2 items-center normal-case font-helveticaMedium font-600 text-[16px]/[24px] text-left ${
                    value === 0 ? "text-primary" : "text-[#0A2540]"
                  } bg-transparent relative`}
                >
                  Learn more <ArrowForward />
                </Box>
              </Box>
            </Box>
          }
          {...a11yProps(0)}
        />
        <StyledTab
          label={
            <Box component="div" className="w-full flex flex-col gap-[16px]">
              <Box
                component="span"
                className="font-helveticaBold font-bold text-[20px]/[30px] text-left text-text-primary"
              >
                Customized Designs
              </Box>
              <Box
                component="span"
                className="w-full max-w-[400px] font-helveticaThin font-light text-[18px]/[28px] text-left text-text-primary"
              >
                Our team is adept at creating custom-designed PET bottles that
                meet your specific requirements.
              </Box>
              <Box className="w-[200px] flex gap-1 justify-start items-center">
                <Box
                  className={`flex justify-start gap-2 items-center normal-case font-helveticaMedium font-600 text-[16px]/[24px] text-left ${
                    value === 1 ? "text-primary" : "text-[#0A2540]"
                  } bg-transparent relative`}
                >
                  Learn more <ArrowForward />
                </Box>
              </Box>
            </Box>
          }
          {...a11yProps(1)}
        />
        <StyledTab
          label={
            <Box component="div" className="w-full flex flex-col gap-[16px]">
              <Box
                component="span"
                className="font-helveticaBold font-bold text-[20px]/[30px] text-left text-text-primary"
              >
                Specialized Applications
              </Box>
              <Box
                component="span"
                className="w-full font-helveticaThin font-light text-[18px]/[28px] text-left text-text-primary"
              >
                We specialize in crafting PET bottles designed for specialized
                applications, including those requiring unique shapes, or sizes.
              </Box>
              <Box className="w-[200px] flex gap-1 justify-start items-center">
                <Box
                  className={`flex justify-start gap-2 items-center normal-case font-helveticaMedium font-600 text-[16px]/[24px] text-left ${
                    value === 2 ? "text-primary" : "text-[#0A2540]"
                  } bg-transparent relative`}
                >
                  Learn more <ArrowForward />
                </Box>
              </Box>
            </Box>
          }
          {...a11yProps(2)}
        />
      </StyledTabs>
      <Box className="relative">
        <TabPanel value={value} index={0}>
          <Box className="w-full flex xl:justify-end xl:items-end">
            <Image
              src="/images/pink-bottle.jpeg"
              className="w-[343px] sm:w-[full] h-[340px] lg:w-[468px] lg:h-[640px] xl:w-[576px] xl:h-[640px] xxl-h-[640px] rounded-[10px]"
              width={576}
              height={640}
              alt="plastic bottle"
            />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box className="w-full flex xl:justify-end xl:items-end">
            <Image
              src="/images/blue-bottle-water.jpeg"
              className="w-[343px] sm:w-[full] h-[340px] lg:w-[468px] lg:h-[640px] xl:w-[576px] xl:h-[640px] xxl-h-[640px] rounded-[10px]"
              width={576}
              height={640}
              alt="plastic bottle"
            />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box className="w-full flex xl:justify-end xl:items-end">
            <Image
              src="/images/green-spray-bottle.jpeg"
              className="w-[343px] sm:w-[full] h-[340px] lg:w-[468px] lg:h-[640px] xl:w-[576px] xl:h-[640px] xxl-h-[640px] rounded-[10px]"
              width={576}
              height={640}
              alt="plastic bottle"
            />
          </Box>
        </TabPanel>
      </Box>
    </Box>
  )
}
