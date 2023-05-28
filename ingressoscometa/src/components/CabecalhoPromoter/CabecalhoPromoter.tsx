import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BotaoEventos from "../CabecalhoCliente/BotaoEventos";
import BotaoPerfil from "../CabecalhoCliente/BotaoPerfil";
import BotaoRelatorios from "./BotaoRelatorio";

export default function CabecalhoPromoter(props: { isBotaoOcultoLogin?: boolean,  isBotaoOcultoCadastro?: boolean, isBotaoOcultoEvento?: boolean}) {
    const { data: session } = useSession()
    const route = useRouter()
    return(
        <div className="flex flex-shrink-0 justify-center p-8 w-1/6 h-full fixed bg-white ">
            <div className="flex flex-col gap-4">
                <a href="/">
                    <img src="/cometa2.png" alt="Logo" width="200" height="200"/>
                </a>
                <h2 className="font-bold text-xl">Olá {session?.user?.name}</h2>
                
                <div className="column gap-6">
                <BotaoEventos/>
                <BotaoRelatorios/>
                <a href="/perfilpromoter"> <BotaoPerfil />
                </a>
                </div>    
            </div>
            
        </div>
    )

}