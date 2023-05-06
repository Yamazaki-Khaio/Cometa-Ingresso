import Layout from "@/components/Layout";
import Cadastro from "@/components/Cadastro";

export default function cadastro(){
    return(
        <div>
            <Layout pagina={<Cadastro/>} exibirBotao={true} exibirBotao2={false}/>
        </div>
    )
}