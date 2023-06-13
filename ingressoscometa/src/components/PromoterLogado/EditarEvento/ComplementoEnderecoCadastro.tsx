import React, { useEffect }  from "react";
import { useState } from "react";


export default function ComplementoEnderecoCadastro(props: any){
    const [complemento, setComplemento] = useState(props.complemento);

    useEffect(()=>{
        setComplemento(props.complemento)
      }, [props.complemento]);
      

    function handleComplementoChange(event: React.ChangeEvent<HTMLInputElement>) {
        setComplemento(event.target.value);
    }

    return(
        <div className="flex flex-col gap-1">
            <label htmlFor="complemento">
                Complemento:<span className="text-red-600 text-bold"> *</span>
            </label>
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