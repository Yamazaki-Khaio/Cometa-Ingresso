import { useState } from "react";


export default function CampoSetorEvento(props: any) {
  const[checked, setChecked] = useState(false)

    function CamaroteClick(){
      setChecked(checked)
      console.log("camarote")
    }

    function VipClick(){
      setChecked(checked)
      console.log("vip")
    }

    function BackstageClick(){
      setChecked(checked)
      console.log("backstage")
    }

    function NenhumClick(){
      setChecked(checked)
      console.log("nenhum")
    }

  return (
    <div className="flex flex-col gap-4 items-center">
            <div className="r1">
      VIP: <input 
      type="checkbox" 
      id="Vip" 
      onClick={VipClick}
      className="border w-10 border-gray-400 rounded-md">
      </input>
      </div>
      <div className="r2">
      Camarote: <input 
      type="checkbox" 
      id="Camarote"
      onClick={CamaroteClick}
      className="border w-10 border-gray-400 rounded-md">
      </input>
      </div>
      <div className="r3">
      Backstage: <input 
      type="checkbox" 
      id="Backstage" 
      onClick={BackstageClick}
      className="border w-10 border-gray-400 rounded-md">
      </input>
      </div>
      <div className="r4">
      Nenhum: <input 
      type="checkbox" 
      id="Nenhum" 
      onClick={NenhumClick}
      className="border w-10 border-gray-400 rounded-md mb-8">
      </input>
      </div>
      </div>
  );
}
