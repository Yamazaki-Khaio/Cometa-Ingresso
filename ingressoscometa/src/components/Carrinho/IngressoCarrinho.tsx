import React from 'react';
import BotaoDelete from './BotaoDeleteIngresso';
import Image from 'next/image';
import axios from 'axios';

interface Item {
  id: number;
  name: string;
  place: string;
  time: string;
  price: number;
}

interface CartProps {
  id: number;
  cartItems: Item[];
  total: number;
}

export default function IngressoCarrinho(props: any) {
  const handleDelete = async () => {
    try {
      console.log("aaaaaaaaaaaaaaaaq");
      const response = await axios.delete(`/api/carrinhoCompras?id=16`);
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao deletar item do carrinho: ', error);
    }
  }; //implementar lógica de pegar id e deletar-lo aqui<<

  return (
    <div className="flex flex-col items-center">
      <ul className="mt-4">
        <div className="relative flex flex-wrap justify-start content-center h-60 w-screen ml-20 mr-12 border bg-white rounded-3xl">
          <div className="w-92 h-44 ml-8">
            <Image width={720} height={480} src={props.image} alt={props.name} className="w-full h-full object-fit rounded-3xl " />
          </div>
          <form>
            <p className="ml-5 font-bold text-3xl ">{props.name}</p>
            <p className="ml-5 font-bold text-2xs">{props.place}</p>
            <p className="ml-5 font-bold text-2xs">{props.time}</p>
            <p className="ml-5 font-bold text-2xs">Preço: {props.price}</p>
            <p className="ml-5 font-bold text-2xs">Setor: {props.Setor}</p>
          </form>
          <div className="absolute top-8 right-8">
            <BotaoDelete id={props.id} onDelete={handleDelete} />
          </div>
        </div>
      </ul>
    </div>
  );
}
