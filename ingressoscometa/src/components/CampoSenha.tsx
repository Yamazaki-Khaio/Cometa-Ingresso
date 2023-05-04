import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function CampoSenha(props: any){
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
      
    function handleSenhaChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSenha(event.target.value);
    }

    function handleMostrarSenhaChange() {
        setMostrarSenha(!mostrarSenha);
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
                <button 
                    type="button"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2" 
                    onClick={handleMostrarSenhaChange}
                >
                    <FontAwesomeIcon 
                        icon={mostrarSenha ? faEye : faEyeSlash} 
                        size="lg"
                    />
                </button>
            </div>
        </div>
    )
}