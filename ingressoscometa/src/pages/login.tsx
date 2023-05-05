import Layout from "@/components/Layout";
import Login from "@/components/Login";

export default function login(){
    return(
        <div>
            <Layout pagina={<Login/>} exibirBotao={false} exibirBotao2={true}/>
        </div>
    )
}