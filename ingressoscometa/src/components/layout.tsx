import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import Botao from "./botao"

export default function Layout(props: { titulo: any; children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }){
    return(
        <div>
            <div>
                <h1>{props.titulo ?? 'Mais um exemplo'}</h1>
                <Botao href="/" NomeBotao="Voltar"/>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )

}