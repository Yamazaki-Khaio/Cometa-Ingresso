import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function BotaoDelete() {
  return (
    <div>
      <button
        className={`
          flex items-center
          bg-transparent
          text-black
          text-14 // Aumentando o tamanho do ícone
          rounded-2xs
          transition-all duration-300
          hover:text-green-600
          h-14 // Aumentando a altura do botão
        `}
      >
        <FontAwesomeIcon icon={faTrashCan} className="mr-2" />
        Excluir ingresso
      </button>
    </div>
  );
}