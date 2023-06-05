import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function CampoNomeCartao(props: any) {
  const [nomeCartao, setNomeCartao] = useState("");
  const [editando, setEditando] = useState(false);

  function handleNomeCartaoChange(event: React.ChangeEvent<HTMLInputElement>) {
    const nomeCartaoValue = event.target.value;
    setNomeCartao(nomeCartaoValue);
  }

  function handleEditar() {
    setEditando(true);
    setNomeCartao("");
  }

  return (
    <>
      <div className={`input-group border w-64 border-gray-400 rounded-md bg-white ${editando ? "editing" : ""}`}>
        <input
          type="text"
          name="nomeCartao"
          id="nomeCartao"
          maxLength={50}
          placeholder={!editando ? "Nome do titular do cartão" : ""}
          required
          onInvalid={(e) => {
            e.preventDefault();
            alert("Algo deu errado. Tente novamente.");
          }}
          value={nomeCartao}
          onChange={handleNomeCartaoChange}
        />
        <span className="input-group-btn">
          <button type="button" className="btn btn-default" onClick={handleEditar}>
            <FontAwesomeIcon icon={faPenToSquare} size="lg" />
          </button>
        </span>
      </div>
    </>
  );
}
