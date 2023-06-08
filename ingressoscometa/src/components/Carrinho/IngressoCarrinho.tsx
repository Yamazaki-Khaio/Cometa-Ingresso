import React from "react";
import BotaoFinalizarCompra from "./BotaoFinalizarCompra";
import Tabela from "../RelatorioEventosPromoter/TabelaEvento";
import { I18NConfig } from "next/dist/server/config-shared";
import BotaoDelete from "./BotaoDeleteIngresso";
import { isTemplateExpression } from "typescript";
import Image from 'next/image'


interface Item {
    id: number;
    name: string;
    place: string;
    time: string;
    price: number;
  }

interface CartProps {
    id: number,
    cartItems: Item[],
    total: number;
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
        price: 100.50}],
        total: 0
  };
  


for (let item of carrinho.cartItems){
  carrinho.total+=item.price;
}

  export default function IngressoCarrinho(props: any) {
    return (
      <div className="flex flex-col items-center">
            <ul className="mt-4">
              <div className="relative flex flex-wrap justify-start content-center h-60 w-screen ml-20 mr-12 border bg-white  rounded-3xl">
              <div className="w-92 h-44 ml-8">
                <Image width={720} height={480} src={props.image} alt={props.name} className=" w-full h-full object-fit rounded-3xl " />
            </div>
                <form>
                <p className="ml-5 font-bold  text-3xl ">{props.name}</p>
                <p className="ml-5 font-bold  text-2xs">{props.place}</p>
                <p className="ml-5 font-bold  text-2xs">{props.time}</p>
                <p className="ml-5 font-bold  text-2xs">Preço: {props.price}</p>
                <p className="ml-5 font-bold  text-2xs">Setor: {props.Setor}</p>
                </form>
                <div className="absolute top-8 right-8">
                  <BotaoDelete/>
                </div>
            </div>            
        </ul>
        
        
        
      </div>
    );
  }
  
