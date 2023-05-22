import { deflate } from "zlib";
import PerfilCampoCep from "./PerfilCampoCep";
import PerfilCampoCpf from "./PerfilCampoCpf";
import PerfilCampoEmail from "./PerfilCampoEmail";
import PerfilCampoNome from "./PerfilCampoNome";
import PerfilCampoRua from "./PerfilCampoRua";
import PerfilCampoTelefone from "./PerfilCampoTelefone";
import PerfilComplementoCasa from "./PerfilComplementoCasa";
import PerfilNumeroCasa from "./PerfilNumeroCasa";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";

export default function Perfil(){


    return(
        <div className="grid grid-cols-8">
            <div className="col-start-2 col-span-5 flex justify-start items-start">
                <form>
                <label className="text-xl">Bem Vindo(a), Fulano!</label>
                    <PerfilCampoNome/>
                    <PerfilCampoEmail/>
                    <PerfilCampoCpf/>
                    <PerfilCampoTelefone/>
                    <PerfilCampoCep/>
                    <PerfilCampoRua/>
                    <PerfilNumeroCasa/>
                    <PerfilComplementoCasa/>
                </form>
            </div>
            </div>
        )
    }


