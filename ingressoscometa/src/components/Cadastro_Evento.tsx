import BotaoSubmitEvento from "./BotaoSubmitEvento";
import CampoDescricaoEvento from "./CampoDescricaoEvento";
import CampoNomeEvento from "./CampoNomeEvento";
import CampoDataEvento from "./CampoDataEvento";
import CampoHorarioEvento from "./CampoHorarioEvento";
import { FormEventHandler, useState } from "react";
import CampoLocalEvento from "./CampoLocalEvento";

interface FormData {
  nome: string,
  descricao: string,
  localEvento: string,
  dataEvento: string,
  horarioEvento: string
}

export default function CadastroEvento() {

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    descricao: "",
    localEvento: "",
    dataEvento: "2000-01-01",
    horarioEvento: ""
  });


  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('/api/evento', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      console.log(formData); // Testando se os valores estão passando
      console.log(data);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      // Lógica adicional para lidar com erros no envio dos dados
    }
  };
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center p-12 bg-gray-100">
      <form onSubmit={handleSubmit}>
        <CampoNomeEvento value={formData.nome} onChange={handleInputChange} name="nome" />
        <CampoDescricaoEvento value={formData.descricao} onChange={handleInputChange} name="descricao" />
        <CampoLocalEvento value={formData.localEvento} onChange={handleInputChange} name="localEvento" />
        <CampoDataEvento value={formData.dataEvento} onChange={handleInputChange} name="dataEvento" />
        <CampoHorarioEvento value={formData.horarioEvento} onChange={handleInputChange} name="horarioEvento" />
        <BotaoSubmitEvento />
      </form>
    </div>
  )
}