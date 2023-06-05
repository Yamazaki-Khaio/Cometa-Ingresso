import { useState } from "react";

export default function CampoPrecoNenhum(props: any){
  const [preco, setPreco] = useState(""); //Armazena o valor do preço do setor VIP
  function handlePrecoChange(event: React.ChangeEvent<HTMLInputElement>){//Modifica o valor da descrição do preço do setor VIP
    setPreco(event.target.value);
  }
  return(
    <div className="flex flex-col gap-4 justify-center items-left ">
        <input 
        id = ""
        type="text"
        className="border w-1/12 border-gray-400 rounded-md p-2 mb-8"
        style={{visibility: "collapse"}}
      />
      
      <input 
        id = "preco_nenhum"
        type="text"
        placeholder="R$" 
        className="border border-gray-400 rounded-md p-2"
        style={{width: "100px"}}
        value={preco}
        onChange={handlePrecoChange}
      />
    </div>
  )
}