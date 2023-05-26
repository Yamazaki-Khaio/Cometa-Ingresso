import Layout from "@/components/CabecalhoCadastro/layout"
import AdmLogado  from "@/components/AdmLogado/AdmLogado"
import LayoutAdm from "@/components/AdmLogado/LayoutAdm"


export default function homeadm(){

    return (
        <div>
            <LayoutAdm pagina={<AdmLogado/>} />
        </div>       
    )
}

