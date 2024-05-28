"use client"
import { ArrowForward } from "@/components/SVGs"
import { Colors } from "@/components/Theme/colors"
import { Fonts } from "@/components/Theme/font"
import {
  Divider,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material"
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
    <Box className="w-full flex-col lg:flex-row flex justify-between relative gap-16">
      <Box
        className="w-full md:w-1/2 max-w-[610px] flex flex-col gap-8"
        data-aos="fade-right"
      >
        <Box className="w-full xl:w-[536px] flex gap-6">
          {" "}
          <Divider
            orientation="vertical"
            className="border-primary border-[3px] h-[240px] xl:h-[160px] "
          />
          <Box component="div" className="w-full flex flex-col gap-4">
            <Typography
              variant="h4"
              className="w-full flex gap-6 text-text-primary font-bold font-helveticaBold text-[20px]/[30px] text-left"
            >
              Our Products
            </Typography>
            <Typography
              variant="h2"
              className="w-full text-text-light font-helveticaLight font-light text-[18px]/[28px] text-left"
            >
              Our products are produced in conformity with the Standard
              Organization of Nigeria (SON), and we are fully registered with
              the National Agency for Food and Drug Administration and Control
              (NAFDAC RC. 1096978) .
            </Typography>
          </Box>
        </Box>
        <Box component="div" className="w-full flex flex-col gap-4">
          <Typography
            variant="h4"
            className="w-full flex gap-6 text-text-primary font-bold font-helveticaBold text-[20px]/[30px] text-left"
          >
            Our Aim
          </Typography>

          <Typography
            variant="h2"
            className="w-full text-text-light font-helveticaLight font-light text-[18px]/[28px] text-left"
          >
            First Drops Nig aim to be the best service provider in its markets
            and we will d o this by:
          </Typography>
          <Box component="ul" className="mx-0 ml-2 px-0">
            <Box
              component="li"
              className="w-full text-text-light font-helveticaLight font-light text-[18px]/[28px] tracking-[0.002em] text-left"
            >
              Being customer driven and meeting individual customer
              requirements.
            </Box>{" "}
            <Box
              component="li"
              className="w-full text-text-light font-helveticaLight font-light text-[18px]/[28px] tracking-[0.002em] text-left"
            >
              Setting and monitoring achievement of objectives.
            </Box>
            <Box
              component="li"
              className="w-full text-text-light font-helveticaLight font-light text-[18px]/[28px] tracking-[0.002em] text-left"
            >
              Focusing on efficiency and the standard of services provided.
            </Box>
            <Box
              component="li"
              className="w-full text-text-light font-helveticaLight font-light text-[18px]/[28px] tracking-[0.002em] text-left"
            >
              Continually improving the effectiveness of the Quality Management.
            </Box>
            <Box
              component="li"
              className="w-full text-text-light font-helveticaLight font-light text-[18px]/[28px] tracking-[0.002em] text-left"
            >
              System by setting up of a high
            </Box>
            <Box
              component="li"
              className="w-full text-text-light font-helveticaLight font-light text-[18px]/[28px] tracking-[0.002em] text-left"
            >
              standard quality laboratory that caters for all our product range.
               
            </Box>
          </Box>
          <Typography
            variant="h2"
            className="w-full text-text-light font-helveticaLight font-light text-[18px]/[28px] text-left"
          >
            We aim to maintain long term relationships with our customers and as
            thus the needs of our customers are fundamental in all work that we
            undertake.
          </Typography>
          <Typography
            variant="h4"
            className="w-full flex gap-6 text-text-primary font-bold font-helveticaBold text-[20px]/[30px] text-left"
          >
            Specialized Applications
          </Typography>

          <Typography
            variant="h2"
            className="w-full text-text-light font-helveticaLight font-light text-[18px]/[28px] text-left"
          >
            We specialize in crafting PET bottles designed for specialized
            applications, including those requiring unique shapes, or sizes.
          </Typography>
        </Box>
      </Box>
      <Box
        className="w-full md:w-1/2  flex flex-col gap-4 md:mt-8"
        data-aos="fade-left"
      >
        <Image
          src="/images/blue-test-tubes.jpeg"
          className="w-full sm:w-[full] h-full lg:h-[450px] lg:w-[450px] xxl:h-[512px] xxl:w-[512px] rounded-[10px] md:mt-8 lg:mx-8"
          width={512}
          height={557}
          alt="plastic bottle"
        />
      </Box>
    </Box>
  )
}
