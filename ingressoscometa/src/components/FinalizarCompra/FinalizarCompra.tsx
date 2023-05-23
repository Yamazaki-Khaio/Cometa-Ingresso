import BotaoConfirmarCompra from "./BotaoConfirmarCompra"
import BotaoCancelarCompra from "./BotaoCancelarCompra"

export default function FinalizarCompra() {
    return (
        <div class="flex h-screen justify-center items-center flex-col">
    <div
        class=" w-1/4 h-80 bg-[url('http://localhost:3000/')] bg-gray-100 bg-center">
        <div class="w-full h-full flex items-center justify-center bg-white backdrop-brightness-50">
            <div class="absolute bottom-0 left-30 ...">
            <BotaoConfirmarCompra/>
            </div>
            <div class="absolute bottom-0 right-0 ...">
            <BotaoCancelarCompra/>
            </div>
                
                <div class="absolute left-30 top-10 text-xl ...">Deseja confirmar a compra?</div>
        </div>
    </div>
</div>
    )
}