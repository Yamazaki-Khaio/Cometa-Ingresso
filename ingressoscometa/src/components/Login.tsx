
import CampoCpf from "./CampoCpf";
import CampoSenha from "./CampoSenha";
import RadioButton from "./RadioButton";
import { signIn } from "next-auth/react";

export default function Login() {
    return(
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <CampoCpf/>
            <CampoSenha/>
            <RadioButton/>
            
            <button  className={`
                    w-64 h-12
                     bg-teal-900 
                     text-white 
                     text-24 
                    rounded-xl`}  role="button" onClick={() => {signIn("credentials",{cpf:"11111111111",password:"123",callbackUrl: "/home" })}}>
                        Login
                    </button>
        </div>
    )
}