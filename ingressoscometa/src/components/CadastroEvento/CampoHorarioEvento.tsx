import { useState } from "react";

export default function CampoHorarioEvento(props: any) {
  const [horarioEvento, setHorarioEvento] = useState("");

  const handleHorarioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHorarioEvento(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="horarioEvento">Horário</label>
      <input
        id = "horarioEvento"
        type="time"
        placeholder="00:00"
        value={horarioEvento}
        onChange={handleHorarioChange}
        className="border w-128 border-gray-400 rounded-md p-2 mb-8"
      />
    </div>
  );
}
