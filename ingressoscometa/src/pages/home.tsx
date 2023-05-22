import Layout from "@/components/layoutCliente";
import { signOut,useSession } from "next-auth/react";
import { json } from "stream/consumers";
import Sessao from "@/components/sessao";
export default function Home(){
    const { data: session } = useSession()
    return(
        <div>
            <Layout pagina={<Sessao/>} />
            
        </div>
    )
}