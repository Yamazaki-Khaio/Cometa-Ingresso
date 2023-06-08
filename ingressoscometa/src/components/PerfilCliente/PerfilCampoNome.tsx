import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";


export default function PerfilCampoNome(props: any) {

  const [editando, setEditando] = useState(false); // Estado de edição
  const [nome, setNome] = useState(""); //Armazena o valor do nome
  
  function handleNomeChange(event: React.ChangeEvent<HTMLInputElement>){//Modifica o valor do nome
    setNome(event.target.value);
  }

  function handleEditar() {
    setEditando(true); // Habilita a edição ao clicar no botão "Editar"
  }

  return (
    <>
      <label className="flex flex-col gap-1 rounded-md mb-2" htmlFor="nome">
        Nome Completo
      </label>
      <div className="input-group border w-64 border-gray-400 rounded-md p-2 mb-4">
        <input
          id = "nome"
          type="text"
          disabled={!editando} // Define o estado de desabilitado com base na variável de estado "editando"
          maxLength={50}
          placeholder="Insira o nome"
          required
          value={nome}
          onChange={handleNomeChange}
          onInvalid={(e) => {
            e.preventDefault();
            alert("Algo deu errado. Tente novamente.");
          }}
        />
        <span className="input-group-btn p-4">
          <button type="button" className="btn btn-default" onClick={handleEditar}>
            <FontAwesomeIcon icon={faPenToSquare} size="lg" />
          </button>
        </span>
      </div>
    </>
  );
}
