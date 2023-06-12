import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BotaoCarrinho from "./BotaoCarrinho";
import BotaoIngressos from "./BotaoIngressos";
import BotaoEventos from "./BotaoEventos";
import BotaoPerfil from "./BotaoPerfil";

export default function CabecalhoCliente(props: { isBotaoOcultoLogin?: boolean, isBotaoOcultoCadastro?: boolean, isBotaoOcultoEvento?: boolean }) {
    const { data: session } = useSession()
    const route = useRouter()
    return (
        <div className="flex items-center justify-between p-8 w-screen h-40 bg-white">
            <div className="flex items-center gap-4">
                <a href="/">
                    <img src="/cometa2.png" alt="Logo" width="200" height="200" />
                </a>
                <h2 className="font-bold text-xl">Olá {session?.user?.name}</h2>
            </div>
            <div className="flex gap-6">
            
                <a href="/carrinho"> <BotaoCarrinho />
                </a>
                <a href="/clienteIngressos"><BotaoIngressos /></a>

                <BotaoEventos />
                <a href="/perfil"> <BotaoPerfil />
                <button className={`
                        w-40 h-12
                        bg-teal-900 
                        text-white 
                        text-24 
                        rounded-xl`} role="button"
                        onClick={() => { signOut({ callbackUrl: 'http://localhost:3000/login' }) }} >Sair</button>


                    


                </a>
            </div>
        </div>
    )
}
