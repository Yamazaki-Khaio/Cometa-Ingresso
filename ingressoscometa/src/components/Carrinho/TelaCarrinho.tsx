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
    id: number,
    cartItems: Item[];
  }

  const carrinho: CartProps = {
    id: 0,
    cartItems:[{id: 1,
      name: "cer ve ja da",
      place: "mod 8",
      time: "12/02/2000, 19:00",
      price: 2121.11}, {id: 2,
        name: "festa no latino",
        place: "ape",
        time: "12/02/2000, 19:00",
        price: 100.50}]
  };
  
  export default function TelaCarrinho() {
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">Carrinho de Compras</h2>
        <ul className="mt-4">
          {carrinho.cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - R${item.price.toFixed(2)}
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
            </li>
            
          ))}
        </ul>
        <BotaoFinalizarCompra frase="Deseja confirmar sua compra?" caminho="/qrcode"/>
      </div>
    );
  }
  
