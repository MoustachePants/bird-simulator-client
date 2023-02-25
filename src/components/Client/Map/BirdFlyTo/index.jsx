import { Polyline, Marker } from "react-leaflet";

const BirdFlyTo = (props) => {
  return (
    <>
      <Polyline
        positions={[
          [props.position.lat, props.position.lng],
          [props.requiredPosition.lat, props.requiredPosition.lng],
        ]}
        pathOptions={{ opacity: 0.5, dashArray: "5 5" }}
      />
      <Marker position={props.requiredPosition} />
    </>
  );
};

export default BirdFlyTo;
