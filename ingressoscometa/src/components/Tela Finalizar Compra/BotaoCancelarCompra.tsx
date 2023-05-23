export default function BotaoCancelarCompra(){

    return(
        <div>
            <input type="cancelar" value="            Cancelar" className={`
                    flex flex-col items-center justify-center
                     w-25 h-12  // diminuindo o comprimento do botão
                     bg-gray-400 
                     text-black 
                     text-24 
                     rounded-3xl  // aumentando o valor do border-radius
                     transition-all duration-300  // adicionando um efeito de transição
                     hover:white-800  // adicionando uma cor de fundo quando o botão é hoverado
                     active:white-700  // adicionando uma cor de fundo quando o botão é clicado
                `} />
                
         
        </div>
    )

}