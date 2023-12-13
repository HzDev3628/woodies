import './style/global.css'

import type { Metadata } from 'next'

import { cherry, montserrat, nunito } from '@/lib/fonts'

import { Footer } from './layout/footer'
import { Header } from './layout/header'

export const metadata: Metadata = {
  title: 'Woodies',
  description:
    'In a mystical Solana forest nestled far away from human civilization, there lived cute and friendly Woodies that were created by mother nature'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`text-primary ${nunito.className} ${nunito.variable} ${montserrat.variable} ${cherry.variable} antialiased`}
      >
        <div className="absolute z-[1] h-full w-full backdrop-blur-2xl" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
