import "./BirdMarker.css";

import leaflet from "leaflet";
import { Marker } from "react-leaflet";
import { useRef, useState } from "react";
import BirdMenu from "./BirdMenu/index";
import useIcon from "../../../../hooks/useIcon.jsx";

const BirdMarker = (props) => {
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
          iconAnchor: [44, 48],
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
                    <div class="bird-map-icon-properties">
                    <h4 class="bird-map-icon-name">${bird.name}</h4>
                    ${Number(bird.altitude).toFixed(
                      props.bird.altitude < 100
                        ? 2
                        : props.bird.altitude < 1000
                        ? 1
                        : 0
                    )}
                    </div>

                </div>`,
        })}
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

export default BirdMarker;
