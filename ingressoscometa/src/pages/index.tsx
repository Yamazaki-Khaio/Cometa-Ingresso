import Layout from "@/components/layout"


export default function Home(){
   
    return (
        <div>
            <Layout exibirBotao={true} exibirBotao2={true} exibirBotao3={false} pagina={<Home/>} />
        </div>       
    )
}