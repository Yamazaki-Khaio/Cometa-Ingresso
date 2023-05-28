import React from 'react';
import BotaoEnviarEmail from "./BotaoEnviarEmail";
import BotaoConfirmarSenhaNova from "./BotaoConfirmarSenhaNova";
import BotaoCancelar from './BotaoCancelar';
import CampoEmailEsqueciSenha from '../CadastroUsuario/CampoEmailEsqueciSenha';

const EsquecerSenha: React.FC = () => {
    return (
      <div className="flex flex-col items-center">
            <h2 className="font-bold p-5">Informe seu e-mail associado a sua conta!</h2>
            <CampoEmailEsqueciSenha/>
            <div className="flex">
                <BotaoCancelar href='/login'/>
                <BotaoEnviarEmail/>
            </div>
      </div>
    );
  };
  
  export default EsquecerSenha;