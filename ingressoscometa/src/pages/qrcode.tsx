import Layout from "@/components/CabecalhoCliente/layoutCliente";
import DivisoriaQrCode from "@/components/QRCode/DivisoriaQrCode";

export default function qrcode(){
    return(
        <div>
            <Layout/>
            <DivisoriaQrCode/>
        </div>
    )
}