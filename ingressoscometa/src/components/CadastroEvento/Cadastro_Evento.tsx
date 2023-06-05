import BotaoSubmitEvento from "./BotaoSubmitEvento";
import CampoDescricaoEvento from "./CampoDescricaoEvento";
import CampoNomeEvento from "./CampoNomeEvento";
import CampoDataEvento from "./CampoDataEvento";
import { FormEventHandler, cloneElement, useState } from "react";
import CampoLocalEvento from "./CampoLocalEvento";
import CampoEnvioImagem from "./CampoEnviarImagem";
import CampoSetoresEvento from "./SetorEvento/CampoSetoresEvento";
import CampoPrecoVi from "./PrecoEvento/CampoPreco";
import CampoPreco from "./PrecoEvento/CampoPreco";
import CampoSetorVip from "./SetorEvento/CampoSetorVip";
import CampoSetorBackstage from "./SetorEvento/CampoSetorBackstage";
import CampoSetorCamarote from "./SetorEvento/CampoSetorCamarote";
import CampoSetorNenhum from "./SetorEvento/CampoSetorNenhum";
import CampoHorarioEvento from "./CampoHorarioEvento";
import CampoQntIngressoVip from "./QntEvento/CampoQntIngresso";
import CampoQntIngressoBackstage from "./QntEvento/CampoQntIngressoBack";
import CampoQntIngressoCamarote from "./QntEvento/CampoQntIngressoCam";
import CampoQntIngressoNenhum from "./QntEvento/CampoQntIngressoNenhum";
import CampoPrecoVip from "./PrecoEvento/CampoPreco";
import CampoPrecoCamarote from "./PrecoEvento/CampoPrecoCam";
import CampoPrecoBackstage from "./PrecoEvento/CampoPrecoBack";
import CampoPrecoNenhum from "./PrecoEvento/CampoPrecoNenhum";
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

  setor_vip: string
  setor_camarote: string
  setor_backstage: string
  setor_nenhum: string

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

    setor_vip: "",
    setor_camarote: "",
    setor_backstage: "",
    setor_nenhum: "",

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

      formData.setor_vip = (document.getElementById('setor_vip') as HTMLInputElement)?.value;
      formData.qnt_vip = (document.getElementById('qnt_vip') as HTMLInputElement)?.value;
      formData.preco_vip = (document.getElementById('preco_vip') as HTMLInputElement)?.value;

      formData.setor_backstage = (document.getElementById('setor_backstage') as HTMLInputElement)?.value;
      formData.qnt_backstage = (document.getElementById('qnt_back') as HTMLInputElement)?.value;
      formData.preco_backstage = (document.getElementById('preco_back') as HTMLInputElement)?.value;

      formData.setor_camarote = (document.getElementById('setor_camarote') as HTMLInputElement)?.value;
      formData.qnt_camarote = (document.getElementById('qnt_cam') as HTMLInputElement)?.value;
      formData.preco_camarote = (document.getElementById('preco_cam') as HTMLInputElement)?.value;

      formData.setor_nenhum = (document.getElementById('setor_nenhum') as HTMLInputElement)?.value;
      formData.qnt_nenhum = (document.getElementById('qnt_nenhum') as HTMLInputElement)?.value;
      formData.preco_nenhum = (document.getElementById('preco_nenhum') as HTMLInputElement)?.value;



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
            <div style={{wordSpacing: '150px'}} >Setores Preço Quantidade</div>
            <div style={{display: "flex"}}>
            <CampoSetorVip value={formData.setor_vip} onChange={handleInputChange} name="setor_vip"/>
            <CampoPrecoVip value={formData.preco_vip} onChange={handleInputChange} name="preco_vip"/>
            <CampoQntIngressoVip value={formData.qnt_vip} onChange={handleInputChange} name="qnt_vip"/>
            </div>
            <div className="" style={{display: "flex"}}>
            <CampoSetorCamarote value={formData.setor_camarote} onChange={handleInputChange} name="setor_camarote"/> 
            <CampoPrecoCamarote value={formData.preco_camarote} onChange={handleInputChange} name="preco_camarote"/>
            <CampoQntIngressoCamarote value={formData.qnt_camarote} onChange={handleInputChange} name="qnt_camarote"/>
            </div>
            <div className="" style={{display: "flex"}}>
            <CampoSetorBackstage value={formData.setor_backstage} onChange={handleInputChange} name="setor_backstage"/> 
            <CampoPrecoBackstage value={formData.preco_backstage} onChange={handleInputChange} name="preco_backstage"/>
            <CampoQntIngressoBackstage value={formData.qnt_backstage} onChange={handleInputChange} name="qnt_backstage"/>
            </div>
            <div className="" style={{display: "flex"}}>
            <CampoSetorNenhum value={formData.setor_nenhum} onChange={handleInputChange} name="setor_nenhum"/> 
            <CampoPrecoNenhum value={formData.preco_nenhum} onChange={handleInputChange} name="preco_nenhum"/>
            <CampoQntIngressoNenhum value={formData.qnt_nenhum} onChange={handleInputChange} name="qnt_nenhum"/>
            </div>
            <CampoEnvioImagem  onChange={handleFileChange} name="imagem"/>
            <BotaoSubmitEvento/>
            </form>
        </div>
    )
}