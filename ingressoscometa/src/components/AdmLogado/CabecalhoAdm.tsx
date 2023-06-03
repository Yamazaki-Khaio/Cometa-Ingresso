import Link from "next/link"
import BotaoRelatorioAdm from "./BotaoRelatorioAdm"
import BotaoEventosAdm from "./BotaoEventosAdm"
import BotaoPerfilAdm from "./BotaoPerfilAdm"

export default function CabecalhoAdm(props: any) {
    
    return (
        <div className=" p-8 h-full fixed m-4 rounded-md bg-white shadow-2xl ">
            <div className="flex flex-col gap-4">
                <Link href="/">
                    <img src="/cometa2.png" alt="Logo" width="200" height="200" />
                </Link>
                <BotaoEventosAdm Pagina="/eventos" NomeBotao="Eventos" icone= "faHome"/>
                <BotaoRelatorioAdm Pagina="/relatoriosadm" NomeBotao="Relatórios" icone= "faHome"/>
                <BotaoPerfilAdm Pagina="/perfil" NomeBotao="Evento" icone= "faHome"/>

            </div>
            
        </div>
    )
}