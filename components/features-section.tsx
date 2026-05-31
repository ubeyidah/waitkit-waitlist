import Image from "next/image"
import { CalendarCheck, Layout, Sparkles, Target } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section id="features">
      <div className="py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-full overflow-hidden rounded-[2rem] border border-border/50 bg-muted p-2 backdrop-blur-3xl dark:bg-background/50">
              <div className="rounded-[1.5rem] border bg-background p-6 shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl">
                <Layout className="size-5 text-primary" />
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  Waitlist Dashboard
                </h3>
                <p className="mt-3 max-w-xl text-balance text-muted-foreground">
                  Monitor signups, track subscriber growth, and manage your
                  waitlist - all from a clean, real-time dashboard.
                </p>
                <div className="-mt-2 mr-0.5 -ml-2 mask-b-from-95% pt-2 pl-2">
                  <div className="relative mx-auto mt-8 h-96 overflow-hidden rounded-tl-(--radius) border border-transparent bg-background shadow ring-1 ring-foreground/5">
                    <Image
                      src="/hero-app.png"
                      alt="WaitKit dashboard screenshot"
                      width="2880"
                      height="1842"
                      className="h-full object-cover object-top-left"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full rounded-[2rem] border border-border/50 bg-muted p-2 backdrop-blur-3xl dark:bg-background/50">
              <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border bg-background p-6 shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl">
                <Target className="size-5 text-primary" />
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  React Hook
                </h3>
                <p className="mt-3 flex-1 text-balance text-muted-foreground">
                  The{" "}
                  <code className="rounded border bg-background px-1 py-0.5 font-mono text-xs text-foreground">
                    useWaitlist
                  </code>{" "}
                  hook gives you join, count, loading states, and error handling
                  out of the box.
                </p>
              </div>
            </div>

            <div className="h-full rounded-[2rem] border border-border/50 bg-muted p-2 backdrop-blur-3xl dark:bg-background/50">
              <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border bg-background p-6 shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl">
                <CalendarCheck className="size-5 text-primary" />
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  TypeScript First
                </h3>
                <p className="mt-3 flex-1 text-balance text-muted-foreground">
                  Full type definitions for every API response, error, and join
                  option - autocomplete included.
                </p>
              </div>
            </div>

            <div className="h-full rounded-[2rem] border border-border/50 bg-muted p-2 backdrop-blur-3xl dark:bg-background/50">
              <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border bg-background p-6 shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl">
                <Sparkles className="size-5 text-primary" />
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  Subscriber Analytics
                </h3>
                <p className="mt-3 flex-1 text-balance text-muted-foreground">
                  Track signups with custom metadata, source attribution, and
                  real-time subscriber count.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
