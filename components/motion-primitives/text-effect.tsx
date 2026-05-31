"use client"

import { motion, type Variants } from "motion/react"
import React from "react"
import { cn } from "@/lib/utils"

type TextEffectProps = {
  children: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  className?: string
  preset?: "fade-in-blur" | "fade-in" | "blur-in" | "slide-up"
  per?: "word" | "char" | "line"
  speedSegment?: number
  delay?: number
}

const presetVariants: Record<string, Variants> = {
  "fade-in-blur": {
    hidden: { opacity: 0, filter: "blur(4px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "blur-in": {
    hidden: { filter: "blur(8px)" },
    visible: { filter: "blur(0px)" },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
}

export const TextEffect = ({
  children,
  as: Tag = "h1",
  className,
  preset = "fade-in-blur",
  per = "word",
  speedSegment = 0.3,
  delay = 0,
}: TextEffectProps) => {
  const segments = React.useMemo(() => {
    if (per === "line") {
      return children.split("\n").filter(Boolean)
    }
    if (per === "char") {
      return children.split("")
    }
    return children.split(" ")
  }, [children, per])

  const variants = presetVariants[preset] || presetVariants["fade-in-blur"]

  return (
    <Tag className={cn(className)}>
      {segments.map((segment, i) => (
        <motion.span
          key={`${segment}-${i}`}
          className="inline-block"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            duration: speedSegment,
            delay: delay + i * speedSegment * 0.5,
            ease: "easeOut",
          }}
        >
          {segment}
          {per === "word" && i < segments.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  )
}
