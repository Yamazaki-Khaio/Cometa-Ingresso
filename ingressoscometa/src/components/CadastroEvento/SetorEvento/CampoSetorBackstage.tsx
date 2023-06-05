import { useState } from "react";


export default function CampoSetorBackstage(props: any) {
  const[setor, setSetor] = useState("")
  const[qnt, setQnt] = useState("")
  const[preco, setPreco] = useState("")

    function handleQntChange(event: React.ChangeEvent<HTMLInputElement>){
      setQnt(event.target.value)
    }

    function handleSetorChange(event: React.ChangeEvent<HTMLInputElement>){
      setSetor(event.target.value)
    }

    function handlePrecoChange(event: React.ChangeEvent<HTMLInputElement>){
      setPreco(event.target.value)
    }

    function BackstageClick(){
      if (setor == ""){
        setSetor("Backstage")
      }else{
        setSetor("")

      }
    }

  return (
    
    <div className="flex flex-col gap-4 justify-center items-left ">
       <input 
        id = "setor"
        type="text"
        className="border w-1/12 border-gray-400 rounded-md p-2 mb-8"
        value={setor}
        style={{visibility: "collapse"}}
        onChange={handleSetorChange}
      />
      <div className="r1" style={{wordSpacing: '30px'}}>
      Backstage: <input 
      type="checkbox" 
      id="BackstageCheck" 
      value = {setor}
      onClick={BackstageClick}
      className="border w-10 border-gray-400 justify-center rounded-md">
      </input>
      <input 
        id = "VipPreco"
        type="text"
        placeholder="R$" 
        className="border border-gray-400 justify-center rounded-md p-2 mb-8"
        style={{width: "100px"}}
        value={preco}
        onChange={handlePrecoChange}
      />

      </div>
      </div>
  );
}