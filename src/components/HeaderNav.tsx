'use client'

// NextJs
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Tipagem
interface HeaderNavProps {
  handleMenuClose?: () => void
}

/***/
export function HeaderNav({ handleMenuClose }: HeaderNavProps) {
  const pathname = usePathname()

  return (
    <>
      <nav>
        <ul onClick={() => handleMenuClose && handleMenuClose()}>
          <li>
            <Link
              className={pathname === '/' ? 'active' : ''}
              href='/planos'
              passHref>
              Ver planos
            </Link>
          </li>
          <li>
            <Link
              className={pathname === '/' ? 'active' : ''}
              href='/about'
              passHref>
              Saber mais
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
