export default function PaginaEvento(props: any){
    return(
        <div className="flex items-center content-center justify-between">
            <div className="h-128 ml-80 ">
                <img src="Evento-Corporativo.jpg" alt="Capa" className=" object-contain rounded-xl border border-black"/>
            </div>
            <div className="w-64 mr-80 text-lg font-bold">
                <p>Calourada de Fisica</p>
                <p>Data: 22/03</p>
                <p>Hora: 12:00</p>
                <p>Local: Prime</p>
                <p>Descrição: Preparaaaa que a Calourada de Física 2019.1
                    vem com tuuuudo! Vai logo salvando a data e
                    aproveitando pra comprar seu ingresso no escuro, num supeeeeer preço promocional!
                    Muitas novidades e a melhor galera pra você 
                    curtir a terceira edição da Calourada mais top 
                    da Bahia!
                </p>
            </div>
        </div>
    )
}