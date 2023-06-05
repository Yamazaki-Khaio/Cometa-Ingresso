import { useState } from "react";
import { PassThrough } from "stream";


export default function CampoQntIngressoVip(props: any) {
  const[qnt, setQnt] = useState("")
  const[preco, setPreco] = useState("")

    function handleQntChange(event: React.ChangeEvent<HTMLInputElement>){
      setQnt(event.target.value)
    }

  return (
    <div className="flex flex-col gap-4 justify-center items-left ">
        <input 
        id = ""
        type="text"
        className="border w-1/12 border-gray-400 rounded-md p-2 mb-8"
        style={{visibility: "collapse"}}
      />
      
        <input 
        id = "qnt_vip"
        type="text"
        placeholder="Qtd." 
        className="border border-gray-400 rounded-md p-2"
        style={{width: "100px"}}
        value={qnt}
        onChange={handleQntChange}
      />
      </div>
  );
}
