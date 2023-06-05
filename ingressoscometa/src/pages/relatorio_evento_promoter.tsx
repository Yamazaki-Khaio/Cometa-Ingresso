import Relatorio_evento from "@/components/RelatorioEventosPromoter/RelatorioEvento";
import Layout from "@/components/CabecalhoPromoter/LayoutPromoter";

export default function cadastro(){
    return(
        <div>
            <Layout pagina={<Relatorio_evento/>}/>
        </div>
    )
}