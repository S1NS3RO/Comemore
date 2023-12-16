import Link from 'next/link'
import { CiLogin } from 'react-icons/ci'

export default function LoginLogout() {
  return (
    <div>
      <div className='profile'>
        <Link href='/login'>
          <CiLogin /> Login
        </Link>
        <Link href='/api/logout'>Logout</Link>
      </div>
    </div>
  )
}
