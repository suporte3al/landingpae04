import React from 'react'
import Link from 'next/link'
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoYoutube } from 'react-icons/bi'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* juridic */}
          <div className="grid md:col-span-6 lg:col-span-3 leading-6">
            <h3 className='my-4 uppercase font-semibold text-[28px] text-[#37517e]'>ATACADO DO LOJISTA</h3>
            <p className='text-sm'>
              Comercial Maranguape LTDA - 01625371000202<br />
              Natal, RN 59139572<br />
              Brasil
            </p>

            <div className='my-8 text-sm'>
              <p><span className='font-semibold'>Número: </span>+55 (84)2030-5000</p>
              <p><span className='font-semibold'>E-mail: </span>contato@atacadodolojista.com.br</p>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-around">

            {/* Social links */}
            <ul className="flex gap-2 mb-8 md:gap-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link href="https://www.facebook.com/atacadolojistarn" className="flex w-9 h-9  justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" target='_blank' aria-label="Facebook">
                  <BiLogoFacebook size={32} />
                </Link>
              </li>

              <li>
                <Link href="https://www.youtube.com/channel/UCvtK63dslGYgrYVU2P7Kp8Q" className="flex w-9 h-9  justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" target='_blank' aria-label="Youtube">
                  <BiLogoYoutube size={32} />
                </Link>
              </li>
              
              <li>
                <Link href="https://www.instagram.com/atacadodolojista" className="flex w-9 h-9  justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" target='_blank' aria-label="Instagram">
                  <BiLogoInstagram size={32} />
                </Link>
              </li>
              
              <li>
                <Link href="https://br.linkedin.com/company/atacado-do-lojista" className="flex w-9 h-9 justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" target='_blank' aria-label="Linkedin">
                  <BiLogoLinkedin size={32} />
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Atacado do Lojista. Todos os direitos reservados.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
