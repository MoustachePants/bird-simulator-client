import { Polyline } from "react-leaflet";

const BirdFlyTo = (props) => {
  return (
    <Polyline
      positions={[
        [props.position.lat, props.position.lng],
        [props.requiredPosition.lat, props.requiredPosition.lng],
      ]}
    />
  );
};

export default BirdFlyTo;
