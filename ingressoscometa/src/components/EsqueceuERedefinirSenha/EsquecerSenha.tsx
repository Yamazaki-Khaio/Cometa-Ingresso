import React from 'react';
import CampoEmail from "../CadastroUsuario/CampoEmail";
import BotaoEnviarEmail from "./BotaoEnviarEmail";
import BotaoConfirmarSenhaNova from "./BotaoConfirmarSenhaNova";
import BotaoCancelar from './BotaoCancelar';

const EsquecerSenha: React.FC = () => {
    return (
      <div className="flex flex-col items-center">
            <h2 className="font-bold p-5">Informe seu e-mail associado a sua conta!</h2>
            <CampoEmail/>
            <div className="flex">
                <BotaoCancelar/>
                <BotaoEnviarEmail/>
            </div>
      </div>
    );
  };
  
  export default EsquecerSenha;