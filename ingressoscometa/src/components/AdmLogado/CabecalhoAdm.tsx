import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import BotaoCarrinho from "../CabecalhoCliente/BotaoCarrinho"
import BotaoEventos from "../CabecalhoCliente/BotaoEventos"
import BotaoIngressos from "../CabecalhoCliente/BotaoIngressos"
import BotaoPerfil from "../CabecalhoCliente/BotaoPerfil"
import Botao from "../Cabecalho/botao"

export default function CabecalhoAdm(props: { isBotaoOcultoLogin?: boolean, isBotaoOcultoCadastro?: boolean, isBotaoOcultoEvento?: boolean, isBotaoOcultoBackup?: boolean }) {
    const { data: session } = useSession()
    const route = useRouter()
    return (
        <div className="flex items-center justify-between bg-opacity-2 backdrop-blur-lg p-8 w-screen h-32 bg-teal-300">
            <div className="flex items-center gap-4">
                <a href="/">
                    <img src="/cometa2.png" alt="Logo" width="200" height="200" />
                </a>
                <h2 className="font-bold text-xl">Olá {session?.user?.name}</h2>
            </div>
            <div className="flex gap-6">
                <Botao href="/backup" NomeBotao="Backup" oculto={props.isBotaoOcultoBackup} />
                <BotaoCarrinho />
                <BotaoIngressos />
                <BotaoEventos />
                <a href="/perfil"> <BotaoPerfil />
                </a>
            </div>
        </div>
    )
}