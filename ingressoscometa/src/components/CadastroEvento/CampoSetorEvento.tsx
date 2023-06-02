import { useState } from "react";


export default function CampoSetorEvento(props: any) {
  const[camarote, setCamarote] = useState("")
  const[vip, setVip] = useState("")
  const[backstage, setBackstage] = useState("")
  const[nenhum, setNenhum] = useState("")

    function CamaroteClick(){
      setCamarote("Camarote")
      console.log("camarote")
    }

    function VipClick(){
      setVip("Vip")
      console.log("vip")
    }

    function BackstageClick(){
      setBackstage("Backstage")
      console.log("backstage")
    }

    function NenhumClick(){
      setNenhum("Nenhum")
      console.log("nenhum")
    }

  return (
    <div className="flex flex-col gap-4 justify-center items-left ">
    <div className="x" style={{wordSpacing: '15px'}} >Setores Preço Quantidade</div>
      <div className="r1">
      VIP: <input 
      type="checkbox" 
      id="VipCheck" 
      onClick={VipClick}
      className="border w-10 border-gray-400 justify-center rounded-md">
      </input>
      <input 
        id = "VipPreco"
        type="text"
        placeholder="R$" 
        className="border w-1/6 border-gray-400 justify-center rounded-md p-2 mb-8"
       // value={nome}
       // onChange={handleNomeChange}
      />
        <input 
        id = "VipQnt"
        type="text"
        placeholder="Qtd." 
        className="border w-1/6 border-gray-400 justify-center rounded-md p-2 mb-8"
       // value={nome}
       // onChange={handleNomeChange}
      />
      </div>
      <div className="r2">
      Camarote: <input 
      type="checkbox" 
      id="CamaroteCheck"
      onClick={CamaroteClick}
      className="border w-10 border-gray-400 justify-center rounded-md">
      </input>
      <input 
        id = "CamarotePreco"
        type="text"
        placeholder="R$" 
        className="border w-1/6 border-gray-400 justify-center rounded-md p-2 mb-8"
       // value={nome}
       // onChange={handleNomeChange}
      />
        <input 
        id = "CamaroteQnt"
        type="text"
        placeholder="Qtd." 
        className="border w-1/6 border-gray-400 justify-center rounded-md p-2 mb-8"
       // value={nome}
       // onChange={handleNomeChange}
      />
      </div>
      <div className="r3">
      Backstage: <input 
      type="checkbox" 
      id="BackstageCheck" 
      onClick={BackstageClick}
      className="border w-10 border-gray-400 justify-center rounded-md">
      </input>
      <input 
        id = "BackstagePreco"
        type="text"
        placeholder="R$" 
        className="border w-1/6 border-gray-400 justify-center rounded-md p-2 mb-8"
       // value={nome}
       // onChange={handleNomeChange}
      />
        <input 
        id = "BackstageQnt"
        type="text"
        placeholder="Qtd." 
        className="border w-1/6 border-gray-400 justify-center rounded-md p-2 mb-8"
       // value
       // onChange
       />
      </div>
      <div className="r4">
      Nenhum: <input 
      type="checkbox" 
      id="NenhumCheck" 
      onClick={NenhumClick}
      className="border w-10 border-gray-400 justify-center rounded-md mb-8">
      </input>
      <input 
        id = "NenhumPreco"
        type="text"
        placeholder="R$" 
        className="border w-1/6 border-gray-400 justify-center rounded-md p-2 mb-8"
       // value={nome}
       // onChange={handleNomeChange}
      />
        <input 
        id = "NenhumQnt"
        type="text"
        placeholder="Qtd." 
        className="border w-1/6 border-gray-400 justify-center rounded-md p-2 mb-8"
       // value
       // onChange
       />
      </div>
      </div>
  );
}
