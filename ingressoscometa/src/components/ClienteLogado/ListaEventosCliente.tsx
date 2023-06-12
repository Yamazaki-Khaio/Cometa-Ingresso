import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventoLogado from './EventoLogado';
import { Buffer } from 'buffer';
import Link from 'next/link';
import VerMaisDetalhes from './VerMaisDetalhes';
import { getSession } from 'next-auth/react';

export default function ListaEventosCliente(props: any) {
  const [eventos, setEventos] = useState([]);
  const [setores, setSetores] = useState([]);

  useEffect(() => {
    fetchEventos();
    fetchSetores();
  }, []);

  const fetchEventos = async () => {
    try {
      const response = await axios.get('/api/evento');
      setEventos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSetores = async () => {
    try {
      const response = await axios.get('/api/setor');
      setSetores(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const convertBufferToUrl = (buffer: any) => {
    const imageData = Buffer.from(buffer.data).toString('base64');
    return `data:image/png;base64,${imageData}`;
  };

  const getSetoresDoEvento = (eventoId: string) => {
    return setores.filter((setor: any) => setor.id_evento === eventoId);
  };

  return (
    <div className="flex flex-wrap gap-5 w-screen justify-center items-center p-4 bg-slate-200">
      {eventos.map((evento: any) => (
        <div key={evento.id} style={{ cursor: 'pointer' }}>
          <EventoLogado
            id={evento.id}
            Nome={evento.nome_evento}
            Data={new Date(evento.data_evento).toLocaleDateString()}
            Hora={new Date(evento.data_evento).toLocaleTimeString()}
            Local={evento.local}
            Image={convertBufferToUrl(evento.imagem)}
            setores={getSetoresDoEvento(evento.id)} // Filtra os setores correspondentes ao evento
          />
          <div style={{ marginLeft: 100 }}>
            <Link href={`/evento/?id=${evento.id}`} key={evento.id} passHref>
              <VerMaisDetalhes />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}