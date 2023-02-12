import { APIURL } from "../../../config.js";

import { Popup } from "react-leaflet";

const MapMenu = (props) => {
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
  };

  return (
    <Popup position={props.position}>
      FlyTo -
      {props.birds.map((bird) => (
        <button
          key={bird.tailNum}
          onClick={menuSendCommand}
          data-tailnum={bird.tailNum}
        >
          {bird.tailNum}
        </button>
      ))}
    </Popup>
  );
};

export default MapMenu;
