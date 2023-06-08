import PerfilCampoCep from "./PerfilCampoCep";
import PerfilCampoCpf from "./PerfilCampoCpf";
import PerfilCampoEmail from "./PerfilCampoEmail";
import PerfilCampoNome from "./PerfilCampoNome";
import PerfilCampoRua from "./PerfilCampoRua";
import PerfilCampoTelefone from "./PerfilCampoTelefone";
import PerfilComplementoCasa from "./PerfilComplementoCasa";
import PerfilNumeroCasa from "./PerfilNumeroCasa";
import BotaoSalvarPerfil from "./botaoSalvarPerfil";
import BlocoCartaoDeCredito from "./BlocoCartaoCredito";
import { FormEventHandler, useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import axios from "axios";
interface FormData {
  nome: string,
  cpf: string,
  senha: string,
  email: string,
  telefone: string,
  tipo:string
}

export default function Perfil(){
  const [id_usuario, setIdUsuario] = useState("");
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    cpf: "",
    senha: "",
    email: "",
    telefone: "",
    tipo:""
  });
  


  useEffect(() => {
    
    async function getUserId() {
      const user = await getSession();
      const userId = user?.user.id;
      setIdUsuario(userId);
      console.log(userId)
      try {
        const response = await axios.get(`/api/usuario?id=${userId}`);
        const usuarioData = response.data;
        updateForm("nome" , usuarioData[0].nome )
        console.log(formData.nome)
        console.log(usuarioData[0].nome)
        
        // Do something with the event data
    } catch (error) {
        console.log(error);
    }
    }
    getUserId();
  }, []);


    
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        
        try {   

            const formUsuario = {
                nome: document.getElementById('nome').value,
                id: id_usuario
              };
            console.log(`/api/usuario?id=${formUsuario.id}`)
            const resUsuario = await fetch(`/api/usuario?id=${formUsuario.id}`, {
                method: 'PUT',
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(formUsuario)
              });

            const formTelefone = {
                telefone: document.getElementById('telefone').value,
                id: id_usuario
              };

            const resTelefone = await fetch(`/api/telefone?id_usuario=${formTelefone.id}`, {
                method: 'PUT',
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(formTelefone)
              });
            /*const resEndereco = await fetch(`/api/endereco?id_usuario=${form.id}`, {
                method: 'PUT',
                headers: {
                  "Content-Type": "application/json"
                },
              });*/

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
  const updateForm = (attribute: any, value: any) => {
    console.log(value)
    setFormData((prevData) => ({
      ...prevData,
      [attribute]: value
    }));
  };



    return(
        
        <div className="grid grid-cols-8 p-4">
            <div className="col-start-2 col-span-2 flex justify-start items-start">
                <form onSubmit={handleSubmit}>
                    <PerfilCampoNome value={formData.nome} onChange={handleInputChange} name="nome" />
                    <PerfilCampoEmail/>
                    <PerfilCampoCpf value={formData.cpf} onChange={handleInputChange} name="cpf"/>
                    <PerfilCampoTelefone/>
                    <PerfilCampoCep/>
                    <PerfilCampoRua/>
                    <PerfilNumeroCasa/>
                    <PerfilComplementoCasa/>
                    <BotaoSalvarPerfil/>
                </form>
            </div>
            <div className="col-start-3 col-span-4 flex justify-center items-start">

            </div>
            <div>
            <BlocoCartaoDeCredito/>
            </div>
            </div>
            
        )
}