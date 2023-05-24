import Botao from "../Cabecalho/botao";
import { useState } from "react";

export default function CampoCpf(props: any){
  const [cpf, setCpf] = useState('');


  function handleCpfChange(event: React.ChangeEvent<HTMLInputElement>) {
    let cpfValue = event.target.value.replace(/\D/g, '');
    cpfValue = cpfValue.replace(/(\d{3})(\d)/, '$1.$2');
    cpfValue = cpfValue.replace(/(\d{3})(\d)/, '$1.$2');
    cpfValue = cpfValue.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setCpf(cpfValue);
  }

  return(
    <div className="flex flex-col gap-4">
      <label htmlFor="cpf">CPF</label>
      <input 
        type="text" 
        maxLength={14} 
        name="Cpf" 
        id="cpf" 
        placeholder="Insira apenas números" 
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
        value={cpf}
        onChange={handleCpfChange}
        required 
        onInvalid={(e) => {
          e.preventDefault();
          alert("Algo deu errado. Tente novamente.");
        }}
        />
    </div>
  )
}

function isValidCPF(cpf: string) {
    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    ) {
        return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) return false
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ) return false
    return true
}

