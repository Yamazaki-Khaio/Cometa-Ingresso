export default function BotaoEntrar(){
    //Alternativa para construção do componente
    /*return(<div>
        <button action='onValidate'>
            Entrar
        </button>
        <Script>
            onValidate(){
            }
        </Script>
        </div>);*/
    return(
        <div>
            <input type='submit' value='Entrar' />
        </div>
    );
}