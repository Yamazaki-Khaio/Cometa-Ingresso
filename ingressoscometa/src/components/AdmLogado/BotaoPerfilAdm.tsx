
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function BotaoMenuAdm(props: any) {
    return (   
        <div className="flex flex-col gap-4">
            <Link href= {props.Pagina}>
                <div className="flex flex-row justify-start items-start bg-white  hover:bg-slate-200 text-teal-700 font-bold py-2 px-16 rounded ">
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    {props.NomeBotao}

                </div>
            </Link>
        </div>
    )
}
