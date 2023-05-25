import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function CampoCvv(props: any) {
  const [cvv, setCvv] = useState('');
  const [editando, setEditando] = useState(false); // Estado de ediçãos
  function handleCvvChange(event: React.ChangeEvent<HTMLInputElement>) {
    let cvvValue = event.target.value.replace(/\D/g, '');
    setCvv(cvvValue);
  }


  function handleEditar() {
    setEditando(true); // Habilita a edição ao clicar no botão "Editar"
    setCvv("")
  }


  return(
    <>
    <div className="input-group border w-64 border-gray-400 rounded-md bg-white">
        <input
            type="text"
            name="cvv"
            id="cvv"
            disabled={!editando} // Define o estado de desabilitado com base na variável de estado "editando"
            maxLength={3}
            placeholder="CVV"
            required
            onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
            } }
            value={cvv}
            onChange={handleCvvChange} />
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

