import { useState } from "react";
import axios from "axios";

import Botao from "./Botao";
import CampoCpf from "./CampoCpf";
import CampoEmail from "./CampoEmail";
import CampoSenha from "./CampoSenhaERepetirSenha";
import RadioButton from "./RadioButton";
import CepCadastro from "./CepCadastro";
import RuaCadastro from "./RuaCadastro";
import NumeroDaCasaCadastro from "./NumeroDaCasaCadastro";
import ComplementoEnderecoCadastro from "./ComplementoEnderecoCadastro";
import NomeCompleto from "./CampoNomeCompleto";
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
    complemento: ""
  });

  const handleCadastro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post("/api/Cadastro", formData)
      .then((response) => {
        console.log("Dados enviados com sucesso!");
        // Lógica adicional após o envio bem-sucedido dos dados
      })
      .catch((error) => {
        console.error("Erro ao enviar os dados:", error);
        // Lógica adicional para lidar com erros no envio dos dados
      });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-12">
      <form onSubmit={handleCadastro}>
        <NomeCompleto
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
        <CampoSenha
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