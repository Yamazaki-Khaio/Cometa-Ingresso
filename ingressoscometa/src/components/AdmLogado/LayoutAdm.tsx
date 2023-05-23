import Rodape from "../Rodape"
import CabecalhoAdm from "./cabecalhoAdm"

export default function LayoutAdm(props: any){
    return(
        <div className="flex flex-col justify-between h-screen bg-gray-100">
            <CabecalhoAdm isBotaoOcultoLogin={props.exibirBotao === false} isBotaoOcultoCadastro={props.exibirBotao2 === false} isBotaoOcultoEvento = {props.exibirBotao3 === false} isBotaoOcultoBackup = {props.exibirBotao4 === false} /> 
                {props.pagina}
            <Rodape/>
        </div>
    )
}