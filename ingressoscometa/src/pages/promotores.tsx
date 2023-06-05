import LayoutAdm from "@/components/AdmLogado/LayoutAdm"
import TelaPromotores from "@/components/AdmLogado/TelaPromotores"

export default function homeadm(){

    return (
        <div>
            <LayoutAdm pagina={<TelaPromotores/>} />
        </div>       
    )
}