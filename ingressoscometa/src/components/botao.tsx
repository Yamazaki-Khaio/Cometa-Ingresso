import Link from "next/link"

export default function Botao(props: {href: string, NomeBotao: string }){
    return(
        <div>
            <Link href={props.href}>
                    <button className={`
                    w-64 h-12
                     bg-teal-900 
                     text-white 
                     text-24 
                     rounded-xl`}  role="button">
                        {props.NomeBotao}
                    </button>
            </Link>
        </div>
        
    )
}