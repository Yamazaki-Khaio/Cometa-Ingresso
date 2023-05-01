import Botao from "./Botao";
import CampoSenha from "./CampoSenha";

export default function Login() {
    return(
        <div>
            <Botao href="/login" NomeBotao="Login"/>
            <CampoSenha/>
        </div>
    )
}