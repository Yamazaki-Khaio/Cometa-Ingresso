import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BotaoEventos from "../CabecalhoCliente/BotaoEventos";
import BotaoPerfil from "../CabecalhoCliente/BotaoPerfil";
import BotaoRelatorios from "./BotaoRelatorio";

export default function CabecalhoPromoter(props: { isBotaoOcultoLogin?: boolean,  isBotaoOcultoCadastro?: boolean, isBotaoOcultoEvento?: boolean}) {
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
                <BotaoEventos/>
                <BotaoRelatorios/>
                <a href="/perfil"> <BotaoPerfil />
                </a>
            </div>    
        </div>
    )
}