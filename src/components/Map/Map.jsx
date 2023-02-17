import "leaflet/dist/leaflet.css";
import style from "/styles/Home.module.css";
import { useState } from "react";
import {
  LayerGroup,
  MapContainer,
  TileLayer,
  ZoomControl,
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

  const selectBirdHandler = (tailNum) => {
    props.onSelectBird(tailNum);
  };

  return (
    <MapContainer
      className={style.map}
      center={[31.3913935, 35.0263349]}
      zoom={8}
      zoomControl={false}
      scrollWheelZoom={true}
    >
      <ZoomControl position="topright" />
      <TileLayer // ! if I upload online I should add the attribution!
        // attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}"
        ext="jpg"
        maxZoom={16}
      />
      <MapEvents onContextMenu={setMenuState} onDeSelect={selectBirdHandler} />
      <LayerGroup>
        {birdsData.map((bird) => (
          <BirdMarker
            bird={bird}
            key={bird.tailNum}
            onSelect={selectBirdHandler}
            selectedBirdTailNum={props.selectedBirdTailNum}
          />
        ))}
      </LayerGroup>
      {menuState.isOpen && (
        <MapMenu birds={birdsData} position={menuState.position}></MapMenu>
      )}
    </MapContainer>
  );
};

export default Map;
