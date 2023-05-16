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

    const handleSubmit = (x:string) =>{
        setformData({
            ['nome']: formData.nome,
            ['desc']: formData.desc,
            ['local']: formData.local,
            ['data']: formData.data,
            ['horario']: formData.horario,
            ['perfil']: formData.perfil,
            ['setor']: formData.setor,
            })
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
            <form onSubmit={handle}>
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