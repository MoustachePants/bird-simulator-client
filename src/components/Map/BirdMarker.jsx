import "./BirdMarker.css";

import leaflet from "leaflet";
import { Marker, Popup, Tooltip } from "react-leaflet";
import { useRef, useState } from "react";
import BirdMenu from "./BirdMenu.jsx";

const BirdMarker = (props) => {
  const [isChecked, setIfChecked] = useState(false);
  const markerRef = useRef();
  const [menuState, setMenuState] = useState({
    isOpen: false,
    position: { lat: 0, lng: 0 },
  });

  const bird = props.bird;

  return (
    <>
      <Marker
        position={[bird.position.lat, bird.position.lng]}
        icon={leaflet.divIcon({
          iconSize: [90, 60],
          iconAnchor: [45, 30],
          html: `<div>
                <img 
                    style="transform: rotate(${bird.bearing}deg);"
                    class="bird-map-icon"
                    height="70" 
                    width="45" 
                    src='/bird/birdIcon.png'
                    alt="bird-icon">
                    
                ${bird.altitude}
                </div>`,
        })}
        // rotationAngle={bird.heading}
        // rotationOrigin={"center"}
        style="transform: rotate(80deg);"
        key={Math.random()}
        ref={markerRef}
        eventHandlers={{
          contextmenu: () => {
            setMenuState({
              isOpen: true,
              position: markerRef.current.getLatLng(),
            });

            // setMarkerPosition(() => markerRef.current.getLatLng());
            // setIsBirdMenuOpen((prev) => !prev);
          },
          // checked: () => {
          //   setIfChecked(true);
          // },
        }}
      ></Marker>
      {menuState.isOpen && (
        <BirdMenu bird={bird} position={menuState.position} />
      )}
    </>
  );
};

export default BirdMarker;
