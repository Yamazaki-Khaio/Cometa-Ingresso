import Botao from "./Botao";
import CampoDescricaoEvento from "./CampoDescricaoEvento";
import CampoNomeEvento from "./CampoNomeEvento";
import CampoLocal from "./CampoLocal";

export default function CadastroEvento() {
    return(
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <CampoNomeEvento/>
            <CampoDescricaoEvento/>
            <CampoLocal/>
            <Botao href="/cadastro_evento" NomeBotao="Novo Evento"/>
        </div>
    )
}