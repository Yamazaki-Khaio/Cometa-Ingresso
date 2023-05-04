import { signIn } from "next-auth/react";

export default function BotaoEntrar(props : any){
    const cpf = props.cpf;
    const senha = props.password;
    return(
        <div>
            <button  className={`
                    w-64 h-12
                     bg-teal-900 
                     text-white 
                     text-24 
                    rounded-xl`}  role="button" onClick={() => {signIn("credentials",{cpf:cpf,password:senha,callbackUrl: "/home" })}}>
                        Login
            </button>
        </div>
    )

}