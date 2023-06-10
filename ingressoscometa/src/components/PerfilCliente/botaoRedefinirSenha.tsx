import Link from "next/link";

export default function BotaoRedefinirSenha(){

    return(
        <div>
            <Link href='/redefinir_nova_senha'>
            <input type="submit" value="Redefinir Senha" className={`
                     w-48 h-12  // diminuindo o comprimento do botão
                     bg-teal-900 
                     text-white 
                     text-24 
                     rounded-3xl  // aumentando o valor do border-radius
                     transition-all duration-300  // adicionando um efeito de transição
                     hover:bg-teal-800  // adicionando uma cor de fundo quando o botão é hoverado
                     active:bg-teal-700  // adicionando uma cor de fundo quando o botão é clicado
                `} />
                </Link>
         
        </div>
    )

}