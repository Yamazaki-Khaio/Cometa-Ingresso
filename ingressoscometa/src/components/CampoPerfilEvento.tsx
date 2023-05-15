import { useState } from "react";

export default function CampoPerfilEvento(props: any){

  return(
    <div className="flex flex-col gap-4">
      <label htmlFor="perfil">Perfil</label>
      <input 
        placeholder="Insira o perfil do evento" 
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
      />
    </div>
  )
}