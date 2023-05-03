import { useState } from "react";
export default function CampoSenha(props: any){
    const [senha, setSenha] = useState('');
      
    function handleSenhaChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSenha(event.target.value);
        }
    return(
        <div className="flex flex-col gap-4">
            <label htmlFor="senha">Senha</label>
            <input type="password" 
                name="senha" 
                placeholder="Insira Sua senha"  
                id="senha" 
                className="border w-64 border-gray-400 rounded-md p-2 mb-8"
                onChange={handleSenhaChange}
                />
        </div>
    )
}