import Botao from "./Botao";
import Logo from "ingressoscometa/public/Logo.svg";


export default function Cabecalho(props: any){
    return(
        <div className="flex items-center justify-between p-8 w-screen h-32 bg-teal-300">
            <div>
                <h2>Compre seus ingressos aqui!</h2>  
            </div>
        
            <div className="flex gap-4">
                <Botao href="/login" NomeBotao="Login"/>
                <Botao href="/cadastro" NomeBotao="Cadastro"/>
            </div>
        </div>
        
    )
}