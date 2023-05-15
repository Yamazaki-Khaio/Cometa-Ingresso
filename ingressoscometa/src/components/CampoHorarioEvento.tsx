import { useState } from "react";

export default function CampoHorarioEvento(props: any){
  const [horario, setHorario] = useState('');

  function handleHorarioChange(event: React.ChangeEvent<HTMLInputElement>) {
    setHorario(event.target.value);
  }

  return(
    <div className="flex flex-col gap-4">
      <label htmlFor="horario">Horario</label>
      <input 
        type="horario" 
        name="horario" 
        id="horario" 
        placeholder="  /  /  " 
        required 
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
        value={horario}
        onChange={handleHorarioChange}
      />
    </div>
  )
}