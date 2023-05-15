import { useState } from "react";

export default function CampoSetorEvento(props: any){
  const [setor, setSetor] = useState('');

  function handleSetorChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSetor(event.target.value);
  }

  return(
    <div className="flex flex-col gap-4">
      <label htmlFor="setor">Setor</label>
      <input 
        type="setor" 
        name="setor" 
        id="setor" 
        placeholder="Insira o setor do evento" 
        required 
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
        value={setor}
        onChange={handleSetorChange}
      />
    </div>
  )
}