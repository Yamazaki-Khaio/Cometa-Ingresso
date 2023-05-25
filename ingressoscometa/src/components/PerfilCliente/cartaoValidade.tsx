import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function CampoValidade(props: any) {
  const [validade, setValidade] = useState('');
  const [editando, setEditando] = useState(false); // Estado de ediçãos
  function handleValidadeChange(event: React.ChangeEvent<HTMLInputElement>) {
    let validadeValue = event.target.value.replace(/\D/g, '');
    setValidade(validadeValue);
  }


  function handleEditar() {
    setEditando(true); // Habilita a edição ao clicar no botão "Editar"
    setValidade("")
  }


  return(
    <>
    <div className="input-group border w-64 border-gray-400 rounded-md bg-white">
        <input
            type="date"
            name="validade"
            id="validade"
            disabled={!editando} // Define o estado de desabilitado com base na variável de estado "editando"
            placeholder="DD/AA"
            required
            onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
            } }
            value={validade}
            onChange={handleValidadeChange} />
        <span className="input-group-btn">
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

