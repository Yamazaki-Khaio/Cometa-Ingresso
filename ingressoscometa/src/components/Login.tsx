
import CampoCpf from "./CampoCpf";
import CampoSenha from "./CampoSenha";
import RadioButton from "./RadioButton";
import BotaoEntrar from "./BotaoEntrar.1";
import EsqueciSenha from "./EsqueciSenha";


export default function Login() {
    return(
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <CampoCpf/>
            <CampoSenha/>
            <RadioButton/>
            <BotaoEntrar cpf={'11111111111'} password={'123'}/>
            <EsqueciSenha/>
            
        </div>
    )
}