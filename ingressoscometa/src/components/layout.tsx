import Cabecalho from "./Cabecalho"
import Rodope from "./Rodope"

export default function Layout(props: any){
    return(
        
        <div className="flex flex-col justify-between h-screen">
            <Cabecalho/> 
            {props.pagina}
            <Rodope/>
        </div>
    )

}