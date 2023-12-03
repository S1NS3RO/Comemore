import '@/styles/p-home.scss'
import Image from 'next/image'
import Button from '@/components/Button'

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
        <Image
          src='/1.png'
          alt='Comemore'
          fill
          quality={100}
          placeholder='blur'
        />
      </div>
    </div>
  )
}
