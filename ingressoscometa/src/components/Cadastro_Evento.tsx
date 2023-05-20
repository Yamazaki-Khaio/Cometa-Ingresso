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

interface FormData{
    nome: string,
    descricao: string,
    localEvento: string,
    dataEvento: string,
    horarioEvento: string
}

export default function CadastroEvento() {

    const [formData, setFormData] = useState<FormData>({
        nome: "",
        descricao: "",
        localEvento: "",
        dataEvento: "2000-01-01",
        horarioEvento: ""
      });
    

    const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) =>{
        try{
          formData.nome = document.getElementById('nome').value
          formData.descricao = document.getElementById('descricao').value
          formData.localEvento = document.getElementById('localEvento').value
          formData.dataEvento = document.getElementById('data').value
          formData.horarioEvento = document.getElementById('horario').value
        e.preventDefault()
        
        const res = await fetch('/api/evento', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(formData),
        })
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(formData) //Testando se os valores estão passando
            console.log(data)
        });
                  } catch (error) {
                    console.error("Erro ao enviar os dados:", error);
              
                    // Lógica adicional para lidar com erros no envio dos dados
                  }
                };
          
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                    const { name, value } = e.target;
                    setFormData((prevData) => ({
                      ...prevData,
                      [name]: value
                    }));
                  };

return(
        <div className="flex flex-col justify-center items-center p-12 bg-gray-100">
            <form onSubmit={handleSubmit}>
            <CampoNomeEvento value={formData.nome} onChange={handleInputChange} name="nome"/>
            <CampoDescricaoEvento value={formData.descricao} onChange={handleInputChange} name="descricao"/>
            <CampoLocalEvento value={formData.localEvento} onChange={handleInputChange} name="localEvento"/>
            <CampoDataEvento value={formData.dataEvento} onChange={handleInputChange} name="dataEvento"/>
            <CampoHorarioEvento value={formData.horarioEvento} onChange={handleInputChange} name="horarioEvento"/>
            <BotaoSubmitEvento/>
            </form>
        </div>
    )
}