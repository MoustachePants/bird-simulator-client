import "./ContextMenuProperty.css";

import useIcon from "../../src/hooks/useIcon.jsx";
import { APIURL } from "../../config.js";

const ContextMenuProperty = (props) => {
  const icon = useIcon(props.icon);
  const property = props.property;

  const menuSendCommand = (event) => {
    event.preventDefault();

    const tailNum = props.tailnum;
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
    <div className="context-menu-property" onClick={menuSendCommand}>
      <p>{property}</p>
    </div>
  );
};

export default ContextMenuProperty;
