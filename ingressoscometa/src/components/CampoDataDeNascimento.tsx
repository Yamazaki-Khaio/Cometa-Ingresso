import { useState } from "react";

export default function CampoDataDeNascimento(props: any) {
  const [dataEvento, setDataEvento] = useState(new Date());

  function handleDataEventoChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedDate = new Date(event.target.value);
    const formattedDate = selectedDate.toISOString().split('T')[0];
    setDataEvento(formattedDate);
  }

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="data">Data de Nascimento</label>
      <input
        type="date"
        name="data"
        id="data"
        placeholder="  /  /  "
        required
        className="border w-32 border-gray-400 rounded-md p-2 mb-8"
        onChange={handleDataEventoChange}
      />
    </div>
  );
}
