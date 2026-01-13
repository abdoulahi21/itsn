import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AppProvider } from "@/components/providers"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ALD TECH – Agence Digitale & Développement Web",
  description:
    "ALD TECH est une agence digitale spécialisée en développement web, design graphique et marketing digital. Créons des solutions digitales modernes et performantes.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo2.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo2.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo2.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo2.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <AppProvider>{children}</AppProvider>
        <Analytics />
      </body>
    </html>
  )
}
