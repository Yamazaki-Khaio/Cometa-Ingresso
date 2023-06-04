import BotaoSubmitEvento from "./BotaoSubmitEvento";
import CampoDescricaoEvento from "./CampoDescricaoEvento";
import CampoNomeEvento from "./CampoNomeEvento";
import CampoDataEvento from "./CampoDataEvento";
import { FormEventHandler, useState } from "react";
import CampoLocalEvento from "./CampoLocalEvento";
import CampoEnvioImagem from "./CampoEnviarImagem";
import CampoSetoresEvento from "./SetorEvento/CampoSetoresEvento";
import CampoPrecoVi from "./CampoPrecoVip";
import CampoPrecoVip from "./CampoPrecoVip";
import CampoSetorVip from "./SetorEvento/CampoSetorVip";
import CampoSetorBackstage from "./SetorEvento/CampoSetorBackstage";
import CampoSetorCamarote from "./SetorEvento/CampoSetorCamarote";
import CampoSetorNenhum from "./SetorEvento/CampoSetorNenhum";
import CampoHorarioEvento from "./CampoHorarioEvento";
import CampoQntIngresso from "./SetorEvento/CampoQntIngresso";
import { FLOAT } from "sequelize";


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

  qnt_vip: string
  qnt_camarote: string
  qnt_backstage: string
  qnt_nenhum: string
  
  preco_vip: string
  preco_camarote: string
  preco_backstage: string
  preco_nenhum: string
  }


export default function CadastroEvento() {

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    descricao: "",
    localEvento: "",
    dataEvento: "",
    horarioEvento: "",
    imagem: undefined,
    setor: "",

    qnt_vip: "",
    qnt_camarote: "",
    qnt_backstage: "",
    qnt_nenhum: "",
    
    preco_vip: "",
    preco_camarote: "",
    preco_backstage: "",
    preco_nenhum: ""
  });

  const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) =>{
    try{
      e.preventDefault()
      formData.nome = (document.getElementById('nome') as HTMLInputElement)?.value;
      formData.descricao = (document.getElementById('descricao') as HTMLInputElement)?.value;
      formData.localEvento = (document.getElementById('localEvento') as HTMLInputElement)?.value;
      formData.horarioEvento = (document.getElementById('horarioEvento') as HTMLInputElement)?.value;
      formData.dataEvento = (document.getElementById('data') as HTMLInputElement)?.value;
      formData.setor = (document.getElementById('setor') as HTMLInputElement)?.value;
      formData.qnt_vip = (document.getElementById('qnt_vip') as HTMLInputElement)?.value;


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
            <CampoHorarioEvento value={formData.horarioEvento} onChange={handleInputChange} name="horarioEvento"/>
            <div style={{wordSpacing: '50px'}} >Setores Preço Quantidade</div>
            <div style={{display: "flex"}}>
            <CampoSetorVip/> 
            <CampoQntIngresso value={formData.qnt_vip} onChange={handleInputChange} name="qnt_vip"/>
            </div>
            <div className="" style={{display: "flex"}}>
            <CampoSetorCamarote/> 
            <CampoQntIngresso/>
            </div>
            <div className="" style={{display: "flex"}}>
            <CampoSetorBackstage value={formData.setor} onChange={handleInputChange} name="setor"/> 
            <CampoQntIngresso/>
            </div>
            <div className="" style={{display: "flex"}}>
            <CampoSetorNenhum/> 
            <CampoQntIngresso/>
            </div>
            <CampoEnvioImagem  onChange={handleFileChange} name="imagem"/>
            <BotaoSubmitEvento/>
            </form>
        </div>
    )
}