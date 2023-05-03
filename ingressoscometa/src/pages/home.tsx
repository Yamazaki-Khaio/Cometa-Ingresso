import Layout from "@/components/layout";
import { signOut,useSession } from "next-auth/react";
import { json } from "stream/consumers";

export default function Home(){
    const { data: session } = useSession()
    return(
        <div>
            <button onClick={() => {signOut({ callbackUrl: 'http://localhost:3000/login' })}}>Sair</button>
            <Layout pagina={<h1>olá {session?.user?.name}, Bem vindo</h1> }/>
            
        </div>
    )
}