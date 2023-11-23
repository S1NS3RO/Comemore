import '@/styles/c-header.scss'

import Link from "next/link"

export default function Header() {
  return (
    <header>
      <div className='header-container'>
        <nav>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/login'>Login</Link>
            </li>
            <li>
              <Link href='/comprar'>Comprar</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
