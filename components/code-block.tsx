import { createHighlighter } from "shiki"

const highlighter = await createHighlighter({
  langs: ["tsx", "bash"],
  themes: ["github-light", "github-dark"],
})

export default function CodeBlock({
  code,
  lang = "tsx",
}: {
  code: string
  lang?: string
}) {
  const lightHtml = highlighter.codeToHtml(code, {
    lang,
    theme: "github-light",
  })
  const darkHtml = highlighter.codeToHtml(code, {
    lang,
    theme: "github-dark",
  })

  return (
    <div className="[&_.line]:leading-6 [&_code]:!font-mono [&_code]:text-sm [&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:text-sm">
      <div
        className="block dark:hidden"
        dangerouslySetInnerHTML={{ __html: lightHtml }}
      />
      <div
        className="hidden dark:block"
        dangerouslySetInnerHTML={{ __html: darkHtml }}
      />
    </div>
  )
}
