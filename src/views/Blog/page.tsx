"use client"
import { ArrowUp } from "@/components/SVGs"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import {
  Divider,
  Grid,
  Pagination,
  PaginationItem,
  Typography,
} from "@mui/material"
import Box from "@mui/material/Box"
import Image from "next/image"
import { useRouter } from "next/navigation"
import * as React from "react"

const blogs = [
  {
    id: 1,
    title: "UX review presentations",
    author: "Olivia Rhye",
    date: "20 Jan 2024",
    src: "/images/uiux-blog.png",
    description: `How do you create compelling presentations that wow your colleagues and impress your managers?`,
  },
  {
    id: 2,
    title: "Migrating to Linear 101",
    author: "Phoenix Baker",
    date: "19 Jan 2024",
    src: "/images/migrating-blog.png",
    description: `Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.`,
  },
  {
    id: 3,
    title: "Building your API stack",
    author: "Lana Steiner ",
    date: "18 Jan 2024",
    src: "/images/api-stack-blog.png",
    description: `The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.`,
  },
  {
    id: 4,
    title: "Bill Walsh leadership lessons",
    author: "Alec Whitten",
    date: "17 Jan 2024",
    src: "/images/leadership-blog.png",
    description: `Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?`,
  },
  {
    id: 5,
    title: "PM mental models",
    author: "Demi WIlkinson",
    date: "16 Jan 2024",
    src: "/images/mental-model-blog.png",
    description: `Mental models are simple expressions of complex processes or relationships.`,
  },
  {
    id: 6,
    title: "What is wireframing?",
    author: "Candice Wu",
    date: "15 Feb 2024",
    src: "/images/wire-frame-blog.jpeg",
    description: `Introduction to Wireframing and its Principles. Learn from the best in the industry.`,
  },
  {
    id: 7,
    title: "How collaboration makes us better designers",
    author: "Natali Craig",
    date: "14 Jan 2024",
    src: "/images/collaborating-blog.png",
    description: `Collaboration can make our teams stronger, and our individual designs better.`,
  },
  {
    id: 8,
    title: "Our top 10 Javascript frameworks to use",
    author: "Drew Cano",
    date: "13 Jan 2024",
    src: "/images/js-blog.png",
    description: `JavaScript frameworks make development easy with extensive features and functionalities.`,
  },
  {
    id: 9,
    title: "Podcast: Creating a better CX Community",
    author: "Orlando Diggs",
    date: "12 Jan 2024",
    src: "/images/podcast-blog.png",
    description: `Starting a community doesn’t need to be complicated, but how do you get started?`,
  },
  {
    id: 10,
    title: "Migrating to Linear 101",
    author: "Phoenix Baker",
    date: "19 Jan 2024",
    src: "/images/migrating-blog.png",
    description: `Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.`,
  },
  {
    id: 11,
    title: "Our top 10 Javascript frameworks to use",
    author: "Phoenix Baker",
    date: "19 Jan 2024",
    src: "/images/podcast-blog.png",
    description: `Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.`,
  },
  {
    id: 12,
    title: "What is wireframing?",
    author: "Marie Blogger",
    date: "30 Jan 2024",
    src: "/images/collaborating-blog.png",
    description: `Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.`,
  },
]

export default function OurBlogs() {
  const router = useRouter()
  const [page, setPage] = React.useState(1)
  const pageSize = 12
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentPageData = blogs?.slice(startIndex, endIndex)

  const handlePageChange = (_: any, value: number) => {
    setPage(value)
  }
  return (
    <Box className="w-full max-w-[1216px] h-full flex flex-col lg:flex-row gap-[32px] xl:gap-[67px] px-4 md:px-0">
      <Grid container spacing={6}>
        {currentPageData?.map((blog, i) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              key={`blog - ${i}`}
              className="w-[384px] flex flex-col gap-[20px] cursor-pointer justify-center items-center"
              onClick={() => router.push(`/blog/${blog.title}`)}
            >
              <Image
                src={blog.src}
                className="w-[343px] sm:w-[384px] h-[240px] rounded-[16px]"
                width={384}
                height={240}
                alt={blog.title}
                loading="lazy"
              />
              <Box className="w-full flex flex-col gap-2 cursor-pointer justify-start items-start">
                <Box
                  component="div"
                  className="w-full flex gap-1 font-interSemibold font-semibold text-sm text-left text-primary"
                >
                  <Box component="span">{blog.author}</Box>
                  <Box component="span" className="text-[6px] mt-[2px]">
                    &#x25CF;
                  </Box>
                  <Box component="span">{blog.date}</Box>
                </Box>
                <Box
                  component="div"
                  className="w-full flex gap-1 font-interSemibold font-semibold text-xl text-left text-dark justify-between"
                >
                  {blog.title}
                  <ArrowUp />
                </Box>
                <Typography className="w-full font-inter font-normal text-sm text-[#475467] text-left">
                  {blog.description}
                </Typography>
              </Box>
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
              count={Math.ceil(blogs.length / pageSize)}
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
    </Box>
  )
}
