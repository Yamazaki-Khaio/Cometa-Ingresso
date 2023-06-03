import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EventoLogado from '../ClienteLogado/EventoLogado';
import { Buffer } from 'buffer';
import EventoAdm from './EventoAdm';
import { useSession } from 'next-auth/react';
import Link from 'next/link';


export default function ListaEventosAdm(props: any) {
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

    const { data: session } = useSession()

    return (
        <div>

            <div className="flex flex-col gap-5 items-center p-4 ">
                <div>
                    <h2>Olá {session?.user?.name}</h2>
                </div>
                {eventos.map((evento: any, index: number) => (
                    <Link className="relative flex  justify-start content-center h-60 w-full ml-12 mr-12 border bg-white shadow-md rounded-3xl" href={`/evento/?id=${evento.id}`} key={evento.id}>
                        <div style={{ cursor: 'pointer' }}>
                            <EventoAdm
                                key={evento.id}
                                Nome={evento.nome_evento}
                                Data={new Date(evento.data_evento).toLocaleDateString()}
                                Hora={new Date(evento.data_evento).toLocaleTimeString()}
                                Local={evento.local}
                                Image={convertBufferToUrl(evento.imagem)} // Aqui você precisa ajustar como a imagem é passada para o componente Evento

                            />
                        </div>
                    </Link>

                ))}
            </div>
        </div>

    )

}
