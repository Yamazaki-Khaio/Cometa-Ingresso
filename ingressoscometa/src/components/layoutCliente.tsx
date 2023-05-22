import CabecalhoCliente from "./CabecalhoCliente"

export default function Layout(props: any){
    return(
        <div className="flex flex-col justify-between h-screen bg-gray-100">
            <CabecalhoCliente/> 
                {props.pagina}
        </div>
    )
}