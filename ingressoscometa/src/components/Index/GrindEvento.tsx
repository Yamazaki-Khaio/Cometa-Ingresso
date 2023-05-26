import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import Evento from '../CadastroEvento/Evento';
import { Buffer } from 'buffer';




export default function GrindEvento(props: any) {
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

    <div className="flex flex-wrap gap-5 justify-center items-center p-4">
      {eventos.map((evento: any, index: number) => (
        
        <Evento
          key={evento.id}
          Nome={evento.nome_evento}
          Data={new Date(evento.data_evento).toLocaleDateString()}
          Hora={new Date(evento.data_evento).toLocaleTimeString()}
          Local={evento.descricao_evento}
          Image={convertBufferToUrl(evento.imagem)}
          
           // Cria uma URL temporária para a imagem BLOB


        />
      ))}
    </div>
  )
}
