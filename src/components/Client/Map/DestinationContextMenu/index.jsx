import "./DestinationContextMenu.css";

import { Popup, useMap } from "react-leaflet";
import useIcon from "../../../../hooks/useIcon.jsx";
import useBirdCommand from "../../../../hooks/useBirdCommand.jsx";
import TitledFrame from "../../../UI/TitledFrame/index.jsx";

const DestinationContextMenu = (props) => {
  const sendCommand = useBirdCommand();
  const locationIcon = useIcon("position");
  const addLocationIcon = useIcon("add-location");
  const map = useMap();
  const bird = props.selectedBird;

  const menuSendDestinationCommandHandler = (event) => {
    event.preventDefault();
    const tailNum = bird.tailNum;
    const destination = props.position;
    sendCommand({ tailNum, destination });
    map.closePopup();
  };

  const menuSendRouteDestinationCommandHandler = (event) => {
    event.preventDefault();
    const tailNum = bird.tailNum;
    const routeDestination = props.position;
    sendCommand({ tailNum, routeDestination });
    map.closePopup();
  };

  return (
    <Popup position={props.position} closeButton={false} offset={[95, 110]}>
      <div className="popup-container">
        {bird && (
          <TitledFrame title={bird.name + " #" + bird.tailNum}>
            <button
              className="context-menu-bird-destination-button"
              onClick={menuSendDestinationCommandHandler}
            >
              <header className="popup-header">
                <img className="context-menu-icon" src={locationIcon} />
                <h4>Set Destination</h4>
              </header>
            </button>
            <button
              className="context-menu-bird-destination-button"
              onClick={menuSendRouteDestinationCommandHandler}
            >
              <header className="popup-header">
                <img className="context-menu-icon" src={addLocationIcon} />
                <h4>Add to route</h4>
              </header>
            </button>
          </TitledFrame>
        )}
        {!bird && (
          <TitledFrame title={"No bird selected!"}>
            <button className="context-menu-bird-destination-button button-unusable">
              <header className="popup-header">
                <img className="context-menu-icon" src={locationIcon} />
                <h4>Set Destination</h4>
              </header>
            </button>
            <button className="context-menu-bird-destination-button button-unusable">
              <header className="popup-header">
                <img className="context-menu-icon" src={addLocationIcon} />
                <h4>Add to route</h4>
              </header>
            </button>
          </TitledFrame>
        )}
      </div>
    </Popup>
  );
};

export default DestinationContextMenu;
