import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import EventoComprado from './EventoComprado';
import { Buffer } from 'buffer';


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


  return (

    <div className="flex flex-wrap gap-5 justify-center items-center p-4 bg-slate-200">
      {eventos.map((evento: any, index: number) => (
        <EventoComprado
          key={evento.id}
          Nome={evento.nome_evento}
          Data={new Date(evento.data_evento).toLocaleDateString()}
          Hora={new Date(evento.data_evento).toLocaleTimeString()}
          Local={evento.local}
          Image={convertBufferToUrl (evento.imagem)} // Aqui você precisa ajustar como a imagem é passada para o componente Evento

        />
      ))}
    </div>
  )
}