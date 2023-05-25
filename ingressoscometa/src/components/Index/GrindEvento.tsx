import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import Evento from '../cadastroEvento/Evento';


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

  return (

    <div className="flex flex-wrap gap-5 justify-center items-center p-4">
      {eventos.map((evento: any, index: number) => (
        <Evento
          key={evento.id}
          Nome={evento.nome_evento}
          Data={new Date(evento.data_evento).toLocaleDateString()}
          Hora={new Date(evento.data_evento).toLocaleTimeString()}
          Local={evento.descricao_evento}
          Image={evento.imagem} // Aqui você precisa ajustar como a imagem é passada para o componente Evento

        />
      ))}
    </div>
  )
}
