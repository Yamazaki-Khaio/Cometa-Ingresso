import { useState } from "react";

export default function CampoHorarioEvento(props: any) {
  const [horario, setHorario] = useState("");

  const handleHorarioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Remove qualquer caractere não numérico da entrada
    const inputHorario = event.target.value.replace(/\D/g, "");

    // Formata a entrada como HH:MM
    let formattedHorario = "";
    if (inputHorario.length >= 2) {
      formattedHorario = `${inputHorario.slice(0, 2)}:${inputHorario.slice(2, 4)}`;
    } else {
      formattedHorario = inputHorario;
    }

    // Define o estado do horário formatado
    setHorario(formattedHorario);
  };

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="horario">Horário</label>
      <input
        type="text"
        placeholder="00:00"
        value={horario}
        onChange={handleHorarioChange}
        maxLength={5} // Limita o comprimento máximo da entrada
        className="border w-24 border-gray-400 rounded-md p-2 mb-8"
      />
    </div>
  );
}
