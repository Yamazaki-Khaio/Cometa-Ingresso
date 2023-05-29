import BotaoSalvarCartao from "./botaoSalvarCartao";
import Campocvv from "./cartaoCvv";
import CampoNumeroCartao from "./cartaoNumero";
import CampoValidade from "./cartaoValidade";

export default function BlocoCartaoDeCredito() {
  return (
    <div
      className="flex flex-col items-center justify-center w-96 h-60 bg-teal-300 mx-auto relative"
      style={{
        marginTop: "-100vh", // Metade negativa da altura para centralizar verticalmente
        color: "black", // Definir a cor do texto como preto
        right: "23vh",
        fontWeight: "bold", // Definir o peso da fonte como negrito
        borderRadius: "30px", // Adicionar bordas levemente arredondadas
      }}
    >
      <CampoNumeroCartao
        style={{
          position: "absolute", // Posicionamento absoluto para ficar acima do bloco
          top: "-30px", // Ajustar a distância vertical
          fontSize: "24px", // Ajustar o tamanho da fonte
          letterSpacing: "2px", // Aumentar o espaçamento entre as letras
          fontWeight: "bold", // Definir o peso da fonte como negrito
          textTransform: "uppercase", // Converter o texto em letras maiúsculas
        }}
      />
      <Campocvv/>
      <CampoValidade/>
      <BotaoSalvarCartao/>
    </div>
  );
}
