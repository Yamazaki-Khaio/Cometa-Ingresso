
import CampoCpf from "./CampoCpf";
import CampoSenha from "./CampoSenha";
import RadioButton from "./RadioButton";
import BotaoEntrar from "./BotaoEntrar.1";
import CampoEsqueciSenha from "./CampoEsqueciSenha";
import Message from "./Mensagem";
import { FormEventHandler, useState } from "react";
import { signIn} from "next-auth/react";
import { ok } from "assert";
import { useRouter } from 'next/router';


export default function Login() {

    
    const hanldeSubmit:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
       const res =  signIn("credentials",{cpf:document.getElementById('cpf')?.value,password:document.getElementById('senha')?.value,redirect:false})
       
       res.then((resultado) => {
        
        if(resultado.ok){
           
            window.location.replace("/home")
       }else{
        const menssage = document.getElementById('menssage')
        if(menssage){
            menssage.style.display = 'block'
        }
       
       } })
       
      
    
    }
    return(
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <form onSubmit={hanldeSubmit}>
                <CampoCpf/>
                <CampoSenha/>
                <CampoEsqueciSenha/>
                <RadioButton/>
                <BotaoEntrar/>
                <Message mensagem="cpf ou senha inválida"/>
            </form>

           

            
        </div>
    )
}