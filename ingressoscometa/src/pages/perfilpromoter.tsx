import Layout from "@/components/CabecalhoPromoter/LayoutPromoter";
import PerfilPromoter from "@/components/PerfilPromoter/TelaPerfilPromoter";

export default function perfilPromoter(){
    return (
        <div>
            <Layout pagina={<PerfilPromoter/>} exibirBotao={true} exibirBotao2={false} exibirBotao3={false}/>
        </div>
    );
}