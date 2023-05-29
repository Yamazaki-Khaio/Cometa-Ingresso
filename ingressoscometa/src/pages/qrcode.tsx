import Layout from "@/components/CabecalhoCliente/layoutCliente";
import BlocoGeralQrCode from "@/components/QRCode/BlocoGeralQrCode";

export default function qrcode(){
    return(
        <div>
            <Layout/>
            <BlocoGeralQrCode/>
        </div>
    )
}