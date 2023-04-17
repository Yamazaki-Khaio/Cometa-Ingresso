import Link from "next/link"

export default function Botao(props: {href: string, NomeBotao: string}){

    return(
        <div>
            <Link href={props.href}>
                    <button className="button-36" role="button">{props.NomeBotao}</button>
            </Link>
        </div>
        
    )
}