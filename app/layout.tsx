import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Toast from '@/components/Toast'
import GradientBg from '@/components/GradientBg'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Some things are better said with honesty.',
  description: 'Not pressure. Just clarity. A sincere conversation with beautiful design.',
  keywords: ['honesty', 'clarity', 'conversation', 'emotional'],
  openGraph: {
    title: 'Emotional Clarity',
    description: 'Some things are better said with honesty.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-[#0a0e27] text-white overflow-x-hidden">
        <GradientBg />
        <Toast />
        {children}
      </body>
    </html>
  )
}
