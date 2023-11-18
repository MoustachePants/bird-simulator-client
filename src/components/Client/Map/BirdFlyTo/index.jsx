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

  const routeDestinationMarkerIcon = leaflet.icon({
    iconUrl: destinationIconUrl,
    iconSize: [28, 30],
    iconAnchor: [14, 25],
  });

  return (
    <>
      <Polyline
        positions={[
          [props.position.lat, props.position.lng],
          [props.requiredRoute[0].lat, props.requiredRoute[0].lng],
        ]}
        pathOptions={{ opacity: 0.5, dashArray: "5 5", color: "#111D21F2" }}
      />
      <Marker
        position={props.requiredRoute[0]}
        icon={destinationMarkerIcon}
        opacity={0.6}
      />
      {props.requiredRoute.length > 1 &&
        props.requiredRoute.map((position, i) => {
          if (i === 0) return;

          return (
            <>
              <Polyline
                positions={[
                  [
                    props.requiredRoute[i - 1].lat,
                    props.requiredRoute[i - 1].lng,
                  ],
                  [props.requiredRoute[i].lat, props.requiredRoute[i].lng],
                ]}
                pathOptions={{
                  opacity: 0.3,
                  dashArray: "5 5",
                  color: "#111D21F2",
                }}
              />
              <Marker
                position={position}
                icon={routeDestinationMarkerIcon}
                opacity={0.4}
                key={Math.random()}
              />
            </>
          );
        })}
    </>
  );
};

export default BirdFlyTo;
