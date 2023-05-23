import BotaoConfirmarCompra from "./BotaoConfirmarCompra"
import BotaoCancelarCompra from "./BotaoCancelarCompra"

export default function FinalizarCompra() {
    return (
        <div className="flex flex-col justify-center items-center p-12 bg-gray-100">
            <form>
                <h2>Deseja confirmar a compra?</h2>  
                <BotaoConfirmarCompra/>
                <BotaoCancelarCompra/>
            </form>
        </div>
    )
}