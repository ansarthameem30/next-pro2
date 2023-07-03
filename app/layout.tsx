import Navbar from '@/components/Navbar'
import './global.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'New App View',
  description: 'App View checker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
          </main>
          <Footer />
        </body>
    </html>
  )
}
