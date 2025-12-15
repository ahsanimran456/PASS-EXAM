import type React from "react"
import type { Metadata } from "next"
import { Lato, Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["300", "400", "700", "900"],
})

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Top Exam Helpers - Pay After Success",
  description:
    "Avail the best Proctored Online Exam & Classes Help Services with the aim of achieving your academic goals with top scores!",
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lato.variable} ${nunito.variable} font-sans antialiased`}>
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
