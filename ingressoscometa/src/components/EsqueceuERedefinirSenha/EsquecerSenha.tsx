import React, { FormEventHandler, useState } from 'react';
import BotaoEnviarEmail from "./BotaoEnviarEmail";
import BotaoConfirmarSenhaNova from "./BotaoConfirmarSenhaNova";
import BotaoCancelar from './BotaoCancelar';
import CampoEmailEsqueciSenha from '../CadastroUsuario/CampoEmailEsqueciSenha';
import fetch from 'isomorphic-unfetch';

const EsquecerSenha: React.FC = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [emailExists, setEmailExists] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const form = {
        email: document.getElementById('email').value
      };  


      const res = await fetch(`/api/email?email=${form.email}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
      });

      if (res.ok) {
        const data = await res.json();
        if (data.exists) {
          // O email existe no banco de dados
          console.log("O email está no banco");
          setEmailExists(true);
        } else {
          // O email não existe no banco de dados
          console.log("O email não está no banco");
          setEmailExists(false);
        }
        setEmailSent(true);
      } else {
        // Lógica adicional para lidar com erros na resposta da API
        console.log("Erro ao verificar o email no banco de dados");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      // Lógica adicional para lidar com erros no envio dos dados
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit}>
        <h2 className="font-bold p-5">Informe seu e-mail associado à sua conta!</h2>
        <CampoEmailEsqueciSenha />
        <div className="flex">
          <BotaoCancelar href='/login' />
          <BotaoEnviarEmail />
        </div>
      </form>

      {emailSent && (
        <p>{emailExists ? "E-mail encontrado no banco de dados!" : "E-mail não encontrado no banco de dados."}</p>
      )}
    </div>
  );
};

export default EsquecerSenha;
