import Image from 'next/image'
import Botao from '../CabecalhoCadastro/botao';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import ModalSuspEvento from './ModalSuspEvento';
import ModalCancelarEvento from './ModalCancelarEvento';

export default function EventoPromoter(props: any) {
    const [modalCancelar, setModalCancelar] = useState(false);
    const [modalSuspender, setModalSuspender] = useState(false);

    const openModalCancelar = () => {
        setModalCancelar(true);
    };
    
    const closeModalCancelar = () => {
        setModalCancelar(false);
    };

    const openModalSuspender = () => {
        setModalSuspender(true);
    };
    
    const closeModalSuspender = () => {
        setModalSuspender(false);
    };

    return (
        <div className="relative flex flex-wrap justify-start content-center h-60 w-4/5 ml-12 mr-12 border bg-white shadow-md rounded-3xl">
            <div className="w-92 h-44 ml-8">
                <Image width={720} height={480} src={props.Image} alt={props.Nome} className="w-80 h-40 object-cover rounded-3xl" />
                

            </div>

            <div className="ml-12">
                <p className="font-bold text-3xl">{props.Nome}</p>
                <p className="font-sans text-4sm">Local: {props.rua}</p>
                <p className="font-sans text-4sm">Data: {props.Data}</p>
                <p className="font-sans text-4sm">A partir das: {props.Hora}</p>
                <p className="font-sans text-4sm">{props.Descricao}</p>
            </div>

            <div className="absolute bottom-1/3 right-8">
                <Botao onClick={openModalSuspender} NomeBotao="Suspender" />
            </div>
            {modalSuspender && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-xl">
                <ModalSuspEvento
                    mensagem="Deseja suspender o evento?"
                    eventoId={props.id}
                    onClose={closeModalSuspender}
                />
                </div>
                </div>
            )}

            <div className="absolute bottom-5 right-8">
                <Botao onClick={openModalCancelar} NomeBotao="Cancelar" />
            </div>
            {modalCancelar && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-xl">
                <ModalCancelarEvento
                    mensagem="Deseja cancelar o evento?"
                    eventoId={props.id}
                    onClose={closeModalCancelar}
                />
                </div>
                </div>
            )}

            <div className="absolute bottom-3/4 right-8">
                <a href={`/editar_evento?id=${props.id}`} className="btn btn-default">
                    <button type="button" className="btn btn-default">
                        <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                    </button>
                </a>
            </div>
        </div>
    );
}
