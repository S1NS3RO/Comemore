import '@/styles/p-home.scss'
import Button from '@/components/Button'

export default function Home() {
  return (
    <><div className="home">
      <div className='home-text'>
        <h1>Seu evento conectado</h1>
        <Button text={'Saber mais'} href="/about" />
      </div>
      <div className='home-img'>
        <img
          src='./1.png'
          alt='Comemore'
        />
      </div>
    </div>
    </>
  )
}
