import { useState, ChangeEvent, FormEventHandler } from "react";
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
import { signIn } from "next-auth/react";

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
  const handleCadastro: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const message = document.getElementById('message');
    const data = new FormData();
    const nome = document.getElementById('nome') as HTMLInputElement;
    const cpf = document.getElementById('cpf') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const telefone = document.getElementById('telefone') as HTMLInputElement;
    const senha = document.getElementById('senha') as HTMLInputElement;
    const endereco = document.getElementById('endereco') as HTMLInputElement;
    const numeroCasa = document.getElementById('numeroCasa') as HTMLInputElement;
    const complemento = document.getElementById('complemento') as HTMLInputElement;
    
    if (nome && cpf && email && telefone && senha && endereco && numeroCasa && complemento) {
      data.append('nome', nome.value);
      data.append('cpf', cpf.value);
      data.append('email', email.value);
      data.append('telefone', telefone.value);
      data.append('senha', senha.value);
      data.append('endereco', endereco.value);
      data.append('numeroCasa', numeroCasa.value);
      data.append('complemento', complemento.value);
    }

    if (message?.style.display === 'block') {
      message.style.display = 'none';
    }

    const res = signIn('credentials', {
      cpf: data.get('cpf'),
      password: data.get('senha'),
      redirect: false
    });

    res.then((resultado) => {
      if (resultado.ok) {
        window.location.replace('/home');
      } else {
        if (message) {
          message.style.display = 'block';
        }
      }
    });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-12">
      <form onSubmit={handleCadastro}>
        <NomeCompleto value={''} />
        <CampoCpf value={''} />
        <CampoEmail value={''} />
        <CampoTelefone value={''} />
        <CampoSenha value={''} />
        <RadioButton />
        <p>Endereço</p>
        <CepCadastro value={''} />
        <RuaCadastro value={''} />
        <NumeroDaCasaCadastro value={''} />
        <ComplementoEnderecoCadastro value={''} />
        <BotaoSubmitCadastro />
      </form>
    </div>
  );
}
