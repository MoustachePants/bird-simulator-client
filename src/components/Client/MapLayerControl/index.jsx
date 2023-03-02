import "./MapLayerControl.css";

import RadioSwitch from "../../UI/RadioSwitch/index.jsx";

const MapLayerControl = (props) => {
  const onMapSwitchChangeHandler = (value) => {
    props.setFilter((prev) => {
      const newState = { ...prev };
      newState.currentMap = value;
      return newState;
    });
  };

  const onFilterHandler = (property) => {
    props.setFilter((prev) => {
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
      />
      <section className="map-filter">
        {/*<MapProperty*/}
        {/*  title="Migration Paths"*/}
        {/*  property="migrationPaths"*/}
        {/*  onClick={filterMethod}*/}
        {/*  value={props.filter.migrationPaths}*/}
        {/*  icon="route"*/}
        {/*/>*/}
        {/*<MapProperty*/}
        {/*  title="Feeding Areas"*/}
        {/*  property="feedingAreas"*/}
        {/*  onClick={filterMethod}*/}
        {/*  value={props.filter.feedingAreas}*/}
        {/*  icon="hunger"*/}
        {/*/>*/}
      </section>
    </div>
  );
};

export default MapLayerControl;
