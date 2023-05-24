import { useState } from "react";
import Botao from "../Botao";

export default function CampoEmailEsqueciSenha(props: any){
  const [email, setEmail] = useState('');

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  return(
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <label htmlFor="email">Insira seu email para procurar a sua conta</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          maxLength={30} 
          placeholder="Insira seu e-mail" 
          required 
          onInvalid={(e) => {
            e.preventDefault();
            alert("Algo deu errado. Tente novamente.");
          }}
          className="border w-64 border-gray-400 rounded-md p-2 mb-8"
          value={email}
          onChange={handleEmailChange}
        />
        <div className="flex justify-center w-full">
          <Botao href="null" NomeBotao="Enviar"/>
        </div>
      </div>
    </div>
  )
}
