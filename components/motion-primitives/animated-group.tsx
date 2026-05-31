"use client"

import { motion, type Variants } from "motion/react"
import React from "react"
import { cn } from "@/lib/utils"

type AnimatedGroupProps = {
  children: React.ReactNode
  className?: string
  variants?: {
    container?: Variants
    item?: Variants
  }
  as?: "div" | "section" | "span"
}

export const AnimatedGroup = ({
  children,
  className,
  variants,
  as: Tag = "div",
}: AnimatedGroupProps) => {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      animate="visible"
      variants={variants?.container}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={variants?.item}>{child}</motion.div>
      ))}
    </motion.div>
  )
}
