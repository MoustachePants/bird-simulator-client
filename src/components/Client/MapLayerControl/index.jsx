import "./MapLayerControl.css";

import RadioSwitch from "../../UI/RadioSwitch/index.jsx";
import TitledFrame from "../../UI/TitledFrame/index.jsx";
import { useState } from "react";
import useIcon from "../../../hooks/useIcon.jsx";

const MapLayerControl = (props) => {
  const [display, setDisplay] = useState(false);
  const layersIcon = useIcon("layers");

  const onHoverHandler = () => {
    setDisplay((prev) => !prev);
  };

  const onMapSwitchChangeHandler = (value) => {
    props.onSelectProperties((prev) => {
      const newState = { ...prev };
      newState.currentMap = value;
      return newState;
    });
  };

  const onFilterHandler = (event) => {
    props.onSelectProperties((prev) => {
      const newState = { ...prev };
      newState.entities[event.target.name].display = event.target.checked;
      return newState;
    });
  };

  return (
    <div className="map-layer-control-container">
      {display ? (
        <div className="map-layer-control" onMouseLeave={onHoverHandler}>
          <TitledFrame title="Map">
            <RadioSwitch
              options={["Water Color", "Satellite"]}
              onChange={onMapSwitchChangeHandler}
              checked={props.properties.currentMap}
            />
          </TitledFrame>
          <TitledFrame title="Entities">
            <section className="map-filter">
              {Object.keys(props.properties.entities).map((entity) => (
                <div
                  className="map-entity-checkbox-container"
                  key={Math.random()}
                >
                  <input
                    type="checkbox"
                    id={entity + "-checkbox"}
                    name={entity}
                    checked={props.properties.entities[entity].display}
                    onChange={onFilterHandler}
                  />
                  <label htmlFor={entity + "-checkbox"}>
                    {props.properties.entities[entity].name}
                  </label>
                </div>
              ))}
            </section>
          </TitledFrame>
        </div>
      ) : (
        <img
          className="layers-icon"
          src={layersIcon}
          onMouseOver={onHoverHandler}
        />
      )}
    </div>
  );
};

export default MapLayerControl;
