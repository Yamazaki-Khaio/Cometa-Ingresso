import { useState } from "react";

export default function CampoDataEvento(props: any) {

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="data">Data</label>
      <input
        type="date"
        name="data"
        id="data"
        placeholder="  /  /  "
        required
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
      />
    </div>
  );
}