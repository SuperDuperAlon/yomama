import { Suspense } from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Loading from '@/components/Loading'
import '@/styles/globals.scss'

export const metadata = {
  title: 'Yomama',
  description: 'Buy Yomama Flowers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
        <body className=''>
          <Suspense fallback={<Loading />}>
            <Header />
            <main className='index-layout'>
              <>
                {children}
              </>
            </main>
            <Footer />
          </Suspense>
        </body>
    </html>
  )
}
