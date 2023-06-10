import Botao from '../CabecalhoCadastro/botao';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
export default function EventoPromoter(props: any) {
    function banirUsuario(id: string, acao: string) {
        const url = `https://exemplo-api-banimento.com/${acao}/${id}`;

        axios.post(url)
            .then(response => {
                // Verifique o status da resposta e faça o tratamento apropriado.
                if (response.status === 200) {
                    // A solicitação foi bem-sucedida.
                    console.log('Banimento realizado com sucesso!');
                } else {
                    // A solicitação falhou.
                    console.error('Falha ao realizar o banimento.');
                }
            })
            .catch(error => {
                // Trate erros de rede ou outras falhas na solicitação.
                console.error('Erro na solicitação:', error);
            });
        return undefined
    }

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
                    <button onClick={banirUsuario(props.Id, "liberar")} className='bg-teal-700 w-40 h-12 rounded-xl text-white text-md font black'>Liberar</button>
                </div>
                <div className="absolute top-3/4 left-2/4">
                    <button onClick={banirUsuario(props.Id, "banir")} className='bg-teal-700 w-40 h-12 rounded-xl text-white text-md font black'>Suspender</button>
                </div>
                <div className="absolute top-3/4 left-3/4">
                    <button onClick={banirUsuario(props.Id, "remover")} className='bg-teal-700 w-40 h-12 rounded-xl text-white text-md font black'>Remover</button>
                </div>
            </div>
        </div>


    )
}