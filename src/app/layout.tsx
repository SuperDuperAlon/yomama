import { Cinzel } from 'next/font/google'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.scss'

export const metadata = {
  title: 'Yomama',
  description: 'Buy flowers for Yomama',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className=''>
        <Header />
        <main className=''>
          <>
            {children}
          </>
        </main>
        <Footer />
      </body>
    </html>
  )
}
