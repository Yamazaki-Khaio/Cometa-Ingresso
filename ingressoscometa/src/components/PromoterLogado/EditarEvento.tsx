import BotaoSubmitEvento from "../CadastroEvento/BotaoSubmitEvento";
import CampoDescricaoEvento from "../CadastroEvento/CampoDescricaoEvento";
import CampoNomeEvento from "../CadastroEvento/CampoNomeEvento";
import CampoDataEvento from "../CadastroEvento/CampoDataEvento";
import { FormEventHandler, cloneElement, useEffect, useState } from "react";
import CampoLocalEvento from "../CadastroEvento/CampoLocalEvento";
import CampoEnvioImagem from "../CadastroEvento/CampoEnviarImagem";
import CampoSetorVip from "../CadastroEvento/SetorEvento/CampoSetorVip";
import CampoSetorBackstage from "../CadastroEvento/SetorEvento/CampoSetorBackstage";
import CampoSetorCamarote from "../CadastroEvento/SetorEvento/CampoSetorCamarote";
import CampoSetorNenhum from "../CadastroEvento/SetorEvento/CampoSetorNenhum";
import CampoHorarioEvento from "../CadastroEvento/CampoHorarioEvento";
import CampoQntIngressoVip from "../CadastroEvento/QntEvento/CampoQntIngresso";
import CampoQntIngressoBackstage from "../CadastroEvento/QntEvento/CampoQntIngressoBack";
import CampoQntIngressoCamarote from "../CadastroEvento/QntEvento/CampoQntIngressoCam";
import CampoQntIngressoNenhum from "../CadastroEvento/QntEvento/CampoQntIngressoNenhum";
import CampoPrecoVip from "../CadastroEvento/PrecoEvento/CampoPreco";
import CampoPrecoCamarote from "../CadastroEvento/PrecoEvento/CampoPrecoCam";
import CampoPrecoBackstage from "../CadastroEvento/PrecoEvento/CampoPrecoBack";
import CampoPrecoNenhum from "../CadastroEvento/PrecoEvento/CampoPrecoNenhum";
import { FLOAT } from "sequelize";
import CepCadastro from "../CadastroEvento/CepCadastro";
import CampoCidade from "../CadastroEvento/CampoCidade";
import CampoEstado from "../CadastroEvento/CampoEstado";
import CampoLocal from "../QRCode/CampoLocal";
import ComplementoEnderecoCadastro from "../CadastroEvento/ComplementoEnderecoCadastro";
import NumeroDaCasaCadastro from "../CadastroEvento/NumeroDaCasaCadastro";
import RuaCadastro from "../CadastroEvento/RuaCadastro";
import { getSession } from "next-auth/react";
import axios from "axios";
import Botao from "../CabecalhoCadastro/botao";
import BotaoEditaEvento from "./BotaoEditaEvento";

interface FormData {
  nome: string,
  descricao: string,
  localEvento: string,
  dataEvento: string,
  horarioEvento: string,
  imagem : {
    type: string,
    data: number[]
  } | undefined

  cep:string,
  rua:string,
  cidade:string,
  estado:string,
  complemento:string,
  numero:string
  }


export default function CadastroEvento(props:any) {

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    descricao: "",
    localEvento: "",
    dataEvento: "",
    horarioEvento: "",
    imagem: undefined,

    cep: "",
    rua: "",
    complemento: "",
    cidade: "",
    estado: "",
    numero: ""

  });
  
  const [id_evento, setIdEvento] = useState("");

  console.log(props)


  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIdEvento(props.id)
    console.log("B", props)

    try {   

        const formUsuario = {
            nome: (document.getElementById('nome') as HTMLInputElement)?.value,
            descricao: (document.getElementById('descricao') as HTMLInputElement)?.value,
            localEvento: (document.getElementById('localEvento') as HTMLInputElement)?.value,
            horarioEvento: (document.getElementById('horarioEvento') as HTMLInputElement)?.value,
           dataEvento: (document.getElementById('data') as HTMLInputElement)?.value,
            id: id_evento
          };
        console.log(`/api/usuario?id=${formUsuario.id}`)
        const resUsuario = await fetch(`/api/usuario?id=${formUsuario.id}`, {
            method: 'PUT',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formUsuario)
          });

          const formEndereco = {
            cep:(document.getElementById('cep')as HTMLInputElement)?.value,
            rua:(document.getElementById('rua')as HTMLInputElement)?.value,
            numero:(document.getElementById('numero')as HTMLInputElement)?.value,
            complemento:(document.getElementById('complemento')as HTMLInputElement)?.value,
            id: id_evento
          };
        const resEndereco = await fetch(`/api/endereco?id_usuario=${formEndereco.id}`, {
            method: 'PUT',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formEndereco)
          });

    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      // Lógica adicional para lidar com erros no envio dos dados
    }
    window.location.reload();
  };


   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const { name, value } = e.target;
setFormData((prevData) => ({
  ...prevData,
  [name]: value
}));
};
const updateForm = (attribute: any, value: any) => {
console.log(value)
setFormData((prevData) => ({
  ...prevData,
  [attribute]: value
}));
};
  const handleFileChange = (file: { type: string; data: number[] } | undefined) => {
    setFormData((prevData) => ({
      ...prevData,
      imagem: file
    }));
  };
  


return(
<div className="flex flex-col w-4/6 mr-36 ml-auto justify-center items-center m-12 bg-white rounded-lg shadow-md shadow-xl-bottom">
            <form onSubmit={handleSubmit}>
            <CampoNomeEvento/>
            <CampoDescricaoEvento/>
            <CampoLocal/>
            <CepCadastro/>
            <CampoCidade/>
            <CampoEstado/>
            <RuaCadastro/>
            <ComplementoEnderecoCadastro/>
            <NumeroDaCasaCadastro/>
            <CampoDataEvento/>
            <CampoHorarioEvento/>
            <BotaoEditaEvento/>
            </form>
        </div>
    )
}