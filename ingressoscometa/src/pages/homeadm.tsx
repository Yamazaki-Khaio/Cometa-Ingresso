import Layout from "@/components/layout"
import AdmLogado  from "@/components/AdmLogado/AdmLogado"
import LayoutAdm from "@/components/AdmLogado/LayoutAdm"


export default function homeadm(){

    return (
        <div>
            <LayoutAdm pagina={<AdmLogado/>} exibirBotao={false} exibirBotao2={false} exibirBotao3={false} exibirBotao4={true} />
        </div>       
    )
}

