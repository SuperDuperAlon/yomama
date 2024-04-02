import { Suspense } from 'react'

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// import store from './store'

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
      {/* <Provider store={store}> */}
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
      {/* </Provider> */}
    </html>
  )
}
