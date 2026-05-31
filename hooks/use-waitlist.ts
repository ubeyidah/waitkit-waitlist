"use client"

import { useWaitlist as useWaitlistReact } from "waitkit/react"
import { wk } from "@/lib/waitkit"

export function useWaitlist() {
  return useWaitlistReact(wk)
}
