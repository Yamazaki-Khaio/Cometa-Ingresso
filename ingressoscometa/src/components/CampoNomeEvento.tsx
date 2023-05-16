import { useState } from "react";

export default function CampoNomeEvento(props: any){
  return(
    <div className="flex flex-col gap-4">
      <label htmlFor="nome">Nome</label>
      <input 
        id = "nome"
        placeholder="Insira o nome do evento" 
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
      />
    </div>
  )
}