import BotaoCompartilhar from "./BotaoCompartilhar";
import BotaoImpressora from "./BotaoImpressora";

export default function DivisoriaQrCode() {
  return (
    <div
      className="flex items-center justify-center w-4/5 h-screen bg-white mx-auto relative"
      style={{ height: "55vh", marginTop: "-65vh" }}
    >
      <div className="absolute right-0 bottom-0 flex justify-between gap-5">
        <BotaoCompartilhar />
        <BotaoImpressora />
      </div>
    </div>
  );
}
