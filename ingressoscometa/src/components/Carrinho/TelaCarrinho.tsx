import React from "react";
import BotaoFinalizarCompra from "./BotaoFinalizarCompra";
import Tabela from "../RelatorioEventosPromoter/TabelaEvento";
import { I18NConfig } from "next/dist/server/config-shared";
import BotaoDelete from "./BotaoDeleteIngresso";

interface Item {
    id: number;
    name: string;
    place: string;
    time: string;
    price: number;
  }

interface CartProps {
    cartItems: Item[];
  }

  const i1: Item = {
    id: 0,
    name: "festa latino",
    place: "hotel plaza",
    time: "28/01/2022, 18:00",
    price: 1.99
  }

  const i2: Item = {
    id: 0,
    name: "cer ve ja da",
    place: "mod 8",
    time: "12/02/2000, 19:00",
    price: 2121.11
  }

  /*let items: [Item, Item] = [i1, i2];

  const carrinho: CartProps{
    cartItems: items,
  }*/
  
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
                <p className="font-bold  text-2xs">{i1.place}</p>
                <p className="font-bold  text-2xs">{i1.time}</p>
                <p className="font-bold  text-2xs">Preço: {i1.price}</p>
                </form>
                <div className="absolute top-8 right-8">
                  <BotaoDelete/>
                </div>
            </div>
        <BotaoFinalizarCompra frase="Deseja confirmar sua compra?" caminho="/qrcode"/>
      </div>
    );
  }
  
