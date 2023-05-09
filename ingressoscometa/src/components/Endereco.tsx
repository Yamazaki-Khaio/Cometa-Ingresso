import React  from "react";
import { useState } from "react";


export default function Endereco(props: any){
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');

    function handleCepChange(event: React.ChangeEvent<HTMLInputElement>) {
        let cepValue = event.target.value.replace(/\D/g, '');
        cepValue = cepValue.replace(/(\d{5})(\d{1,3})$/, '$1-$2');
        setCep(cepValue);
    }

    function handleRuaChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRua(event.target.value);
    }

    function handleNumeroChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNumero(event.target.value);
    }

    function handleComplementoChange(event: React.ChangeEvent<HTMLInputElement>) {
        setComplemento(event.target.value);
    }

    return(
        <div className="flex flex-col gap-4">
            <label htmlFor="endereco">Endereço</label>
            <label htmlFor="cep">CEP</label>
            <input 
                type="text" 
                name="cep" 
                id="cep" 
                maxLength={9} 
                placeholder="Insira seu CEP" 
                required 
                onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
                }}
                className="border w-64 border-gray-400 rounded-md p-2 mb-8"
                value={cep}
                onChange={handleCepChange}
            />
            <label htmlFor="rua">Rua</label>
            <input 
                type="text" 
                name="rua" 
                id="rua" 
                maxLength={50} 
                placeholder="Insira sua rua" 
                required 
                onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
                }}
                className="border w-64 border-gray-400 rounded-md p-2 mb-8"
                value={rua}
                onChange={handleRuaChange}
            />
            <label htmlFor="numero">Número</label>
            <input 
                type="text" 
                name="numero" 
                id="numero" 
                maxLength={20} 
                placeholder="Insira o número" 
                required 
                onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
                }}
                className="border w-64 border-gray-400 rounded-md p-2 mb-8"
                value={numero}
                onChange={handleNumeroChange}
            />
            <label htmlFor="complemento">Complemento</label>
            <input 
                type="text" 
                name="complemento" 
                id="complemento" 
                maxLength={50} 
                placeholder="Insira o complemento" 
                required 
                onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
                }}
                className="border w-64 border-gray-400 rounded-md p-2 mb-8"
                value={complemento}
                onChange={handleComplementoChange}
            />
        </div>
        
    )
}