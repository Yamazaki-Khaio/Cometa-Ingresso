import Botao from '../CabecalhoCadastro/botao';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function EventoPromoter(props: any) {
    
    return (
        <div className="flex justify-center items-center flex-row'">
            
            <div className="ml-12 mt-2">
                <p className="font-bold  text-3xl">{props.Nome}</p>
                <p className="font-sans text-4sm">Local: {props.Local}</p>
                <p className="font-sans text-4sm">Email: {props.Email}</p>
                <p className="font-sans text-4sm">CPF: {props.Cpf}</p>
                <p className="font-sans text-4sm">Telefone: {props.Telefone}</p>
                <p className="font-sans text-4sm">Status: {props.Status}</p>
            
                <div className="absolute top-3/4 left-1/4">
                    <Botao href="/liberar" NomeBotao="Liberar Acesso" />
                </div>
                <div className="absolute top-3/4 left-2/4">
                    <Botao href="/suspender" NomeBotao="Suspender" />
                </div>
                <div className="absolute top-3/4 left-3/4">
                    <Botao href="/remover" NomeBotao="Remover" />
                </div>
            </div>
        </div>


    )
}