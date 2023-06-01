import BotaoSubmitEvento from "./BotaoSubmitEvento";
import CampoDescricaoEvento from "./CampoDescricaoEvento";
import CampoNomeEvento from "./CampoNomeEvento";
import CampoDataEvento from "./CampoDataEvento";
import { FormEventHandler, useState } from "react";
import CampoLocalEvento from "./CampoLocalEvento";
import CampoEnvioImagem from "./CampoEnviarImagem";
import CampoSetoresEvento from "./CampoSetoresEvento";
import CampoPrecoVi from "./CampoPrecoVip";
import CampoPrecoVip from "./CampoPrecoVip";
import CampoSetorEvento from "./CampoSetorEvento";



interface FormData {
  nome: string,
  descricao: string,
  localEvento: string,
  dataEvento: string,
  horarioEvento: string,
  imagem : {
    type: string,
    data: number[]
  } | undefined
  setor: string
  }


export default function CadastroEvento() {

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    descricao: "",
    localEvento: "",
    dataEvento: "",
    horarioEvento: "",
    imagem: undefined,
    setor: "N"
  });

  const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) =>{
    try{
      e.preventDefault()
      formData.nome = (document.getElementById('nome') as HTMLInputElement)?.value;
      formData.descricao = (document.getElementById('descricao') as HTMLInputElement)?.value;
      formData.localEvento = (document.getElementById('localEvento') as HTMLInputElement)?.value;
      formData.dataEvento = (document.getElementById('data') as HTMLInputElement)?.value;
      formData.setor = (document.getElementById('setor') as HTMLInputElement)?.value;
      
      const res = await fetch('/api/evento', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(formData)


      })
      if(res.ok){
        window.location.replace("cadastro_evento")
      }else{
        const data = await res.json()
        console.log(data)
      }
    }catch(err){
      console.log(err)
    }
  }


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (file: { type: string; data: number[] } | undefined) => {
    setFormData((prevData) => ({
      ...prevData,
      imagem: file
    }));
  };
  


return(
        <div className="flex flex-col justify-center items-center p-12 bg-gray-100">
            <form onSubmit={handleSubmit}>
            <CampoNomeEvento value={formData.nome} onChange={handleInputChange} name="nome"/>
            <CampoDescricaoEvento value={formData.descricao} onChange={handleInputChange} name="descricao"/>
            <CampoLocalEvento value={formData.localEvento} onChange={handleInputChange} name="localEvento"/>
            <CampoDataEvento value={formData.dataEvento} onChange={handleInputChange} name="dataEvento"/>
            <h2>Setores</h2>
            <CampoSetorEvento value={formData.setor} onChange={handleInputChange} name="setor"/>
            <CampoEnvioImagem  onChange={handleFileChange} name="imagem"/>
            <BotaoSubmitEvento/>
            </form>
        </div>
    )
}