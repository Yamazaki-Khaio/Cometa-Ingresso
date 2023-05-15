import { useState } from "react";

export default function CampoPerfilEvento(props: any){

  return(
    <div className="flex flex-col gap-4">
      <label htmlFor="perfil">Perfil</label>
      <input 
        type="perfil" 
        name="perfil" 
        id="perfil" 
        placeholder="Insira o perfil do evento" 
        required 
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
      />
    </div>
  )
}