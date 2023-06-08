import PerfilCampoCep from "./PerfilCampoCep";
import PerfilCampoCpf from "./PerfilCampoCpf";
import PerfilCampoEmail from "./PerfilCampoEmail";
import PerfilCampoNome from "./PerfilCampoNome";
import PerfilCampoRua from "./PerfilCampoRua";
import PerfilCampoTelefone from "./PerfilCampoTelefone";
import PerfilComplementoCasa from "./PerfilComplementoCasa";
import PerfilNumeroCasa from "./PerfilNumeroCasa";
import BotaoSalvarPerfil from "./botaoSalvarPerfil";
import { FormEventHandler, useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";

export default function Perfil(){
  const [id_usuario, setIdUsuario] = useState("");

  useEffect(() => {
    async function getUserId() {
      const user = await getSession();
      const userId = user?.user.id;
      setIdUsuario(userId);
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
            const resUsuario = await fetch(`/api/usuario?id=${form.id}`, {
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


    return(
        
        <div className="grid grid-cols-8 p-4 m-12">
            <div className="col-start-2 col-span-2 flex itens-center">
                <form onSubmit={handleSubmit}>
                    <PerfilCampoNome/>
                    <PerfilCampoEmail/>
                    <PerfilCampoCpf/>
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
            </div>
            
        )
}