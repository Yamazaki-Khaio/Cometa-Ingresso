import React from "react";

interface Item {
    id: number;
    name: string;
    price: number;
  }
interface CartProps {
    cartItems: Item[];
  }
  

export default function TelaCarrinho({cartItems}: CartProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold">Carrinho de Compras </h2>
            <ul>
                {cartItems.map((item) => ( 
                    <li key={item.id}>
                        {item.name} - R${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    )
}