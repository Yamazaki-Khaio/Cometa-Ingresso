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
        console.log(props.setores)
        const form = {
        id_usuario,
        id_evento: props.id,
        quantidadeIngresso: document.getElementById("quantity"),
        }
    }

    return (
        <div className="relative flex flex-wrap justify-start content-center h-60 w-screen mx-12 border bg-white  rounded-3xl">
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
            <div className="absolute bottom-8 right-8">
                <ChoiceBox/>
                <button onClick={() => handleBotaoClicado()}>Adicionar ao carrinho
                    <Botao href="/carrinho" NomeBotao="Adicionar ao carrinho" />
                </button>
                <QuantitySelector/>
                <p className="font-sans  right-20 text-4sm">Quantidade disponível: {props.quant_ingresso}</p>
            </div>
        </div>
    )
}