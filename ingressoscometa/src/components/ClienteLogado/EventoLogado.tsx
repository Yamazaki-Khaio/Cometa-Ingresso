import Image from 'next/image'
import Botao from '../CabecalhoCadastro/botao';
import QuantitySelector from './QuantidadeSeletor';
import ChoiceBox from './ChoiceBoxSetor';
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

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


    function handleBotaoClicado(setores: any): void {
        console.log(document.getElementById("setor").value)
        console.log(props.id)
        console.log(props.quant_ingresso)
        console.log(id_usuario)
        console.log(setores)
        for (const setor of setores) {
            if (setor.nome == document.getElementById("setor").value) {
                const form = {
                    tipo: setor.nome,
                    evento_id: props.id, // Use the 'evento_id' from props
                    quantidade: 1,
                }
                console.log(setor.nome)
                console.log(props.id)
                console.log(props.quant_ingresso)
                console.log(form)
                axios.post(`/api/ingresso?id=${id_usuario}`, form, {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });

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

                </div>
                <div className="absolute items-center justify-center bottom-6 gap-2 right-8">
                    <ChoiceBox setores={props.setores} />
                    <QuantitySelector />
                    <p className="font-sans  right-20 text-4sm">Quantidade disponível: {props.quant_ingresso}</p>
                    <button onClick={() => handleBotaoClicado(props.setores)}>
                        <Botao href= {`/carrinho?id=${id_usuario}`} NomeBotao="Adicionar ao carrinho" />
                    </button>
                </div>
            </div>
        </div>

    )
}