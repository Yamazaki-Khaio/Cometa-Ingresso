
import Cadastro from "@/components/Cadastro";
import Layout from "@/components/layout";

export default function cadastro(){
    return(
        <div>
            <Layout pagina={<Cadastro/>} exibirBotao={true} exibirBotao2={false} exibirBotao3={false} exibirBotao4={false}/>
        </div>
    )
}