'use client'
import Link from 'next/link'
import { CiLogin } from 'react-icons/ci'
import { HeaderNav } from './HeaderNav'
import { IoMenu } from 'react-icons/io5'
import { useState, useRef, useEffect } from 'react'

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const handleMenuClose = (): void => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleCloseMenu = (event: MouseEvent): void => {
      if (
        !menuRef?.current?.contains(event?.target as Node) &&
        !(event.target as HTMLElement)?.classList?.contains('icon-mobile')
      ) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleCloseMenu)
    return () => {
      document.removeEventListener('mousedown', handleCloseMenu)
    }
  }, [menuRef])

  return (
    <>
      <div className='header-icon-mobile'>
        <IoMenu
          className='icon-mobile'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      {isMenuOpen ? (
        <div
          ref={menuRef}
          className='menu-open'>
          <h3>Bem Vindo</h3>
          <HeaderNav handleMenuClose={handleMenuClose} />
          <div className='profile-mobile'>
            <Link
              onClick={() => handleMenuClose()}
              href='/login'>
              <CiLogin /> Login
            </Link>
            <Link href='/api/logout'>Logout</Link>
          </div>
        </div>
      ) : null}
    </>
  )
}
