import Botao from "./Botao";
import CampoSenha from "./CampoSenha";

export default function Login() {
    return(
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <CampoSenha/>
            <Botao href="/login" NomeBotao="Login"/>
        </div>
    )
}