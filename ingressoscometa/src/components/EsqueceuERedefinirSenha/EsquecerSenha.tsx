import React, { FormEventHandler } from 'react';
import BotaoEnviarEmail from "./BotaoEnviarEmail";
import BotaoConfirmarSenhaNova from "./BotaoConfirmarSenhaNova";
import BotaoCancelar from './BotaoCancelar';
import CampoEmailEsqueciSenha from '../CadastroUsuario/CampoEmailEsqueciSenha';

const EsquecerSenha: React.FC = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    try {
      const form = {
        email:  document.getElementById('email').value
      }
      const res = await fetch('/api/usuario', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form),
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          console.log(form) //Testando se os valores estão passando
          console.log(data)
          window.location.replace("/login")
        });
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);

      // Lógica adicional para lidar com erros no envio dos dados
    }
  };

    return (
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit}>
            <h2 className="font-bold p-5">Informe seu e-mail associado a sua conta!</h2>
            <CampoEmailEsqueciSenha/>
            <div className="flex">
                <BotaoCancelar href='/login'/>
                <BotaoEnviarEmail/>
            </div>
          </form>
      </div>
    );
  };
  
  export default EsquecerSenha;