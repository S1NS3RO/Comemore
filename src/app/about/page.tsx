import '@/styles/p-about.scss'
import Image from 'next/image'

export default function About() {
  return (
    <div className='p-about'>
      <div className='page1'>
        <div className='content'>
          <h1>
            A <span className='site-name'>Comemore</span> transforma seus
            eventos e simplifica suas celebrações!
          </h1>
          <p>
            transforme a organização do seu evento em uma experiência fluida e
            elegante. Simplificamos a confirmação de presença dos seus
            convidados, proporcionando a você total controle sobre a lista de
            convidados. Faça do seu evento uma celebração perfeita com
            facilidade e praticidade.
          </p>
        </div>
      </div>
      <div className='page2'>
        <div className='content'>
          <h1>
            Informe seus <span className='site-name'>convidados</span>
          </h1>
          <p>
            Com a Comemore, você deixa seus convidados informados com um status
            online de todas as informações disponibilizadas por você, como:
            Endereço, acompanhantes, numero para dúvidas, entre outros.
          </p>
        </div>
        <div className='about-img'>
          <Image
            src='/2.png'
            alt='Comemore'
            fill
            placeholder='blur'
            blurDataURL='/blur.jpg'
          />
        </div>
      </div>

      <div className='page3'>
        <div className='about-img'>
          <Image
            src='/3.png'
            alt='Comemore'
            fill
            placeholder='blur'
            blurDataURL='/blur.jpg'
          />
        </div>
        <div className='content'>
          <h1>
            Mantenha-se <span className='site-name'>atualizado</span>
          </h1>
          <p>
            Com nosso sistema online você poderá a partir de um link verificar o
            status de confirmação de seus usuários. Com dados como: Nome,
            telefone e apelido.{' '}
          </p>
        </div>
      </div>
    </div>
  )
}
