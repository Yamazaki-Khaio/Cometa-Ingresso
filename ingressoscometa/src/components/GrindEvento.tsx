import React from 'react'
import Evento from './Evento'

export const eventos = [
  {
    Nome: "Justin Bieber Tour",
    Data: "31/05/2023",
    Hora: "20:00",
    Local: "UEFS",
    Image: '/Evento-Corporativo.jpg'
  },
  {
    Nome: "Freitas Show",
    Data: "20/10/2024",
    Hora: "10:00",
    Local: "Borogodo",
    Image: '/Portico.jpg'
  },
  {
    Nome: "Rihanna Tour",
    Data: "20/10/2022",
    Hora: "10:00",
    Local: "CUCA - Feira de Santana",
    Image: '/CUCA-1.jpg'
  },  
  {
    Nome: "Calourada Ciência da Computação",
    Data: "31/03/2023",
    Hora: "20:00",
    Local: "UEFS",
    Image: '/Evento-Corporativo.jpg'
  },
  {
    Nome: "Calourada Engenharia de Computação",
    Data: "20/08/2024",
    Hora: "10:00",
    Local: "Borogodo",
    Image: '/Portico.jpg'
  },
  {
    Nome: "SIECOMP - Semana de Integração Engenharia de Computação",
    Data: "20/10/2022",
    Hora: "10:00",
    Local: "CUCA - Feira de Santana",
    Image: '/CUCA-1.jpg'
  },
  {
    Nome: "Hackathon",
    Data: "31/07/2023",
    Hora: "20:00",
    Local: "UEFS",
    Image: '/Evento-Corporativo.jpg'
  },
  {
    Nome: "Calourada Sistemas de Informação",
    Data: "30/10/2024",
    Hora: "10:00",
    Local: "Borogodo",
    Image: '/Portico.jpg'
  },
  {
    Nome: "Show de Humor",
    Data: "31/05/2023",
    Hora: "20:00",
    Local: "UEFS",
    Image: '/Evento-Corporativo.jpg'
  },
  {
    Nome: "Chopada de Engenharia de Computação",
    Data: "10/10/2024",
    Hora: "10:00",
    Local: "Borogodo",
    Image: '/Portico.jpg'
  }

]

export default function GrindEvento(props: any) {
  return (
    
    <div className="flex flex-wrap gap-5 justify-center items-center p-4">
      {eventos.map((evento, index) => (
        <Evento
          key={index}
          Nome={evento.Nome}
          Data={evento.Data}
          Hora={evento.Hora}
          Local={evento.Local}
          Image={evento.Image}
         
        />
      ))}
    </div>
  )
}
