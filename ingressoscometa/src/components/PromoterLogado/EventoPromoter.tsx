import Image from 'next/image'
import Botao from '../CabecalhoCadastro/botao';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function EventoPromoter(props: any) {
    const { imageSizeClass } = props;
    return (
        <div className="relative flex flex-wrap justify-start content-center h-60 w-4/5 ml-12 mr-12 border bg-white shadow-md rounded-3xl">
            <div className="w-92 h-44 ml-8">
                <Image width={720} height={480} src={props.Image} alt={props.Nome} className=" w-full h-full object-cover rounded-3xl " />
            </div>



            <div className="ml-12">
                <p className="font-bold  text-3xl">{props.Nome}</p>
                <p className="font-sans text-4sm">Local: {props.Local}</p>
                <p className="font-sans text-4sm">Data: {props.Data}</p>
                <p className="font-sans text-4sm">A partir das: {props.Hora}</p>
                <p className="font-sans text-4sm">{props.Descricao}</p>
            </div>
            <div className="absolute bottom-1/3 right-8">
                <Botao href="/carrinho" NomeBotao="Suspender" />
            </div>
            <div className="absolute bottom-5 right-8">
                <Botao href="/carrinho" NomeBotao="Cancelar" />
            </div>
            <div className="absolute bottom-3/4 right-8">
                < a href="/carrinho" className="btn btn-default">
                    <button
                    type="button"
                    className="btn btn-default"
                    >
                    <FontAwesomeIcon
                        icon={faPenToSquare}
                        size="lg" />
                    </button>
                </a>
            </div>
        </div>


    )
}