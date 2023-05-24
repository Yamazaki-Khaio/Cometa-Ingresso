import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React  from "react";
import { useState } from "react";


export default function PerfilComplementoCasa(props: any){
    const [complemento, setComplemento] = useState('Condoomínio');
    const [editando, setEditando] = useState(false); // Estado de edição

    function handleComplementoChange(event: React.ChangeEvent<HTMLInputElement>) {
        setComplemento(event.target.value);
    }

    function handleEditar() {
        setEditando(true); // Habilita a edição ao clicar no botão "Editar"
        setComplemento("")
      }
    

    return(
        <><label className="flex flex-col gap-1 rounded-md mb-2"  htmlFor="complemento">Complemento
        </label >
        <div className="input-group border w-64 border-gray-400 rounded-md p-2 mb-4">
            <input
                disabled
                type="text"
                name="complemento"
                id="complemento"
                maxLength={50}
                placeholder="Insira o complemento"
                required
                onInvalid={(e) => {
                    e.preventDefault();
                    alert("Algo deu errado. Tente novamente.");
                } }
                value={complemento}
                onChange={handleComplementoChange} />
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