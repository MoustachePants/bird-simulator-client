import { intervalRate, runFrontInterval, APIURL } from "/config";

import "leaflet/dist/leaflet.css";
import style from "/styles/Home.module.css";

import { useEffect, useState } from "react";

import {
  LayerGroup,
  MapContainer,
  TileLayer,
  Polyline,
  Popup,
} from "react-leaflet";
import BirdMarker from "./BirdMarker.jsx";
import MapEvents from "./MapEvents";
import MapMenu from "./MapMenu.jsx";
const Map = (props) => {
  const [menuState, setMenuState] = useState({
    isOpen: false,
    position: { lat: 0, lng: 0 },
  });
  const birdsData = props.birdsData;

  return (
    <MapContainer
      className={style.map}
      center={[31.3913935, 35.0263349]}
      zoom={8}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapEvents onContextMenu={setMenuState} />
      <LayerGroup>
        {birdsData.map((bird) => (
          <BirdMarker bird={bird} key={bird.tailNum} />
        ))}
      </LayerGroup>
      {menuState.isOpen && (
        <MapMenu birds={birdsData} position={menuState.position}></MapMenu>
      )}
    </MapContainer>
  );
};

export default Map;
