import React from 'react'
import { Inter } from 'next/font/google'
import AIanbot from '@/components/AIanbot'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ian Jiang - Entrepreneur and Educator',
  description: 'Personal website of Ian Jiang, showcasing projects, skills, and 3D printing journey.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <AIanbot />
      </body>
    </html>
  )
}

