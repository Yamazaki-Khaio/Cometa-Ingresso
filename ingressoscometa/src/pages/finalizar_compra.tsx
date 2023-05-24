import Layout from "@/components/CabecalhoCadastro/layout";
import FinalizarCompra from "@/components/FinalizarCompra/FinalizarCompra";

export default function finalizar(){
    return(
        <div>
            <Layout pagina={<FinalizarCompra/>} exibirBotao={false} exibirBotao2={false} exibirBotao3={false}/>
        </div>
    )
}