'use client'
import '@/styles/c-header.scss'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { HeaderNav } from './HeaderNav'
import { CiLogin } from 'react-icons/ci'
import { IoMenu } from 'react-icons/io5'

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleCloseMenu = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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
      if (window.innerWidth <= 600) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
      //setIsMenuOpen(false)
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
        <div className='logo'>
          <Link href='/'>Comemore</Link>
        </div>
        {!isMobile ? (
          <>
            <HeaderNav />
            <div className='profile'>
              <Link href='/login'>
                <CiLogin /> Login
              </Link>
            </div>
          </>
        ) : (
          <IoMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
        )}
      </div>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className='menu-open'>
          <h3>Bem Vindo</h3>
          <HeaderNav />
          <div className='profile'>
            <Link href='/login'>
              <CiLogin />{' '}Login
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
