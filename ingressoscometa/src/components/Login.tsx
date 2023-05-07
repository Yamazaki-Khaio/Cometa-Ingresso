
import CampoCpf from "./CampoCpf";
import CampoSenha from "./CampoSenha";
import RadioButton from "./RadioButton";
import BotaoEntrar from "./BotaoEntrar.1";
import EsqueciSenha from "./EsqueciSenha";
import { FormEventHandler, useState } from "react";
import { signIn} from "next-auth/react";
import { ok } from "assert";
import { useRouter } from 'next/router';


export default function Login() {

    
    const hanldeSubmit:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        console.log(document.getElementById('cpf')?.value)
       const res =  signIn("credentials",{cpf:document.getElementById('cpf')?.value,password:document.getElementById('senha')?.value,redirect:false})
       
       res.then((resultado) => {
        
        if(resultado.ok){
           
            window.location.replace("/home")
       } })
       
      
    
    }
    return(
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <form onSubmit={hanldeSubmit}>
                <CampoCpf/>
                <CampoSenha/>
                <EsqueciSenha/>
                <RadioButton/>
                <BotaoEntrar/>
            </form>

           

            
        </div>
    )
}