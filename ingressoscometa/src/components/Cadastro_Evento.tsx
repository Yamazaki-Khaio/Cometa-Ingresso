import BotaoSubmitEvento from "./BotaoSubmitEvento";
import CampoDescricaoEvento from "./CampoDescricaoEvento";
import CampoNomeEvento from "./CampoNomeEvento";
import CampoLocal from "./CampoLocal";
import CampoDataEvento from "./CampoDataEvento";
import CampoHorarioEvento from "./CampoHorarioEvento";
import CampoPerfilEvento from "./CampoPerfilEvento";
import CampoSetorEvento from "./CampoSetorEvento";
import { FormEventHandler, useState } from "react";
import Evento from "./Evento";
import { Input } from "postcss";

export default function CadastroEvento() {
  const [formData, setFormData] = useState({
    nome: "",
    desc: "",
    local: "",
    data: "",
    horario: "",
    perfil: "",
    setor: "",
  });

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("/api/evento", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      console.log(res.status);
      console.log(json);
      console.log(formData);
    } catch (err) {}
  };

  return (
    <div className="flex flex-col justify-center items-center p-12 bg-gray-100">
      <form onSubmit={handleSubmit}>
        <CampoNomeEvento
          required
          value={formData.nome}
          onChange={(e) => {
            handleFormEdit(e, "nome");
          }}
        />
        <CampoDescricaoEvento
          required
          value={formData.desc}
          onChange={(e) => {
            handleFormEdit(e, "desc");
          }}
        />
        <CampoLocal
          required
          value={formData.local}
          onChange={(e) => {
            handleFormEdit(e, "local");
          }}
        />
        <CampoPerfilEvento
          required
          value={formData.perfil}
          onChange={(e) => {
            handleFormEdit(e, "perfil");
          }}
        />
        <CampoSetorEvento
          required
          value={formData.setor}
          onChange={(e) => {
            handleFormEdit(e, "setor");
          }}
        />
        <div className="flex flex-row gap-4">
          <CampoDataEvento
            required
            value={formData.data}
            onChange={(e) => {
              handleFormEdit(e, "data");
            }}
          />
          <CampoHorarioEvento
            required
            value={formData.horario}
            onChange={(e) => {
              handleFormEdit(e, "horario");
            }}
          />
        </div>
        <BotaoSubmitEvento />
      </form>
    </div>
  );
}
