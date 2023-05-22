
import CampoCpf from "./CampoCpf";
import CampoSenha from "./CampoSenha";
import RadioButton from "./RadioButton";
import BotaoEntrar from "./BotaoEntrar.1";
import CampoEsqueciSenha from "./CampoEsqueciSenha";
import Message from "./Mensagem";
import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import { ok } from "assert";
import { useRouter } from 'next/router';


export default function Login() {
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");

    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                cpf: cpf,
                password: senha,
                redirect: false
            });

            if (res && res.ok) {
                router.replace("/home");
            } else {
                setMensagemErro("CPF ou senha inválida");
            }
        } catch (error) {
            console.error("Erro ao realizar o login:", error);
            setMensagemErro("Ocorreu um erro ao realizar o login");
        }
    };


    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit}>
                <CampoCpf value={cpf} onChange={(e:any) => setCpf(e.target.value)} />
                <CampoSenha value={senha} onChange={(e:any) => setSenha(e.target.value)} />
                <CampoEsqueciSenha />
                <RadioButton />
                <div className="flex justify-center w-full">
                    <BotaoEntrar />
                </div>
                {mensagemErro && <Message mensagem={mensagemErro} />}
            </form>
        </div>
    );
}
