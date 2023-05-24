import BotaoCompartilhar from "./BotaoCompartilhar";
import BotaoImpressora from "./BotaoImpressora";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMapPin, faTicketAlt, faUser, faChartPie } from "@fortawesome/free-solid-svg-icons";
import CampoHoraEData from "./CampoHoraEData";
import CampoIngresso from "./CampoIngresso";
import CampoLocal from "./CampoLocal";
import CampoPerfilDoIngresso from "./CampoPerfilDoIngresso";
import CampoSetor from "./CampoSetor";

export default function DivisoriaQrCode() {
  const handleImprimir = () => {
    window.print();
  };

  return (
    
    <div
      className="flex items-center justify-center w-4/5 h-screen bg-white mx-auto relative"
      style={{ height: "55vh", marginTop: "-65vh" }}
    >
      <div className="absolute right-0 bottom-0 flex justify-between gap-5">
        <BotaoCompartilhar />
        <BotaoImpressora onClick={handleImprimir} />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2/3 bg-black w-px"></div>
      <span className="absolute text-black font-bold left-20 top-1/2 transform -translate-y-1/2 pl-5">Imagem aqui</span>
      <ul className="absolute text-black top-1/2 right-20 transform -translate-y-1/2 pr-20">
        <CampoHoraEData />
        <CampoLocal />
        <CampoIngresso/>
        <CampoPerfilDoIngresso/>
        <CampoSetor/>
      </ul>
    </div>
  );
}
