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

  const frameTitle = bird
    ? bird.name + " #" + bird.tailNum
    : "No bird selected!";

  const destinationButtonClasses = bird
    ? "context-menu-bird-destination-button"
    : "context-menu-bird-destination-button button-unusable";

  const addToRouteButtonClasses =
    bird && !bird.state.isCircleFlight
      ? "context-menu-bird-destination-button"
      : "context-menu-bird-destination-button button-unusable";

  // !BUG - when bird is selected and add to route button is pressed, the popup closes where it should not.

  return (
    <Popup position={props.position} closeButton={false} offset={[95, 110]}>
      <div className="popup-container">
        <TitledFrame title={frameTitle}>
          <button
            className={destinationButtonClasses}
            onClick={menuSendDestinationCommandHandler}
          >
            <header className="popup-header">
              <img className="context-menu-icon" src={locationIcon} />
              <h4>Set Destination</h4>
            </header>
          </button>
          <button
            className={addToRouteButtonClasses}
            onClick={menuSendRouteDestinationCommandHandler}
          >
            <header className="popup-header">
              <img className="context-menu-icon" src={addLocationIcon} />
              <h4>Add to route</h4>
            </header>
          </button>
        </TitledFrame>
      </div>
    </Popup>
  );
};

export default DestinationContextMenu;
