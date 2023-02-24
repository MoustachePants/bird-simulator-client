import "./BirdMarker.css";

import leaflet from "leaflet";
import { Marker, Popup, Tooltip, useMapEvents } from "react-leaflet";
import { useRef, useState } from "react";
import BirdMenu from "./BirdMenu/BirdMenu.jsx";

const Index = (props) => {
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
          html: `<div class="bird-map-icon-container">
               <div class=${
                 props.selectedBirdTailNum === bird.tailNum
                   ? "bird-map-icon-selected bird-map-icon"
                   : "bird-map-icon"
               }
               }>
                    <img 
                        style="transform: rotate(${bird.bearing}deg);"
                        class="bird-map-icon-img" 
                        height="70" 
                        width="45" 
                        src='/bird/birdIcon.png'
                        alt="bird-icon">
                    </div>
 
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
          },

          click: () => {
            props.onSelect(bird.tailNum);
          },
        }}
      ></Marker>
      {menuState.isOpen && (
        <BirdMenu
          bird={bird}
          position={menuState.position}
          onOpenBirdEyeView={props.onOpenBirdEyeView}
        />
      )}
    </>
  );
};

export default Index;
