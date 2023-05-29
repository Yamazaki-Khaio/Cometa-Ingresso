import { useState } from "react";


export default function CampoSetorEvento(props: any) {
  const VipClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    var checkBox = document.getElementById("VipClick");
    if (checkBox.checked == true){
      console.log("vip")
    }
  };

  const CamaroteClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    var checkBox = document.getElementById("VipClick");
    if (checkBox.checked == true){
      console.log("camarote")
    }
  };

  const BackstageClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    var checkBox = document.getElementById("VipClick");
    if (checkBox.checked == true){
      console.log("backstage")
    }
  };

  const NenhumClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    var checkBox = document.getElementById("VipClick");
    if (checkBox.checked == true){
      console.log("nenhum")
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="setor">Setores</label>
      <div className="r1">
      VIP: <input 
      type="checkbox" 
      id="setor" 
      onclick="VipClick()"
      className="border w-1/2 border-gray-400 rounded-md">
      </input>
      </div>
      <div className="r2">
      Camarote: <input 
      type="checkbox" 
      id="setor" 
      onclick="CamaroteClick()"
      className="border w-10 border-gray-400 rounded-md">
      </input>
      </div>
      <div className="r3">
      Backstage: <input 
      type="checkbox" 
      id="setor" 
      onclick="BackstageClick()"
      className="border w-10 border-gray-400 rounded-md">
      </input>
      </div>
      <div className="r4">
      Nenhum: <input 
      type="checkbox" 
      id="setor" 
      onclick="NenhumClick()"
      className="border w-1/4 border-gray-400 rounded-md p-2 mb-8">
      </input>
      </div>
      </div>
  );
}
