import { useState } from "react";
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

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numeroCasa, setNumeroCasa] = useState("");
  const [complemento, setComplemento] = useState("");

  function handleCadastro() {
    // Aqui você pode realizar a lógica para enviar os dados ao backend e realizar o insert no banco de dados

    const data = {
      nome: nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
      senha: senha,
      endereco: endereco,
      numeroCasa: numeroCasa,
      complemento: complemento
    };

    // Enviar para o backend ou realizar a lógica de inserção no banco de dados aqui
    console.log("Dados do cadastro:", data);
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-12">
      <NomeCompleto value={nome} onChange={setNome} />
      <CampoCpf value={cpf} onChange={setCpf} />
      <CampoEmail value={email} onChange={setEmail} />
      <CampoTelefone value={telefone} onChange={setTelefone} />
      <CampoSenha value={senha} onChange={setSenha} />
      <RadioButton />
      <label htmlFor="endereco">Endereço</label>
      <CepCadastro value={endereco} onChange={setEndereco} />
      <RuaCadastro />
      <NumeroDaCasaCadastro value={numeroCasa} onChange={setNumeroCasa} />
      <ComplementoEnderecoCadastro
        value={complemento}
        onChange={setComplemento}
      />
      <Botao href="/cadastro" NomeBotao="Cadastro"/>
    </div>
  );
}