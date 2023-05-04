import { useState } from "react";

export default function CampoSenha(props: any){
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
      
    function handleSenhaChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSenha(event.target.value);
    }

    function handleMostrarSenhaChange(event: React.ChangeEvent<HTMLInputElement>) {
        setMostrarSenha(event.target.checked);
    }

    return(
        <div className="flex flex-col gap-4">
            <label htmlFor="senha">Senha</label>
            <div className="relative">
                <input 
                    type={mostrarSenha ? "text" : "password"} // alterna entre exibir a senha como texto e como um valor oculto
                    name="senha" 
                    placeholder="Insira Sua senha"  
                    id="senha" 
                    className="border w-64 border-gray-400 rounded-md p-2 mb-2"
                    onChange={handleSenhaChange}
                />
                <label htmlFor="mostrarSenha" className="flex items-center">
                    <input 
                        type="checkbox" 
                        id="mostrarSenha" 
                        className="mr-2"
                        onChange={handleMostrarSenhaChange}
                    />
                    <span>Mostrar senha</span>
                </label>
            </div>
        </div>
    )
}
