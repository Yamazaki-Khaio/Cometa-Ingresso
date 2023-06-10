import Layout from "@/components/CabecalhoCliente/layoutCliente";
import { signOut,useSession } from "next-auth/react";
import { json } from "stream/consumers";
import ClienteLogado from "@/components/ClienteLogado/ClienteLogado";
import PerfilPromoter from "@/components/PerfilPromoter/TelaPerfilPromoter";
import CabecalhoPromoter from "@/components/CabecalhoPromoter/CabecalhoPromoter";
import NaoUtorizado from "@/components/naoAutorizado";


export default function Home(){

    const { data: session } = useSession()
    if(session){
        const tipo = Number(session?.user.tipo)
        switch(tipo){
            case 1:{
                return(
                    <div> 
                        <Layout pagina={<ClienteLogado/>}/>
                    </div>
                )
            }
            
            case 2:{
                return(
                    <div>
                        <CabecalhoPromoter/>
                    </div>
                )
            }

            default:
                return(
                    <div>
                        <Layout pagina={<NaoUtorizado/>} />
                    </div>
                )
        }
    }else{
        return(
            <div>
                <Layout pagina={<NaoUtorizado/>} />
            </div>
        )
    }
    

}