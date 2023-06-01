import LayoutAdm from "@/components/AdmLogado/LayoutAdm"
import HomeAdm from "@/components/AdmLogado/HomeAdm"

export default function homeadm(){

    return (
        <div>
            <LayoutAdm pagina={<HomeAdm/>} />
        </div>       
    )
}

