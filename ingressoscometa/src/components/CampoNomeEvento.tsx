import { useState } from "react";

export default function CampoNomeEvento(props: any){
  const [nome, setNome] = useState('');

  function handleNomeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNome(event.target.value);
  }

  return(
    <div className="flex flex-col gap-4">
      <label htmlFor="nome">Nome</label>
      <input 
        type="nome" 
        name="nome" 
        id="nome" 
        placeholder="Insira o nome do evento" 
        required 
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
        value={nome}
        onChange={handleNomeChange}
      />
    </div>
  )
}