import { Providers } from "@/components/providers"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Cabin, Epilogue } from "next/font/google"

import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"

const cabin = Cabin({ subsets: ["latin"], variable: "--font-sans" })
const spaceGrotesk = Epilogue({
  subsets: ["latin"],
  weight: "900",
  variable: "--font-heading",
  style: "italic",
})

export const metadata: Metadata = {
  title: "jStack App",
  description: "Created using jStack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={cn(cabin.variable, spaceGrotesk.variable)}>
        <body className="font-sans bg-brand-50 text-brand-950 antialiased">
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
