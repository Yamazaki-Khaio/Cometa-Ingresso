import Layout from "@/components/Layout"
import CampoEsqueciSenha from "@/components/CampoEsqueciSenha"

export default function esqueciSenha(){
    return (
        <div>
            <Layout pagina={<CampoEsqueciSenha/>} exibirBotao={true} exibirBotao2={false}/>
        </div>       
    )
}