export default function BlocoQrCode() {
  return (
    <div
      className="flex items-center justify-center w-60 h-60 bg-gray-200 mx-auto relative"
      style={{
        right: "41.5vh",
        marginTop: "-15vh", // Metade negativa da altura para centralizar verticalmente
        color: "black", // Definir a cor do texto como preto
        fontWeight: "bold", // Definir o peso da fonte como negrito
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        QRCODE aq
      </span>
    </div>
  );
}
