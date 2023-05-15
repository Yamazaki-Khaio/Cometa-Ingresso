import { useState } from "react";

export default function CampoLocalEvento(props: any){

  return(
    <div className="flex flex-col gap-4">
      <label htmlFor="local">Local</label>
      <input 
        placeholder="Insira a descrição do local do evento" 
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
      />
    </div>
  )
}