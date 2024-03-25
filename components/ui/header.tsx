import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="#home" className="block" aria-label="Atacado do lojista">
              <Image src='/images/logo.png' alt='logo' width={64} height={64}/>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/#oferta"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Oferta
                </Link>
              </li>
              <li>
                <Link href="#features" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Destaques
                </Link>
              </li>
              <li>
                <Link href="https://www.atacadodolojista.com.br/" target='_blank' className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Nosso Site
                </Link>
              </li>
              <li>
                <Link href="https://youtu.be/iXX1xGiw44M?si=YTLAiSkK5G8QHJ8G" target='_blank' className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
