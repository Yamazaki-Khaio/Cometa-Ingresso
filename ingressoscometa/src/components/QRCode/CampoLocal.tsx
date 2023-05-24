import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

export default function CampoLocal() {

  return (
      <div>
      <ul>
        <li className="flex items-center mb-4">
          <FontAwesomeIcon icon={faMapPin} className="mr-2" /> Local
        </li>
      </ul>
    </div>
  );
}