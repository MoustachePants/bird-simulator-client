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
const Map = () => {
  const [birdsData, setBirdsData] = useState([]);
  const [menuState, setMenuState] = useState({
    isOpen: false,
    position: { lat: 0, lng: 0 },
  });

  useEffect(() => {
    if (!runFrontInterval) return;

    setInterval(async () => {
      const fetchBirdsData = async () => {
        const res = await fetch(APIURL);
        const data = await res.json();
        setBirdsData(data);
      };

      await fetchBirdsData();
    }, intervalRate);
  }, []);

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
        <Polyline
          positions={[
            { lat: 31.907, lng: 34.707415 },
            { lat: 30.907, lng: 35.707415 },
          ]}
        />
      </LayerGroup>
      {menuState.isOpen && (
        <MapMenu birds={birdsData} position={menuState.position}></MapMenu>
      )}
    </MapContainer>
  );
};

export default Map;
