import CabecalhoAdm from "./CabecalhoAdm"
import ListaEventosAdm from "./ListaEventosAdm"

export default function LayoutAdm(props: any) {
    return (
        <div>
            <CabecalhoAdm />
            {props.pagina}
            
        </div>

    )
}