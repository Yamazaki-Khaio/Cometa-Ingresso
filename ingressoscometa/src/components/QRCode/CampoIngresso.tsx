import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";

export default function CampoIngresso() {

  return (
      <div>
      <ul>
        <li className="flex items-center mb-4">
          <FontAwesomeIcon icon={faTicketAlt} className="mr-2" /> Ingresso
        </li>
      </ul>
    </div>
  );
}
