import BotaoSubmitEvento from "./BotaoSubmitEvento";
import CampoDescricaoEvento from "./CampoDescricaoEvento";
import CampoNomeEvento from "./CampoNomeEvento";
import CampoLocal from "./CampoLocal";
import CampoDataEvento from "./CampoDataEvento";
import CampoHorarioEvento from "./CampoHorarioEvento";
import CampoPerfilEvento from "./CampoPerfilEvento";
import CampoSetorEvento from "./CampoSetorEvento";
import Message from "./Mensagem";
import { FormEventHandler, useState } from "react";
import { signIn} from "next-auth/react";
import handler from "@/pages/api/evento";
import { Input } from "postcss";
import CampoLocalEvento from "./CampoLocalEvento";
import { ChangeEvent } from "react";

export default function CadastroEvento() {
    const [n, setNome] = useState ('');
    const [d, setDescricao] = useState ('');
    const [l, setLocalEvento] = useState('');
    const [de, setDataEvento] = useState('');
    const [h, setHorarioEvento] = useState('');
    const [p, setPerfilEvento] = useState('');
    const [s, setSetorEvento] = useState('');

    const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) =>{
        try{
        e.preventDefault()
        const nome = document.getElementById('nome') //Lendo os valores dos campos
        const descricao = document.getElementById('descricao')
        const localEvento = document.getElementById('localEvento')
        const dataEvento = document.getElementById('data')
        const horarioEvento = document.getElementById('horario')
        const perfilEvento = document.getElementById('perfil')
        const setorEvento = document.getElementById('setorEvento')
        console.log(nome.value) //Testando se os valores estão passando
        console.log(descricao.value)
        console.log(localEvento.value)
        console.log(dataEvento.value)
        console.log(horarioEvento.value)
        console.log(perfilEvento.value)
        console.log(setorEvento.value)
        const res = await fetch('/api/evento', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify({
                n,
                d,
                l,
                de,
                h,
                p,
                s
            }),
        })
            if (res.ok) {
            console.log("Dados enviados com sucesso!");
              
                      // Lógica adicional após o envio bem-sucedido dos dados
                    } else {
                      console.error("Erro ao enviar os dados:", res.status);
              
                      // Lógica adicional para lidar com erros no envio dos dados
                    }
                  } catch (error) {
                    console.error("Erro ao enviar os dados:", error);
              
                    // Lógica adicional para lidar com erros no envio dos dados
                  }
                };

    function handleNomeEventoChange(e: ChangeEvent<HTMLInputElement>){
        setNome(e.target.value);
    }

    function handleDescricaoEventoChange(e: ChangeEvent<HTMLInputElement>){
        setDescricao(e.target.value);
    }

    function handleLocalEventoChange(e: ChangeEvent<HTMLInputElement>){
        setLocalEvento(e.target.value);
    }

    function handleDataEventoChange(e: ChangeEvent<HTMLInputElement>){
        setDataEvento(e.target.value);
    }

    function handleHorarioEventoChange(e: ChangeEvent<HTMLInputElement>){
        setHorarioEvento(e.target.value);
    }
          

return(
        <div className="flex flex-col justify-center items-center p-12 bg-gray-100">
            <form onSubmit={handleSubmit}>
            <CampoNomeEvento value={n} />
            <CampoDescricaoEvento value={d}/>
            <CampoLocalEvento value={l}/>
            <CampoDataEvento value={de}/>
            <CampoHorarioEvento value={h}/>
            <CampoPerfilEvento value={p}/>
            <CampoSetorEvento value={s}/>
            <BotaoSubmitEvento/>
            </form>
        </div>
    )
}