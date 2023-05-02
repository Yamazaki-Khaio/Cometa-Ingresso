import Botao from "./Botao";

export default function Cabecalho(props: any){
    return(
        <div className="flex items-center justify-between p-8 w-screen h-32 bg-teal-300">
            <div className="flex items-center gap-4">
                <img src="/cometa2.png" alt="Logo" width="200" height="200"/>
                <h2>Compre seus ingressos aqui!</h2>  
            </div>
        
            <div className="flex gap-4">
                <Botao href="/login" NomeBotao="Login"/>
                <Botao href="/cadastro" NomeBotao="Cadastro"/>
            </div>
        </div>
    )
}