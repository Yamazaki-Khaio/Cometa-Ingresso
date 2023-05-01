import Botao from "./Botao";
import CampoLogin from "./CampoLogin";
import CampoSenha from "./CampoSenha";

export default function Login() {
    return(
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <CampoLogin/>
            <CampoSenha/>
            <Botao href="/login" NomeBotao="Login"/>
        </div>
    )
}