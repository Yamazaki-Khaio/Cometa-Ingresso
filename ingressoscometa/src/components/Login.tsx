import Botao from "./Botao";
import CampoCpf from "./CampoCpf";
import CampoSenha from "./CampoSenha";

export default function Login() {
    return(
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <CampoCpf/>
            <CampoSenha/>
            <Botao href="/login" NomeBotao="Login"/>
        </div>
    )
}