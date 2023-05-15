import { useState } from "react";

export default function CampoDescricaoEvento(props: any){
  return(
    <div className="flex flex-col gap-4">
      <label htmlFor="descricao">Descricao</label>
      <input 
        placeholder="Insira a descrição do evento" 
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
      />
    </div>
  )
}