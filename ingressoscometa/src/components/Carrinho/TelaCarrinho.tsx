import React from "react";
import BotaoFinalizarCompra from "./BotaoFinalizarCompra";
import Tabela from "../RelatorioEventosPromoter/TabelaEvento";

interface Item {
    id: number;
    name: string;
    price: number;
  }
interface CartProps {
    cartItems: Item[];
  }
  
  const i1: Item = {
    id: 0,
    name: "festa latino",
    price: 1.99
  }
  
  export default function TelaCarrinho({ cartItems }: CartProps) {
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">Carrinho de Compras</h2>
        <ul className="mt-4">
          {cartItems.map(() => (
            <li key={i1.id}>
              {i1.name} - R${i1.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <div className="relative flex flex-wrap justify-start content-center h-60 w-screen ml-12 mr-12 border bg-white  rounded-3xl">
                <form>
                <p className="font-bold  text-3xl">{i1.name}</p>
                <p className="font-bold  text-3xl">Preço: {i1.price}</p>
                </form>
            </div>
        <BotaoFinalizarCompra frase="Deseja confirmar sua compra?" caminho="/qrcode"/>
      </div>
    );
  }
  
