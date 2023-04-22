import styles from '@/styles/Estiloso.module.css'

export default function Bloco(props: {Propriedades: string}){

    return(
        <header className= {styles.cabecalho}>
            <div>
                <h1>{props.Propriedades}</h1>
            </div>
        </header>
    )
}