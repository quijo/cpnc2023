
'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Footer from "@/components/footer/Footer"
import Navbar from '@/components/navbar2/Navbar2'





const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CPNC',
  description: 'Central Philippine Nazarene College',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />

        <div className="container">
          {children}
          
        </div>
         <Footer /> 
      </body>
    </html>
  )
}
