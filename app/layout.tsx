import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter, Noto_Serif, Outfit } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/next"

const notoSerifHeading = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const fontDisplay = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "WaitKit - Waitlist Infrastructure for Your App",
  description:
    "Drop-in SDK that handles email collection, subscriber management, and waitlist analytics. No backend to build, no database to set up.",
  keywords: [
    "waitlist",
    "sdk",
    "email collection",
    "subscriber management",
    "waitlist analytics",
    "react hook",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "WaitKit - Waitlist Infrastructure for Your App",
    description:
      "Drop-in SDK that handles email collection, subscriber management, and waitlist analytics. No backend to build, no database to set up.",
    url: "https://waitkit.dev",
    siteName: "WaitKit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WaitKit - Waitlist Infrastructure for Your App",
    description:
      "Drop-in SDK that handles email collection, subscriber management, and waitlist analytics.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable,
        notoSerifHeading.variable,
        fontDisplay.variable
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "WaitKit",
              applicationCategory: "DeveloperApplication",
              description:
                "Drop-in SDK that handles email collection, subscriber management, and waitlist analytics.",
              url: "https://waitkit.dev",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
