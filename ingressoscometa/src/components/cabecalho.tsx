import styles from '@/styles/Estiloso.module.css'

export default function Cabecalho(props: {Propriedades: string}){

    return(
        <header className= {styles.cabecalho}>
            <div>
                <h1> Cometa Ingressos - {props.Propriedades}</h1>
            </div>
        </header>
    )


}