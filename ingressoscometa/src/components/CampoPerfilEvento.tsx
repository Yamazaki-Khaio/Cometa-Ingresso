import { useState } from "react";

export default function CampoPerfilEvento(props: any){
  const [perfil, setPerfil] = useState("");

  const handlePerfilChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerfil(event.target.value);

  return(
    <div className="flex flex-col gap-4">
      <label htmlFor="perfil">Perfil</label>
      <select
        value={perfil}
        onChange={handlePerfilChange}
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
      
      
        placeholder="Insira o perfil do evento" 
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
        >
        <option value="" disabled>
          Selecione o perfil
        </option>
        
        <option value="GRATIS">Gratis</option>
        <option value="MEIA">Meia</option>
        <option value="INTEIRA">Inteira</option>
      </select>
    </div>
  );
}



/*
import { useState } from "react";

export default function CampoSetorEvento(props: any) {
  const [setor, setSetor] = useState("");

  const handleSetorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSetor(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="setor">Setor</label>
      <select
        value={setor}
        onChange={handleSetorChange}
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
      >
        <option value="" disabled>
          Selecione o setor
        </option>
        <option value="VIP">VIP</option>
        <option value="Backstage">Backstage</option>
        <option value="Camarote">Camarote</option>
      </select>
    </div>
  );
}

*/


/*
import { useState } from "react";

export default function CampoPerfilEvento(props: any){

  return(
    <div className="flex flex-col gap-4">
      <label htmlFor="perfil">Perfil</label>
      <input 
        placeholder="Insira o perfil do evento" 
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
      />
    </div>
  )
}

*/
}