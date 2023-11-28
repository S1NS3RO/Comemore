"use client";
import "@/styles/p-planos.scss";
import Button from "@/components/Button";
import { listPlans } from "@/data/plans.ts";

const handleBuy = (plano: string): void => {
  alert(`Comprar plano ${plano}`);
};

export default function Comprar() {
  return (
    <>
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
                    {price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
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
    </>
  );
}
