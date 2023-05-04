import { signOut,useSession } from "next-auth/react";

export default function Sessao(){
    const { data: session } = useSession()
    return(
        <div>
            <button  className={`
                    w-64 h-12
                     bg-teal-900 
                     text-white 
                     text-24 
                    rounded-xl`}  role="button" 
                    onClick={() => {signOut({ callbackUrl: 'http://localhost:3000/login' })}} >Sair</button>
                    <h1>olá {session?.user?.name}, Bem vindo</h1>

        </div>
    )
}