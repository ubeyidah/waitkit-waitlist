import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { TextEffect } from "@/components/motion-primitives/text-effect"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import { HeroHeader } from "@/components/header"
import FeaturesSection from "@/components/features-section"
import FooterSection from "@/components/footer"
import CodeBlock from "@/components/code-block"
import { WaitlistForm } from "@/components/waitlist-form"
import { wk } from "@/lib/waitkit"

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

async function getCount() {
  try {
    return await wk.subscribers.count()
  } catch {
    return null
  }
}

export default async function HeroSection() {
  const count = await getCount()

  return (
    <>
      <HeroHeader />

      <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/20 via-primary/10 to-transparent blur-3xl" />
            <div className="absolute -top-20 left-1/3 size-[400px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/10 to-transparent blur-2xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20 lg:pt-48">
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <a
                href="#hero-email"
                className="group mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-all hover:text-foreground"
              >
                Early access
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="font-display text-5xl font-semibold tracking-tight text-balance md:text-6xl"
              >
                Build your product. We&apos;ll handle the waitlist.
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-6 max-w-2xl text-lg text-pretty"
              >
                WaitKit is a drop-in SDK that gives you email collection,
                subscriber analytics, and a React hook - so you can focus on
                shipping, not building infrastructure.
              </TextEffect>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12"
              >
                <WaitlistForm />

                <div className="mt-6 flex items-center justify-center gap-3">
                  <div className="flex hidden -space-x-2">
                    {[
                      "https://avatars.githubusercontent.com/u/47919550?v=4",
                      "https://avatars.githubusercontent.com/u/31113941?v=4",
                      "https://avatars.githubusercontent.com/u/68236786?v=4",
                      "https://avatars.githubusercontent.com/u/99137927?v=4",
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

                <div
                  aria-hidden
                  className="relative mx-auto mt-32 max-w-4xl bg-radial from-primary/50 to-transparent to-55% text-left dark:from-primary/25"
                >
                  <div className="absolute inset-0 mx-auto max-w-lg -translate-x-6 -translate-y-12 rounded-[2rem] border border-border/50 bg-background [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] p-2 sm:-translate-x-10">
                    <div className="relative h-96 overflow-hidden rounded-[1.5rem] border p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] before:opacity-50"></div>
                  </div>
                  <div className="mx-auto max-w-lg translate-x-8 rounded-[2rem] border border-border/50 bg-muted [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] p-2 backdrop-blur-3xl sm:translate-x-14 dark:bg-background/50">
                    <div className="overflow-hidden rounded-[1.5rem] border bg-background p-4 shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl">
                      <div className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
                        <span className="size-2 rounded-full bg-red-500" />
                        <span className="size-2 rounded-full bg-yellow-500" />
                        <span className="size-2 rounded-full bg-green-500" />
                        <span className="ml-2">waitlist.tsx</span>
                      </div>
                      <CodeBlock
                        code={`import { WaitKit } from "waitkit"

const wk = new WaitKit({
  apiKey: "wk_9f8a2e...",
  projectSlug: "my-startup"
})

// Add a subscriber
await wk.subscribers.create({
  email: "user@example.com"
})

// Get total count
const total = await wk
  .subscribers.count()

console.log(total) // 2847`}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] [background-size:16px_16px] mix-blend-overlay dark:opacity-5"></div>
                </div>
              </AnimatedGroup>
            </div>
          </div>
        </section>
        <FeaturesSection />
      </main>
      <FooterSection />
    </>
  )
}
