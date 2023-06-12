import Image from 'next/image'
import Botao from '../CabecalhoCadastro/botao';
import QuantitySelector from './QuantidadeSeletor';
import ChoiceBox from './ChoiceBoxSetor';
export default function EventoLogado(props: any) {

    //lógica aqui rotas, ajustar


    return (
        <div className="relative flex flex-wrap justify-start content-center h-60 w-screen mx-12 border bg-white  rounded-3xl">
            <div className="w-92 h-44 ml-8">
                <Image width={720} height={480} src={props.Image} alt={props.Nome} className=" w-full h-full object-fit rounded-3xl " />
            </div>
            <div className="ml-12">
                <p className="font-bold  text-3xl">{props.Nome}</p>
                <p className="font-sans text-4sm">Local: {props.Local}</p>
                <p className="font-sans text-4sm">Data: {props.Data}</p>
                <p className="font-sans text-4sm">A partir das: {props.Hora}</p>
                
            </div>
            <div className="absolute bottom-8 right-8">
                <ChoiceBox/>
                <Botao href="/carrinho" NomeBotao="Adicionar ao carrinho" />
                <QuantitySelector/>
                <p className="font-sans  right-20 text-4sm">Quantidade disponível: {props.quant_ingresso}</p>
            </div>
        </div>
    )
}