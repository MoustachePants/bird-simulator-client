import "./BirdMarker.css";

import leaflet from "leaflet";
import { Marker, Popup, Tooltip, useMapEvents } from "react-leaflet";
import { useRef, useState } from "react";
import BirdMenu from "./BirdMenu/BirdMenu.jsx";
import useIcon from "../../../../hooks/useIcon.jsx";

const Index = (props) => {
  const markerRef = useRef();
  const [menuState, setMenuState] = useState({
    isOpen: false,
    position: { lat: 0, lng: 0 },
  });
  const markerIcon = useIcon(props.bird.type);

  const bird = props.bird;

  return (
    <>
      <Marker
        position={[bird.position.lat, bird.position.lng]}
        icon={leaflet.divIcon({
          iconSize: [90, 60],
          iconAnchor: [30, 50],
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
                        src='${markerIcon}'
                        alt="bird-icon">
                    </div>
 
                    ${Number(bird.altitude).toFixed(
                      props.bird.altitude <= 100
                        ? 2
                        : props.bird.altitude <= 1000
                        ? 1
                        : 0
                    )}
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
