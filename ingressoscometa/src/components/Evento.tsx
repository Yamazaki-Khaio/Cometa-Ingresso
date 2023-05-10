export default function Evento(props:any) {
    return (
        <div className="bg-red-700">
            <img src={props.Image}/>
            <p>{props.Nome}</p>
            <p>Data: {props.Data}</p>
            <p>A partir das: {props.Hora}</p>
            <p>{props.Local}</p>

        </div>
    )}