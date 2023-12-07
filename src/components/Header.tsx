'use client'
import '@/styles/c-header.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { HeaderNav } from './HeaderNav'
import { CiLogin } from 'react-icons/ci'
import { IoMenu } from 'react-icons/io5'

export default function Header() {
  const [isMobile, setIsMobile] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const handleMenuClose = (): void => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleCloseMenu = (event: MouseEvent): void => {
      if (
        !menuRef?.current?.contains(event?.target as Node) &&
        !(event.target as HTMLElement)?.classList?.contains('open_menu')
      ) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleCloseMenu)
    return () => {
      document.removeEventListener('mousedown', handleCloseMenu)
    }
  }, [menuRef])

  useEffect(() => {
    const updateWindowDimensions = () => {
      if (window.innerWidth <= 960) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
        handleMenuClose()
      }
    }

    window.addEventListener('resize', updateWindowDimensions)

    updateWindowDimensions()

    return () => {
      window.removeEventListener('resize', updateWindowDimensions)
    }
  }, [])
  return (
    <header>
      <div className='header-container'>
        {!isMobile ? (
          <div className='navigation'>
            <div className='logo'>
              <Image
                src='/icon.png'
                alt='logo'
                width={32}
                height={32}
                quality={100}
              />
              <Link href='/'>Comemore</Link>
            </div>
            <div>
              <HeaderNav />
            </div>
            <div className='profile'>
              <Link href='/login'>
                <CiLogin /> Login
              </Link>
              <Link href='/api/logout'>Logout</Link>
            </div>
          </div>
        ) : (
          <div className='navigation'>
            <div className='logo'>
              <Image
                src='/icon.png'
                alt='logo'
                width={24}
                height={24}
                quality={100}
              />
              <Link href='/'>Comemore</Link>
            </div>
            <IoMenu
              className='open_menu'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={isMenuOpen && { color: 'var(--text-purple)' }}
            />
          </div>
        )}
      </div>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className='menu-open'>
          <h3>Bem Vindo</h3>
          <HeaderNav handleMenuClose={handleMenuClose} />
          <div className='profile'>
            <Link
              onClick={() => handleMenuClose()}
              href='/login'>
              <CiLogin /> Login
            </Link>
            <Link href='/api/logout'>Logout</Link>
          </div>
        </div>
      )}
    </header>
  )
}
