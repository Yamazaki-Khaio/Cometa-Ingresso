import React, {  useEffect, useState } from 'react'
import axios from 'axios';
import { Buffer } from 'buffer';
import Link from 'next/link';
import { getSession } from 'next-auth/react';
import IngressoCarrinho from './IngressoCarrinho';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

type Dados = {eventosCarrinho:any[],
setoresCarrinho:any[]}

export  const getServerSideProps = async () => {
  console.log('entrei')
  var eventosTodos:any[] = [];
  var carrinho:any[] = [];
  var setores:any[] ;
  var setoresCarrinho:any[] = []
  var eventosCarrinho:any[] = [];
  const user = await getSession();
  const userId = user?.user.id;
  const responseCarrinho = await axios.get(`/api/carrinhoCompras?id=${userId}`)
  carrinho = await responseCarrinho.data
  const responseEvento = await axios.get('/api/evento')
  eventosTodos = await responseEvento.data
  const responseSetores = await axios.get('/api/setor')
  setores = await responseSetores.data
  eventosCarrinho = eventosTodos.filter( evento => {
    return carrinho.some(item => item.id_evento === evento.id);
  })

  setoresCarrinho = setores.filter(setor => {
    return carrinho.some( item => item.id_setor === setor.id)
  })

  var repo:Dados =  {
    eventosCarrinho, setoresCarrinho
  }
  return{
    props:{
      repo
      
    }
  }
  
  
}






export default function ListaEventosCarrinho({repo}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  console.log(repo) 
  



  /*const [eventos, setEventos] = useState([])
  const[carrinho, setCarrinho] = useState([])
  const [setores, setSetores] = useState([])
  useEffect(() => {
    fetchEventos()
    fetchSetores()
    fetchCarrinho()
  }, [])

  

  const fetchEventos = async () => {
    try {
      const response = await axios.get('/api/evento')
      setEventos(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchSetores = async () => {
    try {
      const res = await axios.get('/api/setor')
      setSetores(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchCarrinho = async () => {
    try {
      const user = await getSession();
      const userId = user?.user.id;
      const response2 = await axios.get(`/api/carrinhoCompras?id=${userId}`)
      setCarrinho(response2.data)
    } catch (error) {
      console.log(error)
    }
  }


  const getEventoCarrinho = (idUsuario: string) => {
    return carrinho.filter((carrinho: any) => carrinho.id_evento === idUsuario);
  };

  */
  const convertBufferToUrl = (buffer: any) => {
    const imageData = Buffer.from(buffer.data).toString('base64');
    return `data:image/png;base64,${imageData}`;
  };


  return (
    <div className="flex flex-wrap gap-5 justify-center items-center p-4 bg-slate-200">
      {repo.eventosCarrinho.map((evento: any, index: number) => (
        //
          <div style={{ cursor: 'pointer' }}>
            {repo.setoresCarrinho.filter((setor: any) => setor.id_evento === evento.id).map((setor: any, index: number) => (
            <IngressoCarrinho
              name={evento.nome_evento}
              time={new Date(evento.data_evento).toLocaleDateString()}
              Hora={new Date(evento.data_evento).toLocaleTimeString()}
              place={evento.local}
              setor = {setor.nome}
              image={convertBufferToUrl(evento.imagem)}
            />
            ))}
          </div>
        //
      ))}
    </div>
  );


}

