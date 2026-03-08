import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hello 👋🏻, Welcome!',
  description: 'Join Monisha, a Computer Science Engineer and educator, for engaging coding and AI classes where learners build games, apps, and future ready tech skills🚀',
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
