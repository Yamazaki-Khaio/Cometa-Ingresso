import Botao from "./Botao";

export default function BotaoNovoEvento(props: any){
    return(
            <div className="flex gap-4">
                <Botao href="/novo-evento" NomeBotao="Novo Evento"/>
            </div>
    )
}