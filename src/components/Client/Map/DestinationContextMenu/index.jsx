import "./DestinationContextMenu.css";

import { Popup, useMap } from "react-leaflet";
import useIcon from "../../../../hooks/useIcon.jsx";
import useBirdCommand from "../../../../hooks/useBirdCommand.jsx";
import TitledFrame from "../../../UI/TitledFrame/index.jsx";

const DestinationContextMenu = (props) => {
  const sendCommand = useBirdCommand();
  const icon = useIcon("position");
  const map = useMap();
  const bird = props.selectedBird;

  const menuSendCommandHandler = (event) => {
    event.preventDefault();
    const tailNum = bird.tailNum;
    const destination = props.position;
    sendCommand({ tailNum, destination });
    map.closePopup();
  };

  return (
    // <Popup position={props.position} closeButton={false} offset={[95, 110]}>
    //   <div className="popup-container">
    //     <header className="popup-header">
    //       <img className="context-menu-icon" src={icon} />
    //       <h4>Set Destination</h4>
    //     </header>
    //
    //     {props.birds.map((bird) => (
    //       <button
    //         className="context-menu-bird-destination-button"
    //         onClick={menuSendCommandHandler}
    //         data-tailnum={bird.tailNum}
    //         key={bird.tailNum}
    //       >
    //         {bird.name} #{bird.tailNum}
    //       </button>
    //     ))}
    //   </div>
    // </Popup>
    <Popup position={props.position} closeButton={false} offset={[95, 110]}>
      <div className="popup-container">
        {bird && (
          <TitledFrame title={bird.name + " #" + bird.tailNum}>
            <button
              className="context-menu-bird-destination-button"
              onClick={menuSendCommandHandler}
            >
              <header className="popup-header">
                <img className="context-menu-icon" src={icon} />
                <h4>Set Destination</h4>
              </header>
            </button>
          </TitledFrame>
        )}
        {!bird && (
          <TitledFrame title={"No bird selected!"}>
            <button className="context-menu-bird-destination-button button-unusable">
              <header className="popup-header">
                <img className="context-menu-icon" src={icon} />
                <h4>Set Destination</h4>
              </header>
            </button>
          </TitledFrame>
        )}
      </div>
    </Popup>
  );
};

export default DestinationContextMenu;
