import Botao from "./Botao";
import CampoCpf from "./CampoCpf";
import CampoEmail from "./CampoEmail";
import CampoSenha from "./CampoSenha";
import RadioButton from "./RadioButton";
import Endereco from "./Endereco";
import NomeCompleto from "./CampoNomeCompleto";

export default function Cadastro() {
    return(
        <div className="flex flex-col justify-center items-center bg-gray-100 p-12">
            <NomeCompleto/>
            <CampoCpf/>
            <CampoEmail/>
            <CampoSenha/>
            <RadioButton/>
            <Endereco/>
            <Botao href="/cadastro" NomeBotao="Cadastro"/>
        </div>
    )
}