
export default function Bloco(props: {Propriedades: string}){

    return(
        <header>
            <div>
                <h1>{props.Propriedades}</h1>
            </div>
        </header>
    )
}