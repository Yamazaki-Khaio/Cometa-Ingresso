import { useState } from "react";

export default function CampoNomeEvento(props: any){
  const [descricao, setDescricao] = useState('');

  function handleNomeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNome(event.target.value);
  }

  return(
    <div className="flex flex-col gap-4">
      <label htmlFor="descricao">Descricao</label>
      <input 
        type="descricao" 
        name="descricao" 
        id="descricao" 
        placeholder="Insira a descrição do evento" 
        required 
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
        value={descricao}
        onChange={handleNomeChange}
      />
    </div>
  )
}