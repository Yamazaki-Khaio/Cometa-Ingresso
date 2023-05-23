import Layout from "@/components/layout";
import FinalizarCompra from "@/components/Tela Finalizar Compra/FinalizarCompra";

export default function finalizar(){
    return(
        <div>
            <Layout pagina={<FinalizarCompra/>} exibirBotao={false} exibirBotao2={false} exibirBotao3={false}/>
        </div>
    )
}