import '@/styles/c-footer.scss'

import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="social">
          <BsInstagram />
          <FaFacebookF />
          <FaTwitter />
        </div>
        <ul>
          <li>(99) 9999-9999</li>
          <li>contato@comemore.com.br</li>
          <li>Rua Qualquer, 123 - Cidade</li>
        </ul>
      </div>
    </footer>
  )
}
