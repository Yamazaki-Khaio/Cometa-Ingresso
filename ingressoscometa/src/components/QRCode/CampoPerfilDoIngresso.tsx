import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function CampoPerfilDoIngresso() {

  return (
      <div>
      <ul>
        <li className="flex items-center mb-4">
          <FontAwesomeIcon icon={faUser} className="mr-2" /> Perfil do Ingresso
        </li>
      </ul>
    </div>
  );
}
