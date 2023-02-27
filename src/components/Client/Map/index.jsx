import "leaflet/dist/leaflet.css";
import "./Map.css";

import { useState } from "react";
import {
  LayerGroup,
  MapContainer,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import BirdMarker from "./BirdMaker/";
import MapEvents from "./MapEvents.jsx";
import DestinationContextMenu from "./DestinationContextMenu/index.jsx";
import BirdFlyTo from "./BirdFlyTo/index.jsx";
import Entities from "./Entities/index.jsx";

const Map = (props) => {
  const [menuState, setMenuState] = useState({
    isOpen: false,
    position: { lat: 0, lng: 0 },
  });
  const birdsData = props.birdsData;

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
      {/*<ZoomControl position="topright" />*/}
      <TileLayer // ! if I upload online I should add the attribution!
        // attribution='Index tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Index data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}"
        ext="jpg"
      />
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
            {bird.required.position.lat && (
              <BirdFlyTo
                position={bird.position}
                requiredPosition={bird.required.position}
              />
            )}
          </div>
        ))}
      </LayerGroup>
      <Entities display={props.entities} />
      {menuState.isOpen && (
        <DestinationContextMenu
          birds={birdsData}
          position={menuState.position}
          afterUse={setMenuState}
        />
      )}
    </MapContainer>
  );
};

export default Map;
