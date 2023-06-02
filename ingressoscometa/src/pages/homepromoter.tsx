import Layout from "@/components/CabecalhoPromoter/LayoutPromoter"
import HomePromoter from "@/components/PromoterLogado/HomePromoter"

export default function homepromoter(){

    return (
        <div>
            <Layout pagina={<HomePromoter/>} />
        </div>       
    )
}