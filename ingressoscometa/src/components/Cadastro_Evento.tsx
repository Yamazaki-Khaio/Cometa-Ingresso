import BotaoSubmitEvento from "./BotaoSubmitEvento";
import CampoDescricaoEvento from "./CampoDescricaoEvento";
import CampoNomeEvento from "./CampoNomeEvento";
import CampoLocal from "./CampoLocal";
import CampoDataEvento from "./CampoDataEvento";
import CampoHorarioEvento from "./CampoHorarioEvento";
import CampoPerfilEvento from "./CampoPerfilEvento";
import CampoSetorEvento from "./CampoSetorEvento";
import { FormEventHandler, useState } from "react";
import Evento from "./Evento";
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

    const handleformEdit = (event, name) =>{
        setformData({
            ...formData, 
            [name]: event.target.value
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
            <CampoNomeEvento  required value = {formData.nome} onChange={(e) => {handleformEdit(e, 'nome')}}/>
            <CampoDescricaoEvento required value = {formData.desc} onChange={(e) => {handleformEdit(e, 'desc')}}/>
            <CampoLocal required value = {formData.local} onChange={(e) => {handleformEdit(e, 'local')}}/>
            <CampoDataEvento required value = {formData.data} onChange={(e) => {handleformEdit(e, 'data')}}/>
            <CampoHorarioEvento required value = {formData.horario} onChange={(e) => {handleformEdit(e, 'horario')}}/>
            <CampoPerfilEvento required value = {formData.perfil} onChange={(e) => {handleformEdit(e, 'perfil')}}/>
            <CampoSetorEvento required value = {formData.setor} onChange={(e) => {handleformEdit(e, 'setor')}}/>
            <BotaoSubmitEvento/>
            </form>
        </div>
    )
}