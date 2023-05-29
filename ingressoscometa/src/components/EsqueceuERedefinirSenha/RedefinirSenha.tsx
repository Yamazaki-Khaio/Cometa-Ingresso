import React from 'react';
import BotaoConfirmarSenhaNova from "./BotaoConfirmarSenhaNova";
import BotaoCancelar from './BotaoCancelar';
import CampoSenhaERepetirSenha from "../CadastroUsuario/CampoSenhaERepetirSenha";

const EsquecerSenha: React.FC = () => {
    return (
      <div className="flex flex-col items-center">
            <h2 className="font-bold p-5">Insira a nova senha!</h2>
            <CampoSenhaERepetirSenha/>
            <div className="flex">
                <BotaoCancelar href='/login'/>
                <BotaoConfirmarSenhaNova/>
            </div>
      </div>
    );
  };
  
  export default EsquecerSenha;