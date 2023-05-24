import { useState } from "react";

export default function CampoDescricaoEvento(props: any){
  const [descricao, setDescricao] = useState(""); //Armazena o valor da descrição do evento
  function handleDescricaoChange(event: React.ChangeEvent<HTMLInputElement>){//Modifica o valor da descrição do evento
    setDescricao(event.target.value);
  }
  return(
    <div className="flex flex-col gap-4">
      <label htmlFor="descricao">Descricao</label>
      <input 
        id = "descricao"
        type = "text"
        placeholder="Insira a descrição do evento" 
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
        value = {descricao}
        onChange={handleDescricaoChange}
      />
    </div>
  )
}