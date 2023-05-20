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
  data_nascimento: string;
  senha: string;
  cepCadastro: string,
  ruaCadastro: string;
  numeroCasa: string;
  complemento: string;
  tipoUsuario: string;
}

export default function Cadastro() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    senha: "",
    cepCadastro: "",
    ruaCadastro: "",
    numeroCasa: "",
    complemento: "",
    data_nascimento: "",
    tipoUsuario: ""
  });

  const handleCadastro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/usuario/", {
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
          name="nomeCompleto"
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
          value={formData.cepCadastro}
          onChange={handleInputChange}
          name="cep"
        />
        <RuaCadastro
          value={formData.ruaCadastro}
          onChange={handleInputChange}
          name="rua"
        />
        <CampoDataDeNascimento
          value={formData.data_nascimento}
          onChange={handleInputChange}
          name="data"
        />
        <NumeroDaCasaCadastro
          value={formData.numeroCasa}
          onChange={handleInputChange}
          name="numero"
        />
        <ComplementoEnderecoCadastro
        value = {formData.complemento}
        onChange={handleInputChange}
        name="complemento"
        />
        <BotaoSubmitCadastro />
      </form>
    </div>
  );
}
