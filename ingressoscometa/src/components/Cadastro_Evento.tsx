import BotaoSubmitEvento from "./BotaoSubmitEvento";
import CampoDescricaoEvento from "./CampoDescricaoEvento";
import CampoNomeEvento from "./CampoNomeEvento";
import CampoLocal from "./CampoLocal";
import CampoDataEvento from "./CampoDataEvento";
import CampoHorarioEvento from "./CampoHorarioEvento";
import CampoPerfilEvento from "./CampoPerfilEvento";
import CampoSetorEvento from "./CampoSetorEvento";
import { FormEventHandler, useState } from "react";
import handler from "@/pages/api/evento";
import { Input } from "postcss";

export default function CadastroEvento() {
    const [formData, setformData] = useState({
        nome:'',
        desc:'',
        local:'',
        data:'',
        horario:'',
        perfil:'',
        setor:''
    }
    );

    const handleSubmit:FormEventHandler<HTMLFormElement> (event, name) =>{
        setformData({
            const x = document.getElementById("nome").value,
            ['desc']: formData.desc,
            ['local']: formData.local,
            ['data']: formData.data,
            ['horario']: formData.horario,
            ['perfil']: formData.perfil,
            ['setor']: formData.setor,
            [name]: event.target.value,
                    })
    }

    const handle = async (e) => {
        try{
            e.preventDefault()
            const res = await fetch('/api/evento', {
                method: 'POST',
                body: JSON.stringify(formData)
            })
            const json = await res.json()
            console.log(res.status)
            console.log(json)
            console.log(formData)
        } catch(err){

   }
}
return(
        <div className="flex flex-col justify-center items-center p-12 bg-gray-100">
            <form onSubmit={handle}>
            <CampoNomeEvento required value = {formData.nome} onChange={(e) => {handleSubmit(e, 'nome')}}/>
            <CampoDescricaoEvento required value = {formData.desc} onChange={(e) => {handleSubmit(e, 'desc')}}/>
            <CampoLocal required value = {formData.local} onChange={(e) => {handleSubmit(e, 'local')}}/>
            <CampoDataEvento required value = {formData.data} onChange={(e) => {handleSubmit(e, 'data')}}/>
            <CampoHorarioEvento required value = {formData.horario} onChange={(e) => {handleSubmit(e, 'horario')}}/>
            <CampoPerfilEvento required value = {formData.perfil} onChange={(e) => {handleSubmit(e, 'perfil')}}/>
            <CampoSetorEvento required value = {formData.setor} onChange={(e) => {handleSubmit(e, 'setor')}}/>
            <BotaoSubmitEvento/>
            </form>
        </div>
    )
}