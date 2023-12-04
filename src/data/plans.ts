export interface IlistPlansProps {
  id: number;
  isActive: boolean;
  name: string;
  price: number;
  period: string;
  benefits: {
    a?: string;
    b?: string;
    c?: string;
    d?: string;
    e?: string;
    f?: string;
  };
}

export const listPlans = [
  {
    id: 0,
<<<<<<< HEAD
    isActive: false,
    name: "Free",
=======
    isActive: true,
    name: 'Free',
>>>>>>> 6e70ba69bb24f632b4469e24b26da38d125f7973
    price: 0,
    period: "30 Dias",
    benefits: {
      a: `Grátis`,
<<<<<<< HEAD
    },
=======
      b: 'Teste'
    }
>>>>>>> 6e70ba69bb24f632b4469e24b26da38d125f7973
  },
  {
    id: 1,
    isActive: true,
    name: "Platinum",
    price: 24.99,
    period: "Mensal",
    benefits: {
      a: `Disponibilizar link para que seus convidados possam confirmar a presença.`,
      b: `Disponibilizar informações sobre seu evento para seus convidados.`,
      c: `Sistema para verificar quais pessoas confirmaram presença.`,
    },
  },
  {
    id: 2,
    isActive: true,
    name: "Mega",
    price: 65.99,
    period: "Trimestral",
    benefits: {
      a: `Disponibilizar link para que seus convidados possam confirmar a presença.`,
      b: `Disponibilizar informações sobre seu evento para seus convidados.`,
      c: `Sistema para verificar quais pessoas confirmaram presença.`,
    },
  },
  {
    id: 3,
    isActive: true,
<<<<<<< HEAD
    name: "Super",
=======
    name: 'Super',
>>>>>>> 6e70ba69bb24f632b4469e24b26da38d125f7973
    price: 249.99,
    period: "Anual",
    benefits: {
      a: `Disponibilizar link para que seus convidados possam confirmar a presença.`,
      b: `Disponibilizar informações sobre seu evento para seus convidados.`,
      c: `Sistema para verificar quais pessoas confirmaram presença.`,
<<<<<<< HEAD
    },
  },
];
=======
    }
  }
]
>>>>>>> 6e70ba69bb24f632b4469e24b26da38d125f7973
