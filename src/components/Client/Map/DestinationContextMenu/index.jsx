import "./DestinationContextMenu.css";

import { APIURL } from "../../../../../config.js";
import { Popup, useMap } from "react-leaflet";
import useIcon from "../../../../hooks/useIcon.jsx";

const ContextMenu = (props) => {
  const icon = useIcon("position");
  const map = useMap();

  const menuSendCommand = (event) => {
    event.preventDefault();

    const tailNum = event.target.dataset.tailnum;
    const requiredPosition = props.position;

    const commandBody = {
      tailNum: Number(tailNum),
      requiredPosition,
    };

    const sendCommand = async () => {
      await fetch(APIURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commandBody),
      });
    };

    sendCommand();
    map.closePopup();
  };

  return (
    <Popup position={props.position} closeButton={false} offset={[95, 120]}>
      <div className="popup-container">
        <header className="popup-header">
          <img className="context-menu-icon" src={icon} />
          <h4>Set Destination</h4>
        </header>

        {props.birds.map((bird) => (
          <button
            className="context-menu-bird-destination-button"
            onClick={menuSendCommand}
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

export default ContextMenu;
