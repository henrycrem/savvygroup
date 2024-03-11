import './globals.css'
import type { Metadata } from 'next'

import { Urbanist } from 'next/font/google'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Savvy Group of Companies',
  description: 'Savvy Group of Companies, is and company that run construction service, coffie shop, modern bar, and minerial mininig services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <ToastProvider />
      <ModalProvider />
        <Navbar/>
        {children}
        <Footer/>
      
      </body>
    </html>
  )
}
