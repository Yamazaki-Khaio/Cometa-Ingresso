import { useState } from "react";

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

interface FormData {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  senha: string;
  endereco: string;
  numeroCasa: string;
  complemento: string;
  data_nascimento: string;
}

export default function Cadastro() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    senha: "",
    endereco: "",
    numeroCasa: "",
    complemento: "",
    data_nascimento: ""
  });

  const handleCadastro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log("Dados enviados com sucesso!");

        // Lógica adicional após o envio bem-sucedido dos dados
      } else {
        console.error("Erro ao enviar os dados:", response.status);

        // Lógica adicional para lidar com erros no envio dos dados
      }
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
      <form onSubmit={handleCadastro}>
        <CampoNomeCompleto
          value={formData.nome}
          onChange={handleInputChange}
          name="nome"
        />
        <CampoCpf
          value={formData.cpf}
          onChange={handleInputChange}
          name="cpf"
        />
        <CampoEmail
          value={formData.email}
          onChange={handleInputChange}
          name="email"
        />
        <CampoTelefone
          value={formData.telefone}
          onChange={handleInputChange}
          name="telefone"
        />
        <CampoSenhaERepetirSenha
          value={formData.senha}
          onChange={handleInputChange}
          name="senha"
        />
        <RadioButton
          // Adicione as propriedades necessárias
        />
        <p>Endereço</p>
        <CepCadastro
          value={formData.endereco}
          onChange={handleInputChange}
          name="endereco"
        />
        <RuaCadastro
          value={formData.numeroCasa}
          onChange={handleInputChange}
          name="numeroCasa"
        />
        <CampoDataDeNascimento
          value={formData.data_nascimento}
          onChange={handleInputChange}
          name="data_nascimento"
        />
        <NumeroDaCasaCadastro
          value={formData.complemento}
          onChange={handleInputChange}
          name="complemento"
        />
        <BotaoSubmitCadastro />
      </form>
    </div>
  );
}
