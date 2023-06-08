import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import { Buffer } from 'buffer';
import Link from 'next/link';
import TelaCarrinho from './IngressoCarrinho';
import IngressoCarrinho from './IngressoCarrinho';


export default function ListaEventosCarrinho(props: any) {
  const [eventos, setEventos] = useState([])
  useEffect(() => {
    fetchEventos()
  }, [])

  const [setores, setSetores] = useState([])
  useEffect(() => {
    fetchSetores()
  }, [])
  console.log(setores)


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

  const convertBufferToUrl = (buffer: any) => {
    const imageData = Buffer.from(buffer.data).toString('base64');
    return `data:image/png;base64,${imageData}`;
  };


  return (
    <div className="flex flex-wrap gap-5 justify-center items-center p-4 bg-slate-200">
      {eventos.map((evento: any, index: number) => (
        <Link href={`/evento/?id=${evento.id}`} key={evento.id}>
          <div style={{ cursor: 'pointer' }}>
            {setores.filter((setor: any) => setor.id_evento === evento.id).map((setor: any, index: number) => (
            <IngressoCarrinho
              name={evento.nome_evento}
              time={new Date(evento.data_evento).toLocaleDateString()}
              Hora={new Date(evento.data_evento).toLocaleTimeString()}
              place={evento.local}
              Setor = {setor.nome}
              image={convertBufferToUrl(evento.imagem)}
            />
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
