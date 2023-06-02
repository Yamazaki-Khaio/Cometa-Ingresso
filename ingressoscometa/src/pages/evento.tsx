
import PaginaEvento from "@/components/Evento/PaginaEvento";
import Layout from "@/components/CabecalhoCadastro/layout";

export default function evento(props: any){
    return(
        <div>
            <Layout pagina={<PaginaEvento id={props.id}/>} exibirBotao={false} exibirBotao2={true} exibirBotao3={true}/>
        </div>
    )
}