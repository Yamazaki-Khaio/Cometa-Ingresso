import { useState } from "react";

export default function CampoPrecoVip(props: any){
  const [precoVip, setPrecoVip] = useState(""); //Armazena o valor do preço do setor VIP
  function handlePrecoVipChange(event: React.ChangeEvent<HTMLInputElement>){//Modifica o valor da descrição do preço do setor VIP
    setPrecoVip(event.target.value);
  }
  return(
    <div className="flex flex-col gap-4">
      <label htmlFor="rs">R$</label>
      <input 
        id = "precoVip"
        type = "text"
        placeholder="" 
        className="border w-16 border-gray-400 rounded-md p-2 mb-8"
        value = {precoVip}
        onChange={handlePrecoVipChange}
      />
    </div>
  )
}