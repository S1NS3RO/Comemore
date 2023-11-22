import '@/styles/globals.scss'

import  Header  from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Comemore',
  description: 'É um prazer comemorar com você'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-br'>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
