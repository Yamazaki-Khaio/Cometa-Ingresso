import { useState, ChangeEvent } from "react";
import React from "react";
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
import axios from "axios";
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
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numeroCasa, setNumeroCasa] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cadastroSucesso, setCadastroSucesso] = useState(false);
  const [erroCadastro, setErroCadastro] = useState("");

  function handleCadastro() {
    const data: FormData = {
      nome: document.getElementById('nome').value,//nome
      cpf: document.getElementById('cpf').value,//cpf
      email: document.getElementById('email').value,//email
      telefone: document.getElementById('telefone').value,//telefone
      senha: document.getElementById('senha').value,//senha
      endereco: document.getElementById('endereco').value,//endereço
      numeroCasa: document.getElementById('numeroCasa').value,//numero da casa
      complemento: document.getElementById('complemento').value,//complemento
    };

    axios
      .post("/api/usuario", data)
      .then((response) => {
        // Cadastro realizado com sucesso
        setCadastroSucesso(true);
        setErroCadastro("");
        console.log("Cadastro realizado com sucesso!");
      })
      .catch((error) => {
        // Erro no cadastro
        setCadastroSucesso(false);
        setErroCadastro(
          "Erro no cadastro. Por favor, tente novamente mais tarde."
        );
        console.error("Erro no cadastro:", error);
      });
  }

  function handleNomeChange(e: ChangeEvent<HTMLInputElement>) {
    setNome(e.target.value);
  }

  function handleCpfChange(e: ChangeEvent<HTMLInputElement>) {
    setCpf(e.target.value);
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleTelefoneChange(e: ChangeEvent<HTMLInputElement>) {
    setTelefone(e.target.value);
  }

  function handleSenhaChange(e: ChangeEvent<HTMLInputElement>) {
    setSenha(e.target.value);
  }

  function handleEnderecoChange(e: ChangeEvent<HTMLInputElement>) {
    setEndereco(e.target.value);
  }

  function handleNumeroCasaChange(e: ChangeEvent<HTMLInputElement>) {
    setNumeroCasa(e.target.value);
  }

  function handleComplementoChange(e: ChangeEvent<HTMLInputElement>) {
    setComplemento(e.target.value);
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-12">
      <form onSubmit={handleCadastro}>
        <NomeCompleto value={nome} onChange={handleNomeChange}/>
        <CampoCpf value={cpf} onChange={handleCpfChange} />
        <CampoEmail value={email} onChange={handleEmailChange}/>
        <CampoTelefone value={telefone} onChange={handleTelefoneChange}/>
        <CampoSenha value={senha} onChange={handleSenhaChange}/>
        <RadioButton />
        <label htmlFor="endereco">Endereço</label>
        <CepCadastro value={endereco} onChange={handleEnderecoChange}/>
        <RuaCadastro />
        <NumeroDaCasaCadastro value={numeroCasa} onChange={handleNumeroCasaChange}
        />
        <ComplementoEnderecoCadastro value={complemento} onChange={handleComplementoChange}/>
        <BotaoSubmitCadastro/>

        {cadastroSucesso && <p>Cadastro realizado com sucesso!</p>}
        {erroCadastro && <p>{erroCadastro}</p>}
      </form>

    </div>
  )
}