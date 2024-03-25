import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'Ofertas - Atacado do Lojista',
  description: 'Pioneira desde sempre, somos a primeira loja de Auto-Serviço de Material de Construção do Nordeste! Aqui temos o que você precisa.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-[#f8f8f8] text-gray-700 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          <Banner />
        </div>
      </body>
    </html>
  )
}
 