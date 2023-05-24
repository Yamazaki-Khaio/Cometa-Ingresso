import Layout from "@/components/layout"
import CampoEmailEsqueciSenha from "@/components/CadastroUsuario/CampoEmailEsqueciSenha"

export default function esqueciSenha(){
    return (

            <Layout pagina={<CampoEmailEsqueciSenha/>} exibirBotao={true} exibirBotao2={false}/>
   
    )
}
