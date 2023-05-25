import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function CampoNumeroCartao(props: any) {
  const [numeroCartao, setNumeroCartao] = useState('');
  const [editando, setEditando] = useState(false); // Estado de ediçãos
  function handleNumeroCartaoChange(event: React.ChangeEvent<HTMLInputElement>) {
    let numeroCartaoValue = event.target.value.replace(/\D/g, '');
    setNumeroCartao(numeroCartaoValue);
  }


  function handleEditar() {
    setEditando(true); // Habilita a edição ao clicar no botão "Editar"
    setNumeroCartao("")
  }


  return(
    <>
    <div className="input-group border w-64 border-gray-400 rounded-md bg-white">
        <input
            type="text"
            name="numeroCartao"
            id="numeroCartao"
            disabled={!editando} // Define o estado de desabilitado com base na variável de estado "editando"
            maxLength={50}
            placeholder="Insira o número do cartão"
            required
            onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
            } }
            value={numeroCartao}
            onChange={handleNumeroCartaoChange} />
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

