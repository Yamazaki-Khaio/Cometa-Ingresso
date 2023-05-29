import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import BotaoCarrinho from "../CabecalhoCliente/BotaoCarrinho"
import BotaoEventos from "../CabecalhoCliente/BotaoEventos"
import BotaoIngressos from "../CabecalhoCliente/BotaoIngressos"
import BotaoPerfil from "../CabecalhoCliente/BotaoPerfil"
import Botao from "../CabecalhoCadastro/botao"

export default function CabecalhoAdm(props: any) {
    const { data: session } = useSession()
    const route = useRouter()
    return (
        <div className="flex flex-shrink-0 justify-center p-8 w-1/6 h-full fixed bg-white ">
            <div className="flex flex-col gap-4">
                <a href="/">
                    <img src="/cometa2.png" alt="Logo" width="200" height="200" />
                </a>
                <h2 className="font-bold text-xl">Olá {session?.user?.name}</h2>
            </div>
            
        </div>
    )
}