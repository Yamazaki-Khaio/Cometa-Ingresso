import Layout from "@/components/CabecalhoCadastro/layout"
import HomeNaoLogin  from "@/components/Index/HomeNaoLogin"


export default function Home(){
   
    return (
        <div>
            <Layout pagina={<HomeNaoLogin/>} exibirBotao={true} exibirBotao2={true} exibirBotao3={false} exibirBotao4={false} />
        </div>       
    )
}