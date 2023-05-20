import handler from "@/pages/api/usuario";
import Botao from "./Botao";
import CampoCpf from "./CampoCpf";
import CampoEmail from "./CampoEmail";
import CampoSenhaERepetirSenha from "./CampoSenhaERepetirSenha";
import RadioButton from "./RadioButton";
import CepCadastro from "./CepCadastro";
import RuaCadastro from "./RuaCadastro";
import CampoDataDeNascimento from "./CampoDataDeNascimento";
import NumeroDaCasaCadastro from "./NumeroDaCasaCadastro";
import ComplementoEnderecoCadastro from "./ComplementoEnderecoCadastro";
import CampoNomeCompleto from "./CampoNomeCompleto";
import CampoTelefone from "./CampoTelefone";
import BotaoSubmitCadastro from "./BotaoSubmitCadastro";
import { useState, FormEvent, ChangeEvent, EventHandler } from "react";

interface FormData{
    nome: string,
    email: string,
    data_nascimento: string,
    cpf: string,
    senha: string
}

export default function CadastroEvento() {

    const [formData, setFormData] = useState<FormData>({
        nome: "",
        email: "",
        data_nascimento: "2000-01-01",
        cpf: "",
        senha: ""
      });
    

      const handleSubmit: EventHandler<FormEvent<HTMLFormElement>> = async (e) => {
        try{
          formData.nome = document.getElementById('nome').value
          formData.email = document.getElementById('email').value
          formData.data_nascimento = document.getElementById('data_nascimento').value
          formData.cpf = document.getElementById('cpf').value
          formData.senha = document.getElementById('senha').value
        e.preventDefault()
        
        const res = await fetch('/api/usuario', {
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

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-12">
      <form onSubmit={handleSubmit}>
        <CampoNomeCompleto value={formData.nome} onChange={handleInputChange} name="nome"/>
        <CampoCpf value={formData.cpf} onChange={handleInputChange} name="cpf"/>
        <CampoSenhaERepetirSenha value={formData.senha} onChange={handleInputChange} name="senha"/>
        <RadioButton/>
        <CampoDataDeNascimento value={formData.data_nascimento} onChange={handleInputChange} name="data"/>
        <BotaoSubmitCadastro />
      </form>
    </div>
  );
}
