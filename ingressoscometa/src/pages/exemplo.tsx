import Botao from "@/components/botao"
import Bloco from "@/components/bloco"
import Layout from "@/components/layout"

export default function Exemplo(){
    const a = 100;
    return(
        <Layout titulo="Cometa ingressos">
            <div>
                <Bloco Propriedades = {"Um número: "+a}/>
                <Bloco Propriedades = "Passando outra propriedade"/>
            </div>
        </Layout>
    )
        
}