import BotaoSubmitEvento from "./BotaoSubmitEvento";
import CampoDescricaoEvento from "./CampoDescricaoEvento";
import CampoNomeEvento from "./CampoNomeEvento";
import CampoDataEvento from "./CampoDataEvento";
import CampoHorarioEvento from "./CampoHorarioEvento";
import { FormEventHandler, useState } from "react";
import CampoLocalEvento from "./CampoLocalEvento";
import CampoEnvioImagem from "./CampoEnviarImagem";
import CampoSetorEvento from "./CampoSetorEvento";

interface FormData {
  nome: string,
  descricao: string,
  localEvento: string,
  dataEvento: string,
  horarioEvento: string,
  imagem : any
}

export default function CadastroEvento() {

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    descricao: "",
    localEvento: "",
    dataEvento: "2000-01-01",
    horarioEvento: "",
    imagem: ""
  });

  const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) =>{
    try{
      e.preventDefault()
      formData.nome = document.getElementById('nome').value
      formData.descricao = document.getElementById('descricao').value
      formData.localEvento = document.getElementById('localEvento').value
      formData.dataEvento = document.getElementById("data").value
      try{
        const reader = new FileReader();
        const file = document.querySelector("input[type=file]").files[0];
        reader.addEventListener(
          "load",
          () => {
            formData.imagem = reader.result;
          },
          false
        );
        reader.readAsDataURL(file)
        
        console.log(formData.imagem);
       
      } catch (error) {
        console.error("Erro ao salvar imagem:", error);

        // Lógica adicional para lidar com erros no envio dos dados
      }

    const res = await fetch('/api/evento', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(formData),
    })
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(formData) //Testando se os valores estão passando
        console.log(data)
        window.location.replace("/home");
    });
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

return(
        <div className="flex flex-col justify-center items-center p-12 bg-gray-100">
            <form onSubmit={handleSubmit}>
            <CampoNomeEvento value={formData.nome} onChange={handleInputChange} name="nome"/>
            <CampoDescricaoEvento value={formData.descricao} onChange={handleInputChange} name="descricao"/>
            <CampoLocalEvento value={formData.localEvento} onChange={handleInputChange} name="localEvento"/>
            <CampoDataEvento value={formData.dataEvento} onChange={handleInputChange} name="dataEvento"/>
            <CampoEnvioImagem onChange={handleInputChange} name="arquivo"/>
            <BotaoSubmitEvento/>
            </form>
        </div>
    )
}