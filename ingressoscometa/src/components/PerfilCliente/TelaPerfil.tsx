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

export default function Perfil(){


    return(
        
        <div className="grid grid-cols-8 p-4">
            <div className="col-start-2 col-span-2 flex justify-start items-start">
                <form>
                    <PerfilCampoNome/>
                    <PerfilCampoEmail/>
                    <PerfilCampoCpf/>
                    <PerfilCampoTelefone/>
                    <PerfilCampoCep/>
                    <PerfilCampoRua/>
                    <PerfilNumeroCasa/>
                    <PerfilComplementoCasa/>
                </form>
                

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/4 bg-black w-px">
                </div>
            </div>
            <div className="col-start-3 col-span-4 flex justify-center items-start">
                
                <BotaoSalvarPerfil/>
            </div>
            <div>
            <BlocoCartaoDeCredito/>
            </div>
            </div>
            
        )
}