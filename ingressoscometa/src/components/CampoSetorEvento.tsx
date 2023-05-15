import { useState } from "react";

export default function CampoSetorEvento(props: any) {
  const [setor, setSetor] = useState('');

  function handleSetorChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSetor(event.target.value);
  }

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="setor">Setor</label>
      <select
        name="setor"
        id="setor"
        required
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
        value={setor}
        onChange={handleSetorChange}
      >
        <option value="">Selecione o setor</option>
        <option value="VIP">VIP</option>
        <option value="Backstage">Backstage</option>
        <option value="Camarote">Camarote</option>
      </select>
    </div>
  );
}
