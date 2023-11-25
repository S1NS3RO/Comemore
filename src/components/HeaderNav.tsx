'use client'
import Link from 'next/link'

interface HeaderNavProps {
  handleMenuClose?: () => void
}
export function HeaderNav({ handleMenuClose }: HeaderNavProps) {
  return (
    <>
      <nav>
        <ul onClick={() => handleMenuClose && handleMenuClose()}>
          <li>
            <Link href='/planos'>Planos</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
