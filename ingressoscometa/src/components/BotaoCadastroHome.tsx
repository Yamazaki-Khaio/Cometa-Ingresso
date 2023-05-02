import Botao from "./Botao";

export default function BotaoCadastroHome(props: any){
    return(
            <div className="flex gap-4">
                <Botao href="/cadastro" NomeBotao="Cadastro"/>
            </div>
    )
}