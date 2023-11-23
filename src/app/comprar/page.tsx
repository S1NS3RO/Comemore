import '@/styles/p-comprar.scss'
import Button from "@/components/Button"

export default function Comprar() {
  return (
    <>
      <h1>Seja parte do grupo Comemore</h1>
      <div className='plans'>
        <div className='plan'>
          <h1>Plano platinium</h1>
          <div className='price'>
            R$ 24,99
            <div>Mensal</div>
          </div>
          <ul>
            <li>
              Disponibilizar link para que seus convidados possam confirmar a
              presença.
            </li>
            <li>
              Disponibilizar informações sobre seu evento para seus convidados.
            </li>
            <li>Sistema para verificar quais pessoas confirmaram presença.</li>
          </ul>
          <Button text="Comprar" href="/login"/>
        </div>
        <div className='plan'>
          <h1>Plano Mega</h1>
          <div className='price'>
            R$ 65,99
            <div>Trimestral</div>
          </div>
          <ul>
            <li>
              Disponibilizar link para que seus convidados possam confirmar a
              presença.
            </li>
            <li>
              Disponibilizar informações sobre seu evento para seus convidados.
            </li>
            <li>Sistema para verificar quais pessoas confirmaram presença.</li>
          </ul>
          <Button text="Comprar" href="/login"/>
        </div>
      </div>
    </>
  )
}
