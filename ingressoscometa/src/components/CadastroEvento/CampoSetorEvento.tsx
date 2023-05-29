import { useState } from "react";


export default function CampoSetorEvento(props: any) {
  const VipClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    var checkBox = document.getElementById("Vip");
    if (checkBox.checked == true){
      console.log("vip")
    }
  };

  const CamaroteClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    var checkBox = document.getElementById("Camarote");
    if (checkBox.checked == true){
      console.log("camarote")
    }
  };

  const BackstageClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    var checkBox = document.getElementById("Backstage");
    if (checkBox.checked == true){
      console.log("backstage")
    }
  };

  const NenhumClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    var checkBox = document.getElementById("Nenhum");
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
      id="Vip" 
      className="border w-1/2 border-gray-400 rounded-md">
      </input>
      </div>
      <div className="r2">
      Camarote: <input 
      type="checkbox" 
      id="Camarote" 
      onclick="CamaroteClick()"
      className="border w-10 border-gray-400 rounded-md">
      </input>
      </div>
      <div className="r3">
      Backstage: <input 
      type="checkbox" 
      id="Backstage" 
      onclick="BackstageClick()"
      className="border w-10 border-gray-400 rounded-md">
      </input>
      </div>
      <div className="r4">
      Nenhum: <input 
      type="checkbox" 
      id="Nenhum" 
      onclick="NenhumClick()"
      className="border w-1/4 border-gray-400 rounded-md p-2 mb-8">
      </input>
      </div>
      </div>
  );
}
