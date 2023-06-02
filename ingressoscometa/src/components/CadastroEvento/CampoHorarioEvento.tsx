import { useState } from "react";

export default function CampoHorarioEvento(props: any) {
  const [horario, setHorario] = useState("");

  const handleHorarioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHorario(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="horario">Horário</label>
      <input
        id = "horario"
        type="time"
        placeholder="00:00"
        value={horario}
        onChange={handleHorarioChange}
        className="border w-32 border-gray-400 rounded-md p-2 mb-8"
      />
    </div>
  );
}
