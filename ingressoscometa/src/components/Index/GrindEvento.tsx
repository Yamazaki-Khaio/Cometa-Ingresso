import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import { Buffer } from 'buffer';
import Evento from '../CadastroEvento/Evento';




export default function GrindEvento(props: any) {
  const [eventos, setEventos] = useState([])
  useEffect(() => {
    fetchEventos()
  }, [])
//busca todos os eventos no banco de dados
  const fetchEventos = async () => {
    try {
      const response = await axios.get('/api/evento')
      setEventos(response.data)
      
      

    } catch (error) {
      console.log(error)
    }
  }
  //converte buffer to url image base64
  const convertBufferToUrl = (buffer: any) => {
    const imageData = Buffer.from(buffer.data).toString('base64');
    return `data:image/png;base64,${imageData}`;
  };

  return (
//renderiza todos os eventos cadastrados
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
