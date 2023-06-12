import Image from 'next/image'
import Botao from '../CabecalhoCadastro/botao';
import QuantitySelector from './QuantidadeSeletor';
import ChoiceBox from './ChoiceBoxSetor';
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function EventoLogado(props: any) {
    const [id_usuario, setIdUsuario] = useState("");
    //lógica aqui rotas, ajustar

    useEffect(() => {
        async function getUserId() {
            const user = await getSession();
            const userId = user?.user.id;
            setIdUsuario(userId);
            console.log(userId)
        }
        getUserId();
    }, []);


    function handleBotaoClicado(): void {
        for (const setor of props.setores) {
            if(setor.nome == document.getElementById("setor").value){
                const form = {
                    id_setor: setor.id,
                    preco_ingresso: setor.preco,
                    id_usuario,
                    id_evento: props.id,
                    max_ingresso: document.getElementById("quantity"),
                }
            }
        }
        
    }

    return (
        <div className='w-screen h-60'>
            <div className="relative flex flex-wrap justify-start content-center h-60 mx-12 border bg-white  rounded-3xl">
                <div className="w-92 h-44 ml-8">
                    <Image width={720} height={480} src={props.Image} alt={props.Nome} className=" w-full h-full object-fit rounded-3xl " />
                </div>
                <div className="ml-12">
                    <p className="font-bold  text-3xl">{props.Nome}</p>
                    <p className="font-sans text-4sm">Local: {props.Local}</p>
                    <p className="font-sans text-4sm">Data: {props.Data}</p>
                    <p className="font-sans text-4sm">A partir das: {props.Hora}</p>
                    <p className="font-sans text-4sm">id: {props.id}</p>

                </div>
                <div className="absolute items-center justify-center bottom-6 gap-2 right-8">
                    <ChoiceBox setores={props.setores} />
                    <QuantitySelector />
                    <p className="font-sans  right-20 text-4sm">Quantidade disponível: {props.quant_ingresso}</p>
                    <button onClick={() => handleBotaoClicado()}>
                        <Botao href="/carrinho" NomeBotao="Adicionar ao carrinho" />
                    </button>
                </div>
            </div>
        </div>

    )
}