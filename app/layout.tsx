import type React from "react"
import type { Metadata } from "next"
import { Josefin_Sans, Poppins, Figtree } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const josefinSans = Josefin_Sans({ subsets: ["latin"], variable: "--font-josefin" })
const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: ["300", "400", "500", "600", "700"] })
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", weight: ["300", "400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Mishthy Yog Sadhna - Yoga & Wellness Center in Agra",
  description:
    "Awaken Your Inner Energy with Mishthy Yog Sadhna. Experience yoga, meditation, reiki, and holistic wellness in Agra, India.",
  icons: {
    icon: '/gallery/logo.jpg',
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${josefinSans.variable} ${poppins.variable} ${figtree.variable} bg-background text-foreground`} suppressHydrationWarning={true}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
