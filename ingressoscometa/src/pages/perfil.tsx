import Layout from "@/components/layoutCliente";
import Perfil from "@/components/TelaPerfil";

export default function perfil(){
    return(
        <div>
            <Layout pagina={<Perfil/>} exibirBotao={false} exibirBotao2={false} exibirBotao3={false}/>
        </div>
    )
}