import {FormEventHandler, useState } from "react";

import PerfilCampoCep from "../PerfilCliente/PerfilCampoCep";
import PerfilCampoCpf from "../PerfilCliente/PerfilCampoCpf";
import PerfilCampoEmail from "../PerfilCliente/PerfilCampoEmail";
import PerfilCampoNome from "../PerfilCliente/PerfilCampoNome";
import PerfilCampoRua from "../PerfilCliente/PerfilCampoRua";
import PerfilCampoTelefone from "../PerfilCliente/PerfilCampoTelefone";
import PerfilComplementoCasa from "../PerfilCliente/PerfilComplementoCasa";
import PerfilNumeroCasa from "../PerfilCliente/PerfilNumeroCasa";
import BotaoSalvarPerfil from "../PerfilCliente/botaoSalvarPerfil";
/*
interface FormData{
    nome: string,
    cpf: string,
    data_nascimento: string
}
*/
export default function PerfilPromoter() {

  /*
    const [formData, setFormData] = useState<FormData>({
        nome: "",
        cpf: "",
        data_nascimento: "2000-01-01"
      });
    */

    const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) =>{
      /*
        try{
          formData.nome = document.getElementById('nome').value
          formData.cpf = document.getElementById('cpf').value
          formData.data_nascimento = document.getElementById('data_nascimento').value
        e.preventDefault()
        
        const res = await fetch('/api/usuario', {
            method: 'PUT',
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
                  */  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-12">
      <form onSubmit={handleSubmit}>
            <PerfilCampoNome/>
            <PerfilCampoEmail/>
            <PerfilCampoCpf/>
            <PerfilCampoTelefone/>
            <PerfilCampoCep/>
            <PerfilCampoRua/>
            <PerfilNumeroCasa/>
            <PerfilComplementoCasa/>
        <BotaoSalvarPerfil/>
      </form>
    </div>
  )
}
