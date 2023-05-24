import Link from 'next/link';

export default function Notificacao(props:any){

   

    return(
        //notificacoes deve ser um array do tipo iNotificacao 
        <div>
            <div>
                
                {props.notificacoes.map(link => <Link className='flex w-614 h-27 left-72 top-75  font-poppins font-medium text-base leading-27 text-blac border-b border-gray-600 hover:text-purple-400' href={link.href}><br/>{link.descricao}<br/></Link> )}
            
            </div>
        </div>
    )
}