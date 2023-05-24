import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import InputMask from "react-input-mask";

export default function PerfilCampoTelefone(props: any) {
  const [telefone, setTelefone] = useState('(99)99999-9999');
  const [editando, setEditando] = useState(false); // Estado de ediçãos
  function handleTelefoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTelefone(event.target.value);
  }


  function handleEditar() {
    setEditando(true); // Habilita a edição ao clicar no botão "Editar"
    setTelefone("")
  }


  return(
    <><label className="flex flex-col gap-1 rounded-md mb-2"  htmlFor="telefone">telefone
    </label >
    <div className="input-group border w-64 border-gray-400 rounded-md p-2 mb-4">
        <input
            type="text"
            name="telefone"
            id="telefone"
            disabled={!editando} // Define o estado de desabilitado com base na variável de estado "editando"
            maxLength={50}
            placeholder="Insira o telefone"
            required
            onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
            } }
            value={telefone}
            onChange={handleTelefoneChange} />
        <span className="input-group-btn p-4">
            <button
                type="button"
                className="btn btn-default"
                onClick={handleEditar}
            >
                <FontAwesomeIcon
                    icon={faPenToSquare}
                    size="lg" />
            </button>
        </span>
    </div></>
    
)
}

