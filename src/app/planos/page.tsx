"use client";
import "@/styles/p-planos.scss";
import Button from "@/components/Button";
import { listPlans } from "@/data/plans.ts";

const handleBuy = (plano: string): void => {
  alert(`Comprar plano ${plano}`);
};

export default function Comprar() {
  return (
    <div className="p-planos">
      <h1>
        Seja parte do grupo <span className="site-name">Comemore</span>
      </h1>
      <div className="plans">
        {listPlans.map(({ id, isActive, name, price, period, benefits }) => (
          <>
            {isActive && (
              <div className="plan" key={id}>
                <h1>Plano {name}</h1>
                <div className="price">
                  <span>
<<<<<<< HEAD
                    {price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
=======
                    {price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
>>>>>>> 6e70ba69bb24f632b4469e24b26da38d125f7973
                    })}
                  </span>

                  <p>{period}</p>
                </div>
                <ul>
                  {Object.values(benefits).map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <Button text="Comprar" onClick={() => handleBuy(name)} />
              </div>
            )}
          </>
        ))}
      </div>
<<<<<<< HEAD
    </>
  );
=======
    </div>
  )
>>>>>>> 6e70ba69bb24f632b4469e24b26da38d125f7973
}
