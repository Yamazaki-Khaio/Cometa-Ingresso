import React, {  useEffect, useState } from 'react'
import axios from 'axios';
import { Buffer } from 'buffer';
import Link from 'next/link';
import { getSession } from 'next-auth/react';
import IngressoCarrinho from './IngressoCarrinho';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

export default function ListaEventosCarrinho( props:any) {
  const[carrinho, setCarrinho] = useState([])

useEffect(() => {
  fetchCarrinho()
}, []

) 

  const fetchCarrinho = async () => {
    try {
      const user = await getSession();
      const userId = user?.user.id;
      const response2 = await axios.get(`/api/carrinhoCompras?id=${user?.user.id}`)
      console.log(response2.data)
      setCarrinho(response2.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const convertBufferToUrl = (buffer: any) => {
    const imageData = Buffer.from(buffer.data).toString('base64');
    return `data:image/png;base64,${imageData}`;
  };

  return (
    <div className="flex flex-wrap gap-5 justify-center items-center p-4 bg-slate-200">
          <div style={{ cursor: 'pointer' }}>
            {carrinho.map((c: any, index: number) => (
            <IngressoCarrinho
              key={c.id}
              name={c.nome_evento}
              data={new Date(c.data_evento).toLocaleDateString()}
              setor={c.nome}
              price={c.preco}
              place={c.cidade}
              image={convertBufferToUrl(c.imagem)}
            />
            ))}
          </div>
    </div>
  );


}

