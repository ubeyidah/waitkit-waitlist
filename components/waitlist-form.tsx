"use client"

import { useState, type FormEvent } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Mail01Icon, CheckmarkCircle01Icon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, setIsPending] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return

    setError(null)
    setIsPending(true)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_WAITKIT_BASE_URL}/api/waitlist/${process.env.NEXT_PUBLIC_WAITKIT_PROJECT_SLUG}/join`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_WAITKIT_API_KEY}`,
          },
          body: JSON.stringify({ email }),
        }
      )

      if (!response.ok) {
        const body = await response.json().catch(() => ({}))
        throw new Error(body.message || "Something went wrong")
      }

      setSubscribed(true)
      setEmail("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsPending(false)
    }
  }

  if (subscribed) {
    return (
      <div className="mx-auto max-w-sm rounded-[calc(var(--radius)+0.5rem)] border border-border bg-background p-4 text-center shadow shadow-zinc-950/5">
        <HugeiconsIcon
          icon={CheckmarkCircle01Icon}
          className="mx-auto mb-2 size-8 text-primary"
        />
        <p className="font-medium text-foreground">You&apos;re on the list!</p>
        <p className="mt-1 text-sm text-muted-foreground">
          We&apos;ll be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-sm">
      <div className="relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border bg-background pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2 has-[input:focus]:ring-muted">
        <HugeiconsIcon
          icon={Mail01Icon}
          className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4"
        />

        <input
          id="hero-email"
          placeholder="Your mail address"
          className="h-12 w-full bg-transparent pl-12 focus:outline-none"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
        />

        <div className="md:pr-1.5 lg:pr-0">
          <Button
            aria-label="submit"
            size="sm"
            className="rounded-(--radius)"
            disabled={isPending || !email}
          >
            {isPending ? "Joining..." : "Join now"}
          </Button>
        </div>
      </div>
      {error && (
        <p className="mt-2 text-center text-sm text-destructive">{error}</p>
      )}
    </form>
  )
}
