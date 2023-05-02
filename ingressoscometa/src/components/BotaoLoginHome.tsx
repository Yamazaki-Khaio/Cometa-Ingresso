import Botao from "./Botao";

export default function BotaoLoginHome(props: any){
    return(
            <div className="flex gap-4">
                <Botao href="/login" NomeBotao="Login"/>
            </div>
    )
}