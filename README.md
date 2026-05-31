# WaitKit — Waitlist Infrastructure for Your App

WaitKit is a drop-in SDK that gives you email collection, subscriber analytics, and a React hook — so you can focus on shipping, not building infrastructure.

## Features

- **Waitlist Dashboard** — Monitor signups, track subscriber growth, and manage your waitlist from a clean, real-time dashboard.
- **React Hook** — The `useWaitlist` hook gives you join, count, loading states, and error handling out of the box.
- **TypeScript First** — Full type definitions for every API response, error, and join option.
- **Subscriber Analytics** — Track signups with custom metadata, source attribution, and real-time subscriber count.

## Getting Started

```bash
npm install waitkit
```

```tsx
import { WaitKit } from "waitkit"

const wk = new WaitKit({
  apiKey: "wk_...",
  projectSlug: "my-startup",
})

// Add a subscriber
await wk.subscribers.create({
  email: "user@example.com",
})

// Get total count
const total = await wk.subscribers.count()
```

## Tech Stack

- [Next.js](https://nextjs.org) — React framework
- [shadcn/ui](https://ui.shadcn.com) — Component library
- [Motion](https://motion.dev) — Animations
- [Tailwind CSS v4](https://tailwindcss.com) — Styling
- [Shiki](https://shiki.style) — Syntax highlighting
- [TypeScript](https://www.typescriptlang.org) — Type safety
