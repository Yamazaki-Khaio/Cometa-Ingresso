import Layout from "@/components/Layout"
import HomeNaoLogin  from "@/components/HomeNaoLogin"


export default function Home(){
   
    return (
        <div>
            <Layout pagina={<HomeNaoLogin/>} exibirBotao={true} exibirBotao2={true} exibirBotao3={false} />
        </div>       
    )
}