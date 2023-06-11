import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import EventoLogado from './EventoLogado';
import { Buffer } from 'buffer';
import Link from 'next/link';

export default function ListaEventosCliente(props: any) {
  const [eventos, setEventos] = useState([])
  useEffect(() => {
    fetchEventos()
  }, [])

  const fetchEventos = async () => {
    try {
      const response = await axios.get('/api/evento')
      setEventos(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const convertBufferToUrl = (buffer: any) => {
    const imageData = Buffer.from(buffer.data).toString('base64');
    return `data:image/png;base64,${imageData}`;
  };

//mudar set eventos e buscar especifico, pegar todos eventos do carrinho e por no componente "EventoLogado"
//Fazer a rota

  return (
    <div className="flex flex-wrap gap-5 justify-center items-center p-4 bg-slate-200">
      {eventos.map((evento: any, index: number) => (
        <Link href={`/evento/?id=${evento.id}`} key={evento.id}>
          <div style={{ cursor: 'pointer' }}>
            <EventoLogado
              Nome={evento.nome_evento}
              Data={new Date(evento.data_evento).toLocaleDateString()}
              Hora={new Date(evento.data_evento).toLocaleTimeString()}
              Local={evento.local}
              Image={convertBufferToUrl(evento.imagem)}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
