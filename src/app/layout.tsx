import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const playfair = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Soluna Dalat Hotel — Boutique Hotel Đà Lạt',
  description:
    'Nơi mặt trời và mặt trăng gặp nhau. Boutique hotel 29 phòng tại trung tâm Đà Lạt — thiết kế Japandi, rooftop breakfast, Soluna Café.',
  keywords: ['khách sạn đà lạt', 'boutique hotel dalat', 'soluna hotel', 'đặt phòng đà lạt'],
  openGraph: {
    title: 'Soluna Dalat Hotel',
    description: 'Boutique hotel Japandi tại trung tâm Đà Lạt.',
    type: 'website',
    locale: 'vi_VN',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-body bg-soluna-cream text-soluna-black antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
