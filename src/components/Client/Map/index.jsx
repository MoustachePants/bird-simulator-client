import "leaflet/dist/leaflet.css";
import "./Map.css";

import { useEffect, useState } from "react";
import { LayerGroup, MapContainer } from "react-leaflet";
import BirdMarker from "./BirdMaker/";
import MapEvents from "./MapEvents.jsx";
import DestinationContextMenu from "./DestinationContextMenu/index.jsx";
import BirdFlyTo from "./BirdFlyTo/index.jsx";
import Entities from "./Entities/index.jsx";
import Tiles from "./Tiles/index.jsx";
import { APIURL } from "../../../../config.js";

const Map = (props) => {
  const [menuState, setMenuState] = useState({
    isOpen: false,
    position: { lat: 0, lng: 0 },
  });
  const [entities, setEntities] = useState();
  const birdsData = props.birdsData;

  useEffect(() => {
    const fetchEntitiesFromServer = async () => {
      const res = await fetch(APIURL + "entities");
      const data = await res.json();
      setEntities(data);
    };

    fetchEntitiesFromServer();
  }, []);

  const selectBirdHandler = (tailNum) => {
    props.onSelectBird(tailNum);
  };

  return (
    <MapContainer
      className="map"
      center={[31.3913935, 35.0263349]}
      zoom={8}
      zoomControl={false}
      scrollWheelZoom={true}
      minZoom={5}
      maxZoom={15}
    >
      <Tiles selectedTile={props.properties.currentMap} />
      <MapEvents onContextMenu={setMenuState} onDeSelect={selectBirdHandler} />
      <LayerGroup>
        {birdsData.map((bird) => (
          <div key={bird.tailNum}>
            <BirdMarker
              bird={bird}
              onSelect={selectBirdHandler}
              selectedBirdTailNum={props.selectedBirdTailNum}
              onOpenBirdEyeView={props.onOpenBirdEyeView}
            />
            {bird.required.position[0].lat && (
              <BirdFlyTo
                position={bird.position}
                requiredRoute={bird.required.position}
              />
            )}
          </div>
        ))}
      </LayerGroup>
      {entities && (
        <Entities display={props.properties.entities} entities={entities} />
      )}
      {menuState.isOpen && (
        <DestinationContextMenu
          birds={birdsData}
          position={menuState.position}
          selectedBird={birdsData[props.selectedBirdIndex]}
        />
      )}
    </MapContainer>
  );
};

export default Map;
