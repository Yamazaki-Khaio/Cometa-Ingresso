import React, { useState } from "react";

type Setor = "VIP" | "Backstage" | "Camarote" | "Nenhum";

export default function ChoiceBox() {
  const [selectedSetor, setSelectedSetor] = useState<Setor | undefined>(undefined);

  const handleSetorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as Setor;
    setSelectedSetor(value);
  };

  return (
    <div>
      <select
        id="setor"
        value={selectedSetor || ""}
        onChange={handleSetorChange}
        className="border w-50 border-gray-400 rounded-md p-2 mb-8"
      >
        <option value="" disabled>
          Escolha seu setor
        </option>
        <option value="VIP">VIP</option>
        <option value="Backstage">Backstage</option>
        <option value="Camarote">Camarote</option>
        <option value="Nenhum">Nenhum</option>
      </select>
    </div>
  );
}
