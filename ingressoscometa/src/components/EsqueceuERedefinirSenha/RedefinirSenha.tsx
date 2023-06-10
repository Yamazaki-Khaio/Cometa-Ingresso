import React, { FormEventHandler, useEffect, useState } from 'react';
import BotaoConfirmarSenhaNova from "./BotaoConfirmarSenhaNova";
import BotaoCancelar from './BotaoCancelar';
import CampoSenhaERepetirSenha from "../CadastroUsuario/CampoSenhaERepetirSenha";
import { getSession } from 'next-auth/react';
import { createHash } from 'crypto';

const EsquecerSenha: React.FC = () => {
  const [id_usuario, setIdUsuario] = useState("");
 

  useEffect(() => {
    
    async function getUserId() {
      const user = await getSession();
      const userId = user?.user.id;
      setIdUsuario(userId);
      console.log(userId)
      
    }
    getUserId();
  }, []);



  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try{
      const novaSenha = document.getElementById('senha').value
      const hash = createHash('sha256')
      hash.update(novaSenha)
      const form={
        id :id_usuario,
        senha: hash.digest('hex'),
      }
      const res = await fetch(`http://localhost:3000/api/usuario?id=${id_usuario}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form),
      });
    }catch{

    }
  }
  

    return (
      
      <div className="flex flex-col items-center">
            <h2 className="font-bold p-5">Insira a nova senha!</h2>
            <CampoSenhaERepetirSenha/>
            <div className="flex">
            <form onSubmit={handleSubmit}>
                <BotaoCancelar href='/login'/>
                <BotaoConfirmarSenhaNova/>
                </form>
            </div>
      </div>
      
    );
  };
  
  export default EsquecerSenha;