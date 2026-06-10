"use client"

import { useState, useEffect, useCallback } from "react"
import { WaitlistForm } from "./waitlist-form"

export function HeroWaitlist() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    fetch("/api/count")
      .then((res) => res.json())
      .then((d) => setCount(d.count))
      .catch(() => {})
  }, [])

  const increment = useCallback(() => {
    setCount((prev) => (prev !== null ? prev + 1 : prev))
  }, [])

  return (
    <>
      <WaitlistForm onSubscribed={increment} />

      <div className="mt-6 flex items-center justify-center gap-3">
        <div className="flex -space-x-2">
          {[
            "/profiles/ubeyidah.jpg",
            "/profiles/abhi.jpg",
            "/profiles/abdoab.jpg",
            "/profiles/shubham.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="size-8 rounded-full border-2 border-background bg-background"
            >
              <img
                className="aspect-square rounded-full object-cover"
                src={src}
                alt=""
                height="64"
                width="64"
              />
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">
            {count?.toLocaleString() || 0}+
          </span>{" "}
          developers already joined
        </p>
      </div>
    </>
  )
}
