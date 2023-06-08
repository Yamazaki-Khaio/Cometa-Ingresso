import LayoutAdm from "@/components/AdmLogado/LayoutAdm"
import PerfilAdm from "@/components/PerfilAdm/PerfilAdm"

export default function perfiladm(props:any){

    return(
        <LayoutAdm pagina={<PerfilAdm/>}/>
    )       
}