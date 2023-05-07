import Layout from "@/components/Layout"
import CampoEmailEsqueciSenha from "@/components/CampoEmailEsqueciSenha"

export default function esqueciSenha(){
    return (

            <Layout pagina={<CampoEmailEsqueciSenha/>} exibirBotao={true} exibirBotao2={false}/>
   
    )
}
