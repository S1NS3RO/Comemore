'use client'
import '@/styles/c-footer.scss'
import { usePathname } from 'next/navigation'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const pathname = usePathname()
  return (
    <>
      {pathname != '/' && (
        <footer>
          <div className='footer-container'>
            <div className='social'>
              <BsInstagram />
              <FaFacebookF />
              <FaTwitter />
            </div>
            <ul>
              <li>(99) 99999-9999</li>
              <li>contato@comemore.com.br</li>
            </ul>
          </div>
        </footer>
      )}
    </>
  )
}
