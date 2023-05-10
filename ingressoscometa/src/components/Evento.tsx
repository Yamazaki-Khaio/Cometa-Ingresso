export default function Evento(props:any) {
    return (
        <div className="flex flex-col bg-zinc-300 h-64 w-80 border border-zinc-400 rounded-2xl">

            <div className="relative mx-auto rounded-2xl overflow-hidden">
                <img src={props.Image}/>
            </div>
            <div className="p-4">
                <p className="font-sans text-md">{props.Nome}</p>
                <p className="font-sans text-sm">Data: {props.Data}</p>
                <p className="font-sans text-sm">A partir das: {props.Hora}</p>
                <p className="font-sans text-sm">{props.Local}</p>
            </div>

        </div>
    )}