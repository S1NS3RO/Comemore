export interface IlistPlansProps {
  id: number
  isActive: boolean
  name: string
  price: number
  period: string
  benefits: {
    a?: string
    b?: string
    c?: string
    d?: string
    e?: string
    f?: string
  }
}

export const listPlans = [
  {
    id: 0,
    isActive: false,
    name: 'Free',
    price: 0,
    period: '30 Dias',
    benefits: {
      a: `Grátis`,
      b: `Teste`
    }
  },
  {
    id: 1,
    isActive: true,
    name: 'Platinum',
    price: 24.99,
    period: 'Mensal',
    benefits: {
      a: `Disponibilizar link para que seus convidados possam confirmar a presença.`,
      b: `Disponibilizar informações sobre seu evento para seus convidados.`,
      c: `Sistema para verificar quais pessoas confirmaram presença.`
    }
  },
  {
    id: 2,
    isActive: true,
    name: 'Mega',
    price: 65.99,
    period: 'Trimestral',
    benefits: {
      a: `Disponibilizar link para que seus convidados possam confirmar a presença.`,
      b: `Disponibilizar informações sobre seu evento para seus convidados.`,
      c: `Sistema para verificar quais pessoas confirmaram presença.`
    }
  },
  {
    id: 3,
    isActive: false,
    name: 'Super',
    price: 249.99,
    period: 'Anual',
    benefits: {
      a: `Disponibilizar link para que seus convidados possam confirmar a presença.`,
      b: `Disponibilizar informações sobre seu evento para seus convidados.`,
      c: `Sistema para verificar quais pessoas confirmaram presença.`
    }
  }
]
