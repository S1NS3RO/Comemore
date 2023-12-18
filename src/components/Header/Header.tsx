import '@/styles/c-header.scss'
import { IoLogOutOutline } from 'react-icons/io5'
import { HeaderNav } from './HeaderNav'
import { CiLogin } from 'react-icons/ci'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import AuthService from '@/modules/auth/services/auth-services'

export default async function Header() {
  const dataSession = await AuthService.dataSession()
  return (
    <header>
      <div className='header-container'>
        <div className='logo'>
          <Link href='/'>
            <img
              src='/icon.png'
              alt='logo'
            />
            Comemore
          </Link>
        </div>
        <div className='header-menu'>
          <HeaderNav />
        </div>
        <div className='profile'>
          {(await AuthService.isSessionValid()) ? (
            <>
              {dataSession?.name}
              <Link href='/api/logout'>
                <IoLogOutOutline />
              </Link>
            </>
          ) : (
            <Link href='/login'>
              <CiLogin /> Entrar
            </Link>
          )}
        </div>
        <MobileMenu />
      </div>
    </header>
  )
}
