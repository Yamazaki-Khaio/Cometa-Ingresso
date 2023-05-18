
import Login from "@/components/Login";
import PaginaEvento from "@/components/PaginaEvento";
import Layout from "@/components/layout";

export default function evento(props: any){
    return(
        <div>
            <Layout pagina={<PaginaEvento Nome={props.Nome} />} exibirBotao={false} exibirBotao2={true} exibirBotao3={true}/>
        </div>
    )
}