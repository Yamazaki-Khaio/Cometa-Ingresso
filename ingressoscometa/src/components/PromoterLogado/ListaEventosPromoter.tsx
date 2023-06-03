import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Buffer } from 'buffer';
import EventoPromoter from './EventoPromoter';
import { useSession } from 'next-auth/react';
import Botao from '../CabecalhoCadastro/botao';


export default function ListaEventosPromoters(props: any) {
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
        
        <div className="flex flex-wrap gap-5 justify-end items-end p-4 ">
            <div className='justify-start w-5/6'>
                <h2 className="font-bold  text-3xl"> Eventos Cadastrados</h2>
                <div className="absolute top-3 right-2/4">
                <Botao href="/cadastro_evento" NomeBotao="Cadastrar Novo Evento" />
                </div>
            </div>
            {eventos.map((evento: any, index: number) => (
                <EventoPromoter
                    key={evento.id}
                    Nome={evento.nome_evento}
                    Data={new Date(evento.data_evento).toLocaleDateString()}
                    Hora={new Date(evento.data_evento).toLocaleTimeString()}
                    Local={evento.local}
                    Image={convertBufferToUrl(evento.imagem)} // Aqui você precisa ajustar como a imagem é passada para o componente Evento

                />
            ))}
        </div>
</div>
        
    )
    
    }