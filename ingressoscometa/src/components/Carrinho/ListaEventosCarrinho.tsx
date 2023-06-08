import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import { Buffer } from 'buffer';
import Link from 'next/link';
import TelaCarrinho from './IngressoCarrinho';


export default function ListaEventosCarrinho(props: any) {
  const [eventos, setEventos] = useState([])
  useEffect(() => {
    fetchEventos()
  }, [])
  console.log(eventos)


  const fetchEventos = async () => {
    try {
      const response = await axios.get('/api/evento')
      setEventos(response.data)
      console.log(eventos)
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
            <TelaCarrinho
              name={evento.nome_evento}
              time={new Date(evento.data_evento).toLocaleDateString()}
              Hora={new Date(evento.data_evento).toLocaleTimeString()}
              place={evento.local}
              image={convertBufferToUrl(evento.imagem)}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
