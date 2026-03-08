import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hello 👋🏻, Welcome!',
  description: 'Code with Monisha, a software engineer and educator passionate about teaching programming and software development. Join me on this coding journey as we explore various programming languages, frameworks, and best practices together.',
  generator: 'none',
  icons: {
    // using instructor photo stored in public directory
    // browsers generally prefer .ico or .png, but jpg often works too
    icon: '/1.png',      
    shortcut: '/1.png',  
    apple: '/1.png',     
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  )
}
