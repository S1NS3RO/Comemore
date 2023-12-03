'use client'
import '@/styles/p-planos.scss'
import Button from '@/components/Button'
import { listPlans } from '@/data/plans'

const handleBuy = (plano: string): void => {
  alert(`Comprar plano ${plano}`)
}

export default function Comprar() {
  return (
    <div className='p-planos'>
      <h1>
        Seja parte do grupo <span className='site-name'>Comemore</span>
      </h1>
      <div className='plans'>
        {listPlans.map(({ id, isActive, name, price, period, benefits }) => (
          <div
            style={{ display: isActive ? '' : 'none' }}
            key={id}
            className='plan'>
            <h1>Plano {name}</h1>
            <div className='price'>
              <span>
                {price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </span>

              <p>{period}</p>
            </div>
            <ul>
              {Object.values(benefits).map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <Button
              text='Comprar'
              onClick={() => handleBuy(name)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
