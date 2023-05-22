import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React  from "react";
import { useState } from "react";


export default function PerfilCampoCep(props: any){
    const [cep, setCep] = useState('123.456-000');

    function handleCepChange(event: React.ChangeEvent<HTMLInputElement>) {
        let cepValue = event.target.value.replace(/\D/g, '');
        cepValue = cepValue.replace(/(\d{5})(\d{1,3})$/, '$1-$2');
        setCep(cepValue);
    }

    function handleEditar(event: React.ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
    }

    return(
        <><label className="flex flex-col gap-1 rounded-md mb-2"  htmlFor="cep">Cep
        </label >
        <div className="input-group border w-64 border-gray-400 rounded-md p-2 mb-4">
            <input
                type="text"
                name="cep"
                id="cep"
                maxLength={50}
                disabled
                placeholder="Insira o cep"
                required
                onInvalid={(e) => {
                    e.preventDefault();
                    alert("Algo deu errado. Tente novamente.");
                } }
                value={cep}
                onChange={handleCepChange} />
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