import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Botao from "../CabecalhoCadastro/botao";
import { useState } from "react";

export default function PerfilCampoCpf(props: any){
  const [cpf, setCpf] = useState('111.111.111-11');


  function handleCpfChange(event: React.ChangeEvent<HTMLInputElement>) {
    let cpfValue = event.target.value.replace(/\D/g, '');
    cpfValue = cpfValue.replace(/(\d{3})(\d)/, '$1.$2');
    cpfValue = cpfValue.replace(/(\d{3})(\d)/, '$1.$2');
    cpfValue = cpfValue.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setCpf(cpfValue);
  }

  

  return(
    <><label className="flex flex-col gap-1 rounded-md mb-2"  htmlFor="cpf">Cpf
    </label >
    <div className="input-group border w-64 border-gray-400 rounded-md p-2 mb-4 ">
        <input
            type="text"
            name="cpf"
            id="cpf"
            maxLength={14}
            placeholder="Insira o cpf"
            required
            onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
            } }
            value={cpf}
            onChange={handleCpfChange} 
            disabled/>
    </div></>
      
  )
}
