import '@/styles/p-home.scss'
import Button from '@/components/Button'
import AuthService from '@/modules/auth/services/auth-services'

export default function Home() {
  return (
    <div className='p-home'>
      <div className='home-text'>
        <h1>
          Seu evento <span className='site-name'>conectado</span>
        </h1>
        <Button
          text={'Saber mais'}
          href='/about'
        />
      </div>
      <div className='home-img'>
        <img
          src='/1.png'
          alt='Comemore'
        />
      </div>
    </div>
  )
}
