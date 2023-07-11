import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'

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
      <body className=' bg-red-100'>
        <main className='index-layout'>


          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
