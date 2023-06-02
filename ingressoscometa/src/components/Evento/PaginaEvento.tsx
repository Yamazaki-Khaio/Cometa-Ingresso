import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function PaginaEvento(props: any) {
    const [evento, setEvento] = useState<any>(null);
    const { data: session } = useSession();

    useEffect(() => {
        fetchEventoById(props.id);
    }, []);

    const fetchEventoById = async (id) => {
        try {
            const response = await axios.get(`/api/evento?id=${props.id}`);
            const eventoData = response.data;
            setEvento(eventoData);
            console.log(eventoData);
            console.log(evento);
            
            // Do something with the event data
        } catch (error) {
            console.log(error);
        }
    };

    const convertBufferToUrl = (buffer: any) => {
        const imageData = Buffer.from(buffer.data).toString('base64');
        return `data:image/jpeg;base64,${imageData}`;
    };

    return (
        <div className="flex items-center content-center justify-between">
            {evento && (
                <div>
                    <div className="h-128 ml-80">
                        <Image
                            width={720}
                            height={480}
                            src={convertBufferToUrl(evento.imagem)}
                            alt={evento.nome_evento}
                            className=" w-full h-full object-cover rounded-3xl "
                        />
                    </div>
                    <div className="w-64 mr-80 text-lg font-bold">
                        <p>{evento.nome_evento}</p>
                        <p>{new Date(evento.data_evento).toLocaleDateString()}</p>
                        <p>{new Date(evento.data_evento).toLocaleTimeString()}</p>
                        <p>{evento.local}</p>
                        <p>{evento.descricao_evento}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
