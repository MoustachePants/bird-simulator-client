import "./DestinationContextMenu.css";

import { APIURL } from "../../../../../config.js";
import { Popup, useMap } from "react-leaflet";
import useIcon from "../../../../hooks/useIcon.jsx";
import useBirdCommand from "../../../../hooks/useBirdCommand.jsx";

const DestinationContextMenu = (props) => {
  const sendCommand = useBirdCommand();
  const icon = useIcon("position");
  const map = useMap();

  const menuSendCommandHandler = (event) => {
    event.preventDefault();
    const tailNum = event.target.dataset.tailnum;
    const destination = props.position;
    sendCommand({ tailNum, destination });
    map.closePopup();
  };

  return (
    <Popup position={props.position} closeButton={false} offset={[95, 110]}>
      <div className="popup-container">
        <header className="popup-header">
          <img className="context-menu-icon" src={icon} />
          <h4>Set Destination</h4>
        </header>

        {props.birds.map((bird) => (
          <button
            className="context-menu-bird-destination-button"
            onClick={menuSendCommandHandler}
            data-tailnum={bird.tailNum}
            key={bird.tailNum}
          >
            {bird.name} #{bird.tailNum}
          </button>
        ))}
      </div>
    </Popup>
  );
};

export default DestinationContextMenu;
