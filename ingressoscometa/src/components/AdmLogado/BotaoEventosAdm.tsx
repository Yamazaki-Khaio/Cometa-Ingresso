
import Link from "next/link";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function BotaoEventosAdm(props: any) {
    return (   
        <div className="flex flex-row gap-4">
            <Link href= {props.Pagina}>
                <div className="content-center flex-row  items-start bg-white  hover:bg-slate-200 hover:text-teal-700 font-bold py-2 px-16 rounded ">
                    <FontAwesomeIcon icon={faHome} className="mr-2" /> 
                    {props.NomeBotao}
                </div>
            </Link>
        </div>
    )
}
