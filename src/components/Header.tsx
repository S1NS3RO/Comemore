'use client'
import '@/styles/c-header.scss'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { CiLogin } from 'react-icons/ci'
import { IoMenu } from 'react-icons/io5'

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const updateWindowDimensions = () => {
      if (window.innerWidth <= 600) {
        setIsMobile(false)
      } else {
        setIsMobile(true)
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
        <div className='logo'>
          <Link href='/'>Comemore</Link>
        </div>
        {isMobile ? (
          <>
            <nav>
              <ul>
                <li>
                  <Link href='/planos'>Planos</Link>
                </li>
              </ul>
            </nav>
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
        <div className='menu-open'>
          <h3>Menu</h3>
          <ul>
            <li>
              <Link href='/planos'>Planos</Link>
            </li>
          </ul>
          <div className='profile'>
            <Link href='/login'>
              <CiLogin /> Login
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
