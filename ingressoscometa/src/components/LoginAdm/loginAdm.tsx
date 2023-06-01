import CampoCpf from "../CadastroUsuario/CampoCpf";
import CampoSenha from "../CadastroUsuario/CampoSenha";
import BotaoEntrar from "../CadastroUsuario/BotaoEntrar.1";
import CampoEsqueciSenha from "../CadastroUsuario/CampoEsqueciSenha";
import Message from "../CabecalhoCadastro/Mensagem";
import { FormEventHandler } from "react";
import { signIn } from "next-auth/react";

export default function loginAdm() {

const hanldeSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const menssage = document.getElementById('menssage');
    const cpf = document.getElementById('cpf');
    const senha = document.getElementById('senha');
    if (menssage?.style.display === 'block') {
        menssage.style.display = 'none';
        cpf.style.borderColor = '#808080';
        senha.style.borderColor = '#808080';
    }

    const res = signIn("credentials", { cpf: cpf?.value, password: senha?.value, redirect: false });

    res.then((resultado) => {
        if (resultado.ok) {
            window.location.replace("/home");
        } else {
            if (menssage) {
                menssage.style.display = 'block';
                cpf.style.borderColor = 'red';
                senha.style.borderColor = 'red';
            }
        }
    });
};

return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <form onSubmit={hanldeSubmit}>
            <CampoCpf />
            <CampoSenha />
            <div className="flex justify-center w-full">
                <BotaoEntrar />
            </div>
            <div className="flex justify-center w-full">
                <CampoEsqueciSenha/>
            </div>
            <Message mensagem="cpf ou senha inválida" />
        </form>
    </div>
);
}