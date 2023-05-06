import Botao from "./Botao";
/*import CampoCpf from "./CampoCpf";
import CampoEmail from "./CampoEmail";
import CampoSenha from "./CampoSenha";
import RadioButton from "./RadioButton";*/

export default function CadastroEvento() {
    return(
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <CampoNomeEvento/>
            <CampoDesc/>
            <CampoLocal/>
            <Botao href="/cadastro" NomeBotao="Cadastro"/>
        </div>
    )
}