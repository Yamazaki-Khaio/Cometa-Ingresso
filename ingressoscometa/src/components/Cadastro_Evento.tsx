import BotaoSubmitEvento from "./BotaoSubmitEvento";
import CampoDescricaoEvento from "./CampoDescricaoEvento";
import CampoNomeEvento from "./CampoNomeEvento";
import CampoLocal from "./CampoLocal";
import CampoDataEvento from "./CampoDataEvento";
import CampoHorarioEvento from "./CampoHorarioEvento";
import CampoPerfilEvento from "./CampoPerfilEvento";
import CampoSetorEvento from "./CampoSetorEvento";
import nome from "./CampoSetorEvento";
import local from "./CampoLocal";
import data from "./CampoDataEvento";
import horario from "./CampoHorarioEvento";
import perfil from "./CampoPerfilEvento";
import setor from "./CampoSetorEvento";
import { FormEventHandler, useState } from "react";
import Evento from "./Evento";

export default function CadastroEvento() {

    const handle = async (e) => {
        try{
            e.preventDefault()
            const res = await fetch('/api/evento', {
                method: 'POST',
                body: JSON.stringify([nome, local, data, horario, perfil, setor])
            })
            const json = await res.json()
            console.log(res.status)
            console.log(json)
        } catch(err){

    }
}
return(
        <div className="flex flex-col justify-center items-center p-12 bg-gray-100">
            <form onSubmit={handle}>
            <CampoNomeEvento/>
            <CampoDescricaoEvento/>
            <CampoLocal/>
            <CampoDataEvento/>
            <CampoHorarioEvento/>
            <CampoPerfilEvento/>
            <CampoSetorEvento/>
            <BotaoSubmitEvento/>
            </form>
        </div>
    )
}