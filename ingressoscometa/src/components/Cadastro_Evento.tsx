import Botao from "./Botao";
import CampoDescricaoEvento from "./CampoDescricaoEvento";
import CampoNomeEvento from "./CampoNomeEvento";
import CampoLocal from "./CampoLocal";
import CampoDataEvento from "./CampoDataEvento";
import CampoHorarioEvento from "./CampoHorarioEvento";
import CampoPerfilEvento from "./CampoPerfilEvento";
import CampoSetorEvento from "./CampoSetorEvento";

export default function CadastroEvento() {
    return(
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <CampoNomeEvento/>
            <CampoDescricaoEvento/>
            <CampoLocal/>
            <CampoDataEvento/>
            <CampoHorarioEvento/>
            <CampoPerfilEvento/>
            <CampoSetorEvento/>
            <Botao href="/novoEvento" NomeBotao="Novo Evento"/>
        </div>
    )
}