import HomeAdm from "@/components/AdmLogado/HomeAdm"
import LayoutAdm from "@/components/AdmLogado/LayoutAdm"
import RelatoriosAdm from "@/components/AdmLogado/RelatoriosAdm"

export default function relatoriosadm(props: any) {
    
    return (
        <div>
            <LayoutAdm pagina={<RelatoriosAdm/>} />
        </div>       
    )
}
