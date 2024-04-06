"use client"
import { ArrowForward } from "@/components/SVGs"
import { Colors } from "@/components/Theme/colors"
import { styled } from "@mui/material"
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
  width: "100%",
  // height: 800,
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
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
    gap: "20px",
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

export default function OurMarketTab() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box className="w-full  max-W-[1280px] h-full lg:h-[640px] flex-col lg:flex-row flex gap-[32px] lg:gap-[32px]">
      <StyledTabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        <StyledTab
          label={
            <Box component="div" className="w-full flex flex-col gap-[16px]">
              <Box
                component="span"
                className="font-helveticaBold font-bold text-[20px]/[30px] text-left text-text-primary"
              >
                Standard PET Bottles
              </Box>
              <Box
                component="span"
                className="font-helveticaThin font-light text-[18px]/[28px] text-left text-text-primary tracking-[-0.002em]"
              >
                Our classic range of PET bottles caters to a wide array of
                industries and applications.
              </Box>
              <Box className="w-[200px] flex gap-1 justify-start items-center">
                <Box className="flex justify-start gap-2 items-center normal-case font-helveticaThin font-light text-[16px]/[24px] text-left text-primary bg-transparent relative">
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
                className="font-helveticaThin font-light text-[18px]/[28px] text-left text-text-primary"
              >
                Our team is adept at creating custom-designed PET bottles that
                meet your specific requirements.
              </Box>
              <Box className="w-[200px] flex gap-1 justify-start items-center">
                <Box className="flex justify-start gap-2 items-center normal-case font-helveticaThin font-light text-[16px]/[24px] text-left text-primary bg-transparent relative">
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
                className="font-helveticaThin font-light text-[18px]/[28px] text-left text-text-primary"
              >
                Our classic range of PET bottles caters to a wide array of
                industries and applications.
              </Box>
              <Box className="w-[200px] flex gap-1 justify-start items-center">
                <Box className="flex justify-start gap-2 items-center normal-case font-helveticaThin font-light text-[16px]/[24px] text-left text-primary bg-transparent relative">
                  Learn more <ArrowForward />
                </Box>
              </Box>
            </Box>
          }
          {...a11yProps(2)}
        />
      </StyledTabs>
      <Box>
        <TabPanel value={value} index={0}>
          <Box className="w-full flex justify-end items-center">
            <Image
              src="/images/pink-bottle.jpeg"
              className="w-[343px] h-[296px] md:w-[592px] md:h-[640px] rounded-[10px]"
              width={592}
              height={640}
              alt="plastic bottle"
            />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box className="w-full flex justify-end items-center">
            <Image
              className="w-[343px] h-[296px] md:w-[592px] md:h-[640px] rounded-[10px]"
              src="/images/blue-bottle-water.jpeg"
              width={592}
              height={640}
              alt="plastic bottle"
            />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box className="w-full flex justify-end items-center">
            <Image
              className="w-[343px] h-[296px] md:w-[592px] md:h-[640px] rounded-[10px]"
              src="/images/green-spray-bottle.jpeg"
              width={592}
              height={640}
              alt="plastic bottle"
            />
          </Box>
        </TabPanel>
      </Box>
    </Box>
  )
}
