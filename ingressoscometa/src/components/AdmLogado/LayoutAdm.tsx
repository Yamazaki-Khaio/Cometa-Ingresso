import CabecalhoAdm from "./CabecalhoAdm"
import ListaEventosAdm from "./ListaEventosAdm"

export default function LayoutAdm(props: any) {
    return (
        <div>
            <CabecalhoAdm />
            <div className="flex justify-end bg-gray-100">
                <ListaEventosAdm />
            </div>
            
        </div>

    )
}