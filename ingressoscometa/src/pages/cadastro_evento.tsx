import Layout from "@/components/layout";
import CadastroEvento from "@/components/CadastroEvento/Cadastro_Evento";

export default function cadastro(){
    return(
        <div>
            <Layout pagina={<CadastroEvento/>} exibirBotao={true} exibirBotao2={true} exibirBotao3={false}/>
        </div>
    )
}