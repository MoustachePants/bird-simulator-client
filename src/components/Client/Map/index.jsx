import "leaflet/dist/leaflet.css";
import style from "/styles/Home.module.css";
import { useState } from "react";
import {
  LayerGroup,
  MapContainer,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import BirdMarker from "./BirdMaker/";
import MapEvents from "./MapEvents.jsx";
import ContextMenu from "./DestinationContextMenu/index.jsx";

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
        // attribution='Index tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Index data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
        <ContextMenu
          birds={birdsData}
          position={menuState.position}
          afterUse={setMenuState}
        />
      )}
    </MapContainer>
  );
};

export default Map;
