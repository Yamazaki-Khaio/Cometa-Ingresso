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
import { signIn} from "next-auth/react";import handler from "@/pages/api/evento";
import { Input } from "postcss";
import CampoLocalEvento from "./CampoLocalEvento";

export default function CadastroEvento() {
    const handleSubmit:FormEventHandler<HTMLFormElement> = (e) =>{
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

    }

    const handle = async (e) => {
        try{
            e.preventDefault()
            const nome = document.getElementById('nome')
            const res = await fetch('/api/evento', {
                method: 'POST',
                body: JSON.stringify(formData)
            })
            const json = await res.json()
            console.log(res.status)
            console.log(json)
            //console.log(nome.value)
        } catch(err){

   }
}
return(
        <div className="flex flex-col justify-center items-center p-12 bg-gray-100">
            <form onSubmit={handleSubmit}>
            <CampoNomeEvento/>
            <CampoDescricaoEvento/>
            <CampoLocalEvento />
            <CampoDataEvento/>
            <CampoHorarioEvento/>
            <CampoPerfilEvento/>
            <CampoSetorEvento/>
            <BotaoSubmitEvento/>
            </form>
        </div>
    )
}