import Cabecalho from "@/components/cabecalho"
import Botao from "@/components/botao"

export default function Home(){
   
    return (
        <div>
            <div>
                <Cabecalho Propriedades="Inicio"/>
            </div>
            <div>
                <Botao href="api/hello" NomeBotao="Teste API"/>
                <Botao href="/exemplo" NomeBotao="Teste Cabecalhos"/>
            </div>
        </div>       
    )
}