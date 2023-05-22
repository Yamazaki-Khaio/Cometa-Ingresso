import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React  from "react";
import { useState } from "react";


export default function PerfilCampoRua(props: any){
    const [rua, setRua] = useState('Rua 1');

    function handleRuaChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRua(event.target.value);
    }

    function handleEditar(event: React.ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
    }

    return(
        <><label className="flex flex-col gap-1 rounded-md mb-2"  htmlFor="rua">Rua
        </label >
        <div className="input-group border w-64 border-gray-400 rounded-md p-2 mb-4">
            <input
                type="text"
                name="rua"
                id="rua"
                maxLength={50}
                placeholder="Insira o rua"
                required
                disabled
                onInvalid={(e) => {
                    e.preventDefault();
                    alert("Algo deu errado. Tente novamente.");
                } }
                value={rua}
                onChange={handleRuaChange}
                 />
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