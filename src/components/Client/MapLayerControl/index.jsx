import "./MapLayerControl.css";

import RadioSwitch from "../../UI/RadioSwitch/index.jsx";
import MapProperty from "./MapProperty/index.jsx";

const MapLayerControl = (props) => {
  const onMapSwitchChangeHandler = (value) => {
    props.onSelectProperties((prev) => {
      const newState = { ...prev };
      newState.currentMap = value;
      return newState;
    });
  };

  const onFilterHandler = (property) => {
    props.onSelectProperties((prev) => {
      const newState = { ...prev };
      newState.entities[property] = !newState[property];
      return newState;
    });
  };

  return (
    <div className="map-layer-control-container">
      <RadioSwitch
        options={["Water Color", "Satellite"]}
        onChange={onMapSwitchChangeHandler}
        checked={props.properties.currentMap}
      />
      <section className="map-filter">
        <h4>Properties</h4>

        {/*<MapProperty*/}
        {/*  title="Migration Paths"*/}
        {/*  property="migrationPaths"*/}
        {/*  onClick={onFilterHandler}*/}
        {/*  value={props.properties.entities.migrationPaths}*/}
        {/*  icon="route"*/}
        {/*/>*/}
        {/*<MapProperty*/}
        {/*  title="Feeding Areas"*/}
        {/*  property="feedingAreas"*/}
        {/*  onClick={onFilterHandler}*/}
        {/*  value={props.properties.entities.feedingAreas}*/}
        {/*  icon="hunger"*/}
        {/*/>*/}
      </section>
    </div>
  );
};

export default MapLayerControl;
