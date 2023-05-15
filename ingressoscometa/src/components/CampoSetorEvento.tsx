import { useState } from "react";

export default function CampoSetorEvento(props: any){

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
      />
    </div>
  )
}