import Layout from "@/components/layout";
import CadastroEvento from "@/components/Cadastro_Evento";

export default function cadastro(){
    return(
        <div>
            <Layout pagina={<CadastroEvento/>} exibirBotao={true} exibirBotao2={false} exibirBotao3={false}/>
        </div>
    )
}