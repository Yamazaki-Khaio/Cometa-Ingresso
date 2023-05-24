import Layout from "@/components/CabecalhoCliente/layoutCliente";
import Perfil from "@/components/PerfilCliente/TelaPerfil";

export default function perfil(){
    return(
        <div>
            <Layout pagina={<Perfil/>} exibirBotao={false} exibirBotao2={false} exibirBotao3={false}/>
        </div>
    )
}