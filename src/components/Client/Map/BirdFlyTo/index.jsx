import { Polyline, Marker, Circle } from "react-leaflet";
import leaflet from "leaflet";
import useIcon from "../../../../hooks/useIcon.jsx";

const BirdFlyTo = ({
  position,
  requiredRoute,
  isCircleFlight,
  circleCenter,
  circleRadius,
}) => {
  const destinationIconUrl = useIcon("location");
  // const circleMoveIcon = useIcon("circle-move");

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

  if (isCircleFlight)
    return (
      <>
        <Marker
          position={circleCenter}
          icon={destinationMarkerIcon}
          opacity={0.6}
        />
        <Circle
          center={[circleCenter.lat, circleCenter.lng]}
          radius={circleRadius}
          pathOptions={{
            opacity: 0.5,
            dashArray: "5 5",
            color: "#111D21F2",
            fillOpacity: 0,
          }}
        />
      </>
    );

  return (
    <>
      <Polyline
        positions={[
          [position.lat, position.lng],
          [requiredRoute[0].lat, requiredRoute[0].lng],
        ]}
        pathOptions={{
          opacity: 0.5,
          dashArray: "5 5",
          color: "#111D21F2",
        }}
      />
      <Marker
        position={requiredRoute[0]}
        icon={destinationMarkerIcon}
        opacity={0.6}
      />
      {requiredRoute.length > 1 &&
        requiredRoute.map((position, i) => {
          if (i === 0) return;

          return (
            <div key={Math.random()}>
              <Polyline
                positions={[
                  [requiredRoute[i - 1].lat, requiredRoute[i - 1].lng],
                  [requiredRoute[i].lat, requiredRoute[i].lng],
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
            </div>
          );
        })}
    </>
  );
};

export default BirdFlyTo;
