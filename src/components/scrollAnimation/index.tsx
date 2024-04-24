import React, { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

interface Props {
  children: React.ReactNode
}
const ScrollAnimation = ({ children }: Props) => {
  const controls = useAnimation()
  const ref = useRef<any>([])

  useEffect(() => {
    const handleScroll = () => {
      const distanceFromTop = ref?.current?.getBoundingClientRect().top
      if (distanceFromTop < window.innerHeight * 0.8) {
        controls.start({ opacity: 1, y: 0 })
      } else {
        controls.start({ opacity: 0, y: 50 })
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [controls])

  return (
    <div ref={ref} style={{ minHeight: "100vh" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default ScrollAnimation
