import CabecalhoCliente from "./CabecalhoCliente"

export default function Layout(props: any){
    return(
        <div className="flex flex-col justify-between h-screen bg-gray-100">
            <CabecalhoCliente isBotaoOcultoLogin={props.exibirBotao === false} isBotaoOcultoCadastro={props.exibirBotao2 === false} isBotaoOcultoEvento = {props.exibirBotao3 === false}/> 
                {props.pagina}
        </div>
    )
}