import { PerspectiveCamera, PointerLockControls } from "@react-three/drei";
import {
  createLatLngToXYConverter,
  coordSet,
} from "../../utils/latLngToXYConvertor.js";
import { useEffect, useState } from "react";

const Bird = (props) => {
  const [birdPosition, setBirdPosition] = useState({ x: 1, y: 1 });

  const convertLatLngToXY = createLatLngToXYConverter(coordSet);

  useEffect(() => {
    setBirdPosition(
      convertLatLngToXY({ x: props.position.lat, y: props.position.lng })
    );
  });

  const birdAltitude = -2.9 + props.altitude / 1000; // used to calibrate the altitude

  return (
    // <Box
    //   args={[0.1, 0.1, 0.1]}
    //   material-color="red"
    //   position={[birdPosition.x, birdAltitude, birdPosition.y]}
    // />

    //   ! BUG - The camera doesn't stay on the right spot when unlocking && cant lock sometimes
    //   ! i found this discussion about it: https://discourse.threejs.org/t/how-to-avoid-pointerlockcontrols-error/33017/3

    <PointerLockControls selector={".canvas-container"}>
      <PerspectiveCamera
        makeDefault
        position={[birdPosition.x, birdAltitude, birdPosition.y]}
        attach="camera"
      />
    </PointerLockControls>
  );
};

export default Bird;
