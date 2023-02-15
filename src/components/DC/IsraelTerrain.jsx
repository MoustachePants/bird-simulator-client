import { Plane } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { useEffect, useRef } from "react";

const IsraelTerrain = () => {
  const elevation = useLoader(TextureLoader, "/DC/israelHeightMap.png");
  const normalMap = useLoader(TextureLoader, "/DC/NormalMap.png");
  const map = useLoader(TextureLoader, "/DC/israelSized.jpg");

  const planeRef = useRef(null);

  return (
    <Plane
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -3, 0]}
      args={[256, 256, 1024, 1024]}
      ref={planeRef}
    >
      <meshStandardMaterial
        attach="material"
        color="white"
        map={map}
        metalness={1}
        normalMap={normalMap}
        displacementMap={elevation}
        displacementScale={3}
      />
    </Plane>
  );
};

export default IsraelTerrain;
