import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function PerfilCampoNome(props: any){
  const [nome, setNome] = useState("Dino da Silva Sauro"); //Armazena o valor do nome
  function handleNomeChange(event: React.ChangeEvent<HTMLInputElement>){//Modifica o valor do nome
    setNome(event.target.value);
  }
  function handleEditar(event: React.ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return(
    <><label className="flex flex-col gap-1 rounded-md mb-2"  htmlFor="nome">Nome Completo
    </label >
    <div className="input-group border w-64 border-gray-400 rounded-md p-2 mb-4">
        <input
            type="text"
            name="nome"
            id="nome"
            disabled
            maxLength={50}
            placeholder="Insira o nome"
            required
            onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
            } }
            value={nome}
            onChange={handleNomeChange} />
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

  