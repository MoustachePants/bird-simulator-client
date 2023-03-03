import { Polyline, Marker } from "react-leaflet";
import leaflet from "leaflet";
import useIcon from "../../../../hooks/useIcon.jsx";

const BirdFlyTo = (props) => {
  const destinationIconUrl = useIcon("location");

  const destinationMarkerIcon = leaflet.icon({
    iconUrl: destinationIconUrl,
    iconSize: [38, 40],
    iconAnchor: [19, 36],
  });

  return (
    <>
      <Polyline
        positions={[
          [props.position.lat, props.position.lng],
          [props.requiredPosition.lat, props.requiredPosition.lng],
        ]}
        pathOptions={{ opacity: 0.5, dashArray: "5 5", color: "#111D21F2" }}
      />
      <Marker
        position={props.requiredPosition}
        icon={destinationMarkerIcon}
        opacity={0.6}
      />
    </>
  );
};

export default BirdFlyTo;
