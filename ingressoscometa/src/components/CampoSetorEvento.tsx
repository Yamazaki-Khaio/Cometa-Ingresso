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
        id="setorEvento"
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
