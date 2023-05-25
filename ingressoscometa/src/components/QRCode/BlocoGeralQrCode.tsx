import BotaoCompartilhar from "./BotaoCompartilhar";
import BotaoImpressora from "./BotaoImpressora";
import DivisoriaImagem from "./BlocoImagem";
import DivisoriaDadosIngresso from "./BlocoDadosIngresso";

export default function BlocoGeralQrCode() {
  const handleImprimir = () => {
    window.print();
  };

  return (
    <div
      className="flex items-center justify-center w-4/5 h-screen bg-white mx-auto relative"
      style={{ height: "55vh", marginTop: "-65vh", flexDirection: "row-reverse" }}
    >
      <div className="absolute right-0 bottom-0 flex justify-between gap-5">
        <BotaoCompartilhar />
        <BotaoImpressora onClick={handleImprimir} />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2/3 bg-black w-px"></div>
      <div className="absolute inset-0 z-15 left-3/4 top-40">
        <DivisoriaDadosIngresso />
      </div>
      <div className="absolute inset-0 z-10 right-1/2 top-40">
        <DivisoriaImagem />
      </div>
    </div>
  );
}
