import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BotaoCarrinho from "./BotaoCarrinho";
import BotaoIngressos from "./BotaoIngressos";
import BotaoEventos from "./BotaoEventos";
import BotaoPerfil from "./BotaoPerfil";

export default function CabecalhoCliente(props: { isBotaoOcultoLogin?: boolean,  isBotaoOcultoCadastro?: boolean, isBotaoOcultoEvento?: boolean}) {
    const { data: session } = useSession()
    const route = useRouter()
    return(
        <div className="flex items-center justify-between p-8 w-screen h-32 bg-white">
            <div className="flex items-center gap-4">
                <a href="/">
                    <img src="/cometa2.png" alt="Logo" width="200" height="200"/>
                </a>
                <h2 className="font-bold text-xl">Olá {session?.user?.name}</h2>  
            </div>
            <div className="flex gap-6">
                <BotaoCarrinho/>
                <BotaoIngressos/>
                <BotaoEventos/>
                <a href="/perfil"> <BotaoPerfil />
                </a>
            </div>    
        </div>
    )
}
