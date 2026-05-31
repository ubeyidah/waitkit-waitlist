"use client"

import { useEffect, useRef, useState } from "react"
import { createHighlighter, type Highlighter } from "shiki"

let highlighterPromise: Promise<Highlighter> | null = null

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      langs: ["tsx", "bash"],
      themes: ["github-light", "github-dark"],
    })
  }
  return highlighterPromise
}

export default function CodeBlock({
  code,
  lang = "tsx",
}: {
  code: string
  lang?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [theme, setTheme] = useState<"github-light" | "github-dark">(
    "github-dark"
  )

  useEffect(() => {
    const el = document.documentElement
    const updateTheme = () => {
      setTheme(el.classList.contains("dark") ? "github-dark" : "github-light")
    }
    updateTheme()
    const observer = new MutationObserver(updateTheme)
    observer.observe(el, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let cancelled = false
    getHighlighter().then((highlighter) => {
      if (cancelled) return
      const html = highlighter.codeToHtml(code, { lang, theme })
      if (ref.current) {
        ref.current.innerHTML = html
      }
    })
    return () => {
      cancelled = true
    }
  }, [code, lang, theme])

  return (
    <div
      ref={ref}
      className="[&_.line]:leading-6 [&_code]:!font-mono [&_code]:text-sm [&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:text-sm"
    />
  )
}
