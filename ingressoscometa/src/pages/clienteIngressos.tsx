import Sessao from "@/components/sessao";
import IngressosAdquiridos from '../components/IngressosCliente/IngressosAdquiridos';
import Layout from "@/components/CabecalhoCliente/layoutCliente";


export default function clienteIngressos(){
    return(
        <div>
            <Layout pagina={<IngressosAdquiridos/>} />
        </div>
    )
}