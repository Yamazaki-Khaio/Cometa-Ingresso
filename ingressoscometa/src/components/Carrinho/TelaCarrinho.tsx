import React from "react";
import BotaoFinalizarCompra from "./BotaoFinalizarCompra";

interface Item {
    id: number;
    name: string;
    price: number;
  }
interface CartProps {
    cartItems: Item[];
  }
  

  export default function TelaCarrinho({ cartItems }: CartProps) {
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">Carrinho de Compras</h2>
        <ul className="mt-4">
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - R${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <BotaoFinalizarCompra />
      </div>
    );
  }
  
